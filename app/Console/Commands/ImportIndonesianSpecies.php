<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Species;
use App\Models\Media;
use App\Http\Controllers\GbifService;

class ImportIndonesianSpecies extends Command
{
    protected $signature = 'app:import-species {--limit=0 : Batasi jumlah impor (0 = semua)}';
    protected $description = 'Impor massal flora & fauna Indonesia dari GBIF + Wikipedia + Wikimedia Commons';

    // 🌿 DAFTAR FLORA & FAUNA IKONIK INDONESIA
    protected $speciesList = [
        // === FAUNA ===
        'Panthera tigris sumatrae',    // Harimau Sumatera
        'Dicerorhinus sumatrensis',    // Badak Sumatera
        'Pongo pygmaeus',              // Orangutan Kalimantan
        'Varanus komodoensis',         // Komodo
        'Leucopsar rothschildi',       // Jalak Bali
        'Nisaetus bartelsi',           // Elang Jawa
        'Trachypithecus auratus',      // Lutung Jawa
        'Cacatua sulphurea',           // Kakatua Jambul Kuning
        'Macrocephalon maleo',         // Burung Maleo
        'Casuarius casuarius',         // Kasuari
        'Bubalus depressicornis',      // Anoa
        'Babyrousa babyrussa',         // Babi Rusa
        'Scleropages formosus',        // Arwana Asia
        // === FLORA ===
        'Phalaenopsis amabilis',       // Anggrek Bulan
        'Jasminum sambac',             // Melati
        'Santalum album',              // Cendana
        'Aquilaria malaccensis',       // Gaharu
        'Nepenthes mirabilis',         // Kantong Semar
        'Eucalyptus deglupta',         // Pelangi Eucalyptus
    ];

    // Status konservasi (IUCN) yang diketahui
    protected $statusMap = [
        'Panthera tigris sumatrae' => 'CR',
        'Dicerorhinus sumatrensis' => 'CR',
        'Pongo pygmaeus' => 'CR',
        'Varanus komodoensis' => 'EN',
        'Leucopsar rothschildi' => 'EN',
        'Nisaetus bartelsi' => 'EN',
        'Cacatua sulphurea' => 'CR',
        'Macrocephalon maleo' => 'EN',
        'Bubalus depressicornis' => 'EN',
        'Babyrousa babyrussa' => 'VU',
        'Scleropages formosus' => 'EN',
        'Santalum album' => 'VU',
        'Aquilaria malaccensis' => 'CR',
    ];

    // Spesies endemik Indonesia
    protected $endemicMap = [
        'Panthera tigris sumatrae' => true,
        'Dicerorhinus sumatrensis' => true,
        'Varanus komodoensis' => true,
        'Leucopsar rothschildi' => true,
        'Nisaetus bartelsi' => true,
        'Trachypithecus auratus' => true,
        'Macrocephalon maleo' => true,
    ];

    public function handle(GbifService $gbif)
    {
        $limit = (int) $this->option('limit');
        $list = $limit > 0 ? array_slice($this->speciesList, 0, $limit) : $this->speciesList;

        $this->info(" Mulai impor " . count($list) . " spesies...\n");

        foreach ($list as $name) {
            
            if (Species::where('accepted_name', $name)->exists()) {
                $this->line("⏭️  {$name} sudah ada, dilewati\n");
                continue;
            }

            $this->info("▶ Mengimpor: {$name}");

            try {
                // 1. Ambil taksonomi lengkap dari GBIF
                $result = $gbif->searchAndCreateTaxonomy($name);

                if (!$result['success']) {
                    $this->error("   GBIF: " . ($result['message'] ?? 'gagal'));
                    continue;
                }

                $data = $result['data'];

                // 2. Buat record spesies
                $species = Species::create([
                    'genus_id' => $data['genus_id'],
                    'citation_id' => $data['citation_id'] ?? null,
                    'accepted_name' => $data['accepted_name'],
                    'common_name' => $data['common_name'] ?? $name,
                    'description_simple' => $data['description'] ?? null,
                    'habitat' => $data['habitat'] ?? null,
                    'conservation_status' => $this->statusMap[$name] ?? 'LC',
                    'is_endemic' => $this->endemicMap[$name] ?? false,
                ]);
                $this->line("   Spesies dibuat (ID {$species->id})");

                // 3. Deskripsi Bahasa Indonesia dari Wikipedia
                $wiki = $gbif->fetchWikipediaData($species->common_name ?: $name);
                if ($wiki && !empty($wiki['description'])) {
                    $species->description_simple = $wiki['description'];
                    $species->save();
                    $this->line("   Deskripsi Wikipedia ID");
                }

                // 4. Foto dari Wikimedia Commons
                $images = $gbif->fetchCommonsImages($data['accepted_name'], 3);
                foreach ($images as $i => $url) {
                    Media::create([
                        'species_id' => $species->id,
                        'image_url' => $url,
                        'caption' => ($species->common_name ?? $name) . ' (foto ' . ($i + 1) . ')',
                        'life_stage' => 'adult',
                    ]);
                }
                if (count($images) > 0) {
                    $this->line("   " . count($images) . " foto Commons");
                }
            } catch (\Exception $e) {
                $this->error("   Error: " . $e->getMessage());
            }

            sleep(1); // Jeda agar tidak di-block API
            $this->line("");
        }

        $this->info("🎉 IMPOR SELESAI! Total spesies sekarang: " . Species::count());
        return 0;
    }
}