<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Species;
use App\Models\Media;
use App\Http\Controllers\GbifService;

class EnrichSpeciesData extends Command
{
    protected $signature = 'app:enrich-species {--force : Paksa update semua data}';
    protected $description = 'Isi otomatis deskripsi Wikipedia ID + foto untuk semua spesies';

    public function handle(GbifService $gbif)
    {
        $force = $this->option('force');
        $speciesList = Species::all();

        $this->info("Memproses " . $speciesList->count() . " spesies...\n");

        foreach ($speciesList as $species) {
            $query = $species->common_name ?: $species->accepted_name;
            $this->info("▶ {$query}");

            // 1. DESKRIPSI WIKIPEDIA ID
            if ($force || empty($species->description_simple)) {
                $wiki = $gbif->fetchWikipediaData($query);
                
                if ($wiki && !empty($wiki['description'])) {
                    $species->description_simple = $wiki['description'];
                    $species->save();
                    $this->line("  ✅ Deskripsi Wikipedia ID");
                } else {
                    // Fallback: coba dengan nama latin
                    $wikiLatin = $gbif->fetchWikipediaData($species->accepted_name);
                    if ($wikiLatin && !empty($wikiLatin['description'])) {
                        $species->description_simple = $wikiLatin['description'];
                        $species->save();
                        $this->line("  ✅ Deskripsi (via nama latin)");
                    } else {
                        $this->line("  ⚠️  Tidak ada deskripsi");
                    }
                }
            }

            // 2. FOTO: Coba Commons dulu, fallback ke Wikipedia thumbnail
            if ($force || $species->media()->count() === 0) {
                $images = [];

                // A. Coba Wikimedia Commons dengan nama latin (lebih akurat)
                $commons = $gbif->fetchCommonsImages($species->accepted_name, 3);
                if (count($commons) > 0) {
                    $images = $commons;
                    $this->line("  ✅ " . count($images) . " foto dari Wikimedia Commons");
                }

                // B. Jika Commons kosong, gunakan thumbnail Wikipedia
                if (empty($images)) {
                    $wiki = $gbif->fetchWikipediaData($query);
                    if (!$wiki) {
                        $wiki = $gbif->fetchWikipediaData($species->accepted_name);
                    }
                    
                    if ($wiki && !empty($wiki['image'])) {
                        $images = [$wiki['image']];
                        $this->line("  ✅ 1 foto dari Wikipedia thumbnail");
                    }
                }

                // C. Simpan semua gambar ke database
                if (!empty($images)) {
                    // Hapus foto lama jika mode force
                    if ($force) {
                        $species->media()->delete();
                    }
                    
                    foreach ($images as $i => $url) {
                        Media::create([
                            'species_id' => $species->id,
                            'image_url' => $url,
                            'caption' => ($species->common_name ?? $species->accepted_name) . ' (foto ' . ($i + 1) . ')',
                            'life_stage' => 'adult',
                        ]);
                    }
                } else {
                    $this->line("  ⚠️  Tidak ada foto tersedia");
                }
            }

            sleep(1);
            $this->line("");
        }

        $this->info("🎉 SELESAI! Semua spesies sudah diperkaya.");
        return 0;
    }
}