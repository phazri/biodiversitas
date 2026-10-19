<?php

namespace Database\Seeders;

use App\Models\Kingdom;
use App\Models\Phylum;
use App\Models\TaxonClass;
use App\Models\TaxonOrder;
use App\Models\Family;
use App\Models\Genus;
use App\Models\Species;
use App\Models\Citation;
use App\Models\Media;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
         
        $citation1 = Citation::firstOrCreate(['title' => 'Mammals of Indonesia'], [
            'authors' => 'Kinnear, N. & Bonner, N.',
            'year' => 2020,
            'source_type' => 'book',
            'apa_formatted_text' => 'Kinnear, N., & Bonner, N. (2020). Mammals of Indonesia. Jakarta Press.'
        ]);

        $citation2 = Citation::firstOrCreate(['title' => 'Reptiles of the Indonesian Archipelago'], [
            'authors' => 'Smith, J. & Doe, A.',
            'year' => 2021,
            'source_type' => 'journal',
            'apa_formatted_text' => 'Smith, J., & Doe, A. (2021). Reptiles of the Indonesian Archipelago. Journal of Herpetology, 55(2), 112-130.'
        ]);

        // 2. Buat Hierarki Taksonomi (Kingdom -> Genus)
        // Kita gunakan firstOrCreate agar tidak duplikat saat di-run berkali-kali
        $kingdom = Kingdom::firstOrCreate(['name' => 'Animalia'], ['description' => 'Kingdom untuk semua hewan.']);
        $phylum = Phylum::firstOrCreate(['kingdom_id' => $kingdom->id, 'name' => 'Chordata'], ['description' => 'Hewan dengan tulang belakang.']);
        
        // Kelas Mammalia
        $classMammalia = TaxonClass::firstOrCreate(['phylum_id' => $phylum->id, 'name' => 'Mammalia'], ['description' => 'Hewan menyusui.']);
        // Kelas Reptilia
        $classReptilia = TaxonClass::firstOrCreate(['phylum_id' => $phylum->id, 'name' => 'Reptilia'], ['description' => 'Hewan melata berdarah dingin.']);

        // --- Spesies 1: Gajah Sumatera ---
        $orderProboscidea = TaxonOrder::firstOrCreate(['class_id' => $classMammalia->id, 'name' => 'Proboscidea']);
        $familyElephantidae = Family::firstOrCreate(['order_id' => $orderProboscidea->id, 'name' => 'Elephantidae']);
        $genusElephas = Genus::firstOrCreate(['family_id' => $familyElephantidae->id, 'name' => 'Elephas']);
        
        Species::firstOrCreate(['accepted_name' => 'Elephas maximus sumatranus'], [
            'genus_id' => $genusElephas->id,
            'citation_id' => $citation1->id,
            'common_name' => 'Gajah Sumatera',
            'description_simple' => 'Subspesies gajah asia yang endemik di pulau Sumatera. Memiliki ukuran lebih kecil dari gajah india.',
            'habitat' => 'Hutan hujan tropis, hutan rawa',
            'conservation_status' => 'CR', // Critically Endangered
            'is_endemic' => true
        ]);

        // --- Spesies 2: Orangutan Sumatera ---
        $orderPrimates = TaxonOrder::firstOrCreate(['class_id' => $classMammalia->id, 'name' => 'Primates']);
        $familyHominidae = Family::firstOrCreate(['order_id' => $orderPrimates->id, 'name' => 'Hominidae']);
        $genusPongo = Genus::firstOrCreate(['family_id' => $familyHominidae->id, 'name' => 'Pongo']);

        Species::firstOrCreate(['accepted_name' => 'Pongo abelii'], [
            'genus_id' => $genusPongo->id,
            'citation_id' => $citation1->id,
            'common_name' => 'Orangutan Sumatera',
            'description_simple' => 'Primata besar yang hidup di pohon, hanya ditemukan di hutan Sumatera.',
            'habitat' => 'Hutan dataran rendah dan pegunungan',
            'conservation_status' => 'CR',
            'is_endemic' => true
        ]);

        // --- Spesies 3: Badak Jawa ---
        $orderPerissodactyla = TaxonOrder::firstOrCreate(['class_id' => $classMammalia->id, 'name' => 'Perissodactyla']);
        $familyRhinocerotidae = Family::firstOrCreate(['order_id' => $orderPerissodactyla->id, 'name' => 'Rhinocerotidae']);
        $genusRhinoceros = Genus::firstOrCreate(['family_id' => $familyRhinocerotidae->id, 'name' => 'Rhinoceros']);

        Species::firstOrCreate(['accepted_name' => 'Rhinoceros sondaicus'], [
            'genus_id' => $genusRhinoceros->id,
            'citation_id' => $citation1->id,
            'common_name' => 'Badak Jawa',
            'description_simple' => 'Salah satu mamalia paling langka di dunia, hanya tersisa di Ujung Kulon.',
            'habitat' => 'Hutan hujan dataran rendah, padang rumput, hutan bambu',
            'conservation_status' => 'CR',
            'is_endemic' => true
        ]);

        // --- Spesies 4: Harimau Sumatera ---
        $orderCarnivora = TaxonOrder::firstOrCreate(['class_id' => $classMammalia->id, 'name' => 'Carnivora']);
        $familyFelidae = Family::firstOrCreate(['order_id' => $orderCarnivora->id, 'name' => 'Felidae']);
        $genusPanthera = Genus::firstOrCreate(['family_id' => $familyFelidae->id, 'name' => 'Panthera']);

        Species::firstOrCreate(['accepted_name' => 'Panthera tigris sumatrae'], [
            'genus_id' => $genusPanthera->id,
            'citation_id' => $citation1->id,
            'common_name' => 'Harimau Sumatera',
            'description_simple' => 'Subspesies harimau terkecil yang masih bertahan hidup, endemik Sumatera.',
            'habitat' => 'Hutan hujan tropis, hutan rawa gambut',
            'conservation_status' => 'CR',
            'is_endemic' => true
        ]);

        // --- Spesies 5: Komodo ---
        $orderSquamata = TaxonOrder::firstOrCreate(['class_id' => $classReptilia->id, 'name' => 'Squamata']);
        $familyVaranidae = Family::firstOrCreate(['order_id' => $orderSquamata->id, 'name' => 'Varanidae']);
        $genusVaranus = Genus::firstOrCreate(['family_id' => $familyVaranidae->id, 'name' => 'Varanus']);

        Species::firstOrCreate(['accepted_name' => 'Varanus komodoensis'], [
            'genus_id' => $genusVaranus->id,
            'citation_id' => $citation2->id,
            'common_name' => 'Komodo',
            'description_simple' => 'Kadal terbesar di dunia yang hanya ditemukan di beberapa pulau di NTT.',
            'habitat' => 'Padang savana, hutan tropis kering',
            'conservation_status' => 'EN', // Endangered
            'is_endemic' => true
        ]);

        // 3. Tambahkan Dummy Media (Gambar) untuk Gajah Sumatera
        $gajahSumatera = Species::where('common_name', 'Gajah Sumatera')->first();
        if ($gajahSumatera) {
            Media::firstOrCreate(['species_id' => $gajahSumatera->id, 'image_url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Asian_Elephant_%28Elephas_maximus%29.jpg/800px-Asian_Elephant_%28Elephas_maximus%29.jpg'], [
                'caption' => 'Gajah Sumatera dewasa di habitat aslinya.',
                'life_stage' => 'adult',
                'is_self_photographed' => false
            ]);
        }
    }
}