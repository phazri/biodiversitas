<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Media;
use App\Models\Species;

class SpeciesImageSeeder extends Seeder
{
    public function run(): void
    {
        // Hapus media lama
        Media::truncate();

        $speciesImages = [
            1 => ['url' => 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80', 'caption' => 'Gajah Sumatera dewasa di habitat aslinya'],
            2 => ['url' => 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80', 'caption' => 'Orangutan Sumatera di pohon'],
            3 => ['url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Javan_rhinoceros.jpg/800px-Javan_rhinoceros.jpg', 'caption' => 'Badak Jawa di Taman Nasional Ujung Kulon'],
            4 => ['url' => 'https://images.unsplash.com/photo-1535083783855-76ae62050f58?w=800&q=80', 'caption' => 'Banteng Jawa di habitat alami'],
            5 => ['url' => 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80', 'caption' => 'Elang Jawa terbang'],
            6 => ['url' => 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80', 'caption' => 'Lutung Jawa di hutan'],
            7 => ['url' => 'https://images.unsplash.com/photo-1550948537-135a32a4e4c1?w=800&q=80', 'caption' => 'Jalak Bali endemik'],
            8 => ['url' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', 'caption' => 'Bekantan di hutan mangrove'],
        ];

        foreach ($speciesImages as $speciesId => $data) {
            Media::create([
                'species_id' => $speciesId,
                'image_url' => $data['url'],
                'caption' => $data['caption'],
                'life_stage' => 'adult',
            ]);

            $species = Species::find($speciesId);
            echo "OK - Species ID {$speciesId}: " . ($species->common_name ?? '-') . "\n";
        }

        echo "SELESAI! Semua gambar berhasil ditambahkan.\n";
    }
}