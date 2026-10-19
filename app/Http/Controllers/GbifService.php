<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Models\Kingdom;
use App\Models\Phylum;
use App\Models\TaxonClass;
use App\Models\TaxonOrder;
use App\Models\Family;
use App\Models\Genus;
use App\Models\Citation;

class GbifService extends Controller
{
    protected $baseUrl = 'https://api.gbif.org/v1';
    
    public function searchAndCreateTaxonomy($scientificName)
    {
        try {
            
            $response = Http::timeout(15)->get("{$this->baseUrl}/species/search", [
                'q' => $scientificName,
                'limit' => 1
            ]);
            
            if ($response->failed()) {
                return ['success' => false, 'message' => 'Gagal menghubungi GBIF API'];
            }
            
            $data = $response->json();
            
            if (empty($data['results'])) {
                return ['success' => false, 'message' => 'Spesies tidak ditemukan di GBIF'];
            }
            
            $species = $data['results'][0];
            $speciesKey = $species['key'];
            
            // 2. Ambil data LENGKAP dari berbagai endpoint GBIF
            
            // A. Detail spesies lengkap
            $detailResponse = Http::get("{$this->baseUrl}/species/{$speciesKey}");
            $detailData = $detailResponse->json();
            
            // B. Nama-nama lokal (vernacular names)
            $vernacularResponse = Http::get("{$this->baseUrl}/species/{$speciesKey}/vernacularNames");
            $vernacularNames = $vernacularResponse->json()['results'] ?? [];
            
            // C. Deskripsi
            $descriptionResponse = Http::get("{$this->baseUrl}/species/{$speciesKey}/descriptions");
            $descriptions = $descriptionResponse->json()['results'] ?? [];
            
            // D. Distribusi
            $distributionResponse = Http::get("{$this->baseUrl}/species/{$speciesKey}/distributions");
            $distributions = $distributionResponse->json()['results'] ?? [];
            
            // E. Images/Media
            $mediaResponse = Http::get("{$this->baseUrl}/species/{$speciesKey}/media");
            $media = $mediaResponse->json()['results'] ?? [];
            
            // F. Literature/Citations
            $literatureResponse = Http::get("{$this->baseUrl}/species/{$speciesKey}/literature");
            $literature = $literatureResponse->json()['results'] ?? [];

            
            // 3. Buat hierarki taksonomi (dari atas ke bawah)
            $kingdom = Kingdom::firstOrCreate(
                ['name' => $species['kingdom'] ?? 'Animalia'],
                ['name' => $species['kingdom'] ?? 'Animalia']
            );
            
            $phylum = Phylum::firstOrCreate(
                ['name' => $species['phylum'] ?? 'Chordata'],
                ['kingdom_id' => $kingdom->id, 'name' => $species['phylum'] ?? 'Chordata']
            );
            
            $className = $species['class'] ?? null;
            if (!$className) {
                return ['success' => false, 'message' => 'Data class tidak tersedia'];
            }
            $taxonClass = TaxonClass::firstOrCreate(
                ['name' => $className],
                ['phylum_id' => $phylum->id, 'name' => $className]
            );
            
            $orderName = $species['order'] ?? null;
            if (!$orderName) {
                return ['success' => false, 'message' => 'Data order tidak tersedia'];
            }
            $taxonOrder = TaxonOrder::firstOrCreate(
                ['name' => $orderName],
                ['class_id' => $taxonClass->id, 'name' => $orderName]
            );
            
            $familyName = $species['family'] ?? null;
            if (!$familyName) {
                return ['success' => false, 'message' => 'Data family tidak tersedia'];
            }
            $family = Family::firstOrCreate(
                ['name' => $familyName],
                ['order_id' => $taxonOrder->id, 'name' => $familyName]
            );
            
            $genusName = $species['genus'] ?? null;
            if (!$genusName) {
                return ['success' => false, 'message' => 'Data genus tidak tersedia'];
            }
            $genus = Genus::firstOrCreate(
                ['name' => $genusName],
                ['family_id' => $family->id, 'name' => $genusName]
            );
             
                $citationId = null;

                if (!empty($literature)) {
                    
                    $bestCitation = collect($literature)
                        ->filter(function($lit) {
                            return isset($lit['title']) && !empty($lit['title']);
                        })
                        ->sortByDesc(function($lit) {
                            $score = 0;
                            if (isset($lit['doi'])) $score += 3;
                            if (isset($lit['year'])) $score += 2;
                            if (isset($lit['source'])) $score += 1;
                            return $score;
                        })
                        ->first();
                    
                    if ($bestCitation) {
                        $citationTitle = $bestCitation['title'];
                        
                      
                        $citation = Citation::where('title', $citationTitle)->first();
                        
                        if (!$citation) {
                            
                            $citation = Citation::create([
                                'title' => $citationTitle,
                                'authors' => $bestCitation['authors'] ?? $bestCitation['citationAuthors'] ?? 'GBIF',
                                'year' => $bestCitation['year'] ?? date('Y'),
                                'source' => $bestCitation['source'] ?? 'GBIF Species API',
                                'doi' => $bestCitation['doi'] ?? null,
                                'publisher' => $bestCitation['publisher'] ?? null,
                                'isbn' => $bestCitation['isbn'] ?? null,
                            ]);
                        }
                        if (!$citationId) {
                            $autoCitation = Citation::firstOrCreate(
                                ['title' => $species['scientificName']],
                                [
                                    'title' => $species['scientificName'],
                                    'authors' => $detailData['authorship'] ?? 'GBIF Backbone Taxonomy',
                                    'year' => $detailData['publicationYear'] ?? date('Y'),
                                    'source' => 'GBIF Backbone Taxonomy',
                                    'doi' => '10.15468/39hel3', // DOI untuk GBIF Backbone
                                ]
                            );
                            $citationId = $autoCitation->id;
                        }
                        
                        $citationId = $citation->id;
                    }
                }
            
            // 5. Ambil nama lokal Indonesia/Inggris
            $indonesianName = collect($vernacularNames)->firstWhere('language', 'id');
            $englishName = collect($vernacularNames)->firstWhere('language', 'en');
            $commonName = $indonesianName['vernacularName'] ?? $englishName['vernacularName'] ?? null;
            
            // 6. Ambil deskripsi terbaik
            $description = null;
            if (!empty($descriptions)) {
                $bestDescription = collect($descriptions)->firstWhere('language', 'en');
                $description = $bestDescription['description'] ?? $descriptions[0]['description'] ?? null;
                
                // Truncate jika terlalu panjang
                if ($description && strlen($description) > 500) {
                    $description = substr($description, 0, 500) . '...';
                }
            }
            
            // 7. Ambil habitat dari distribution
            $habitat = null;
            if (!empty($distributions)) {
                $locations = collect($distributions)->pluck('locality')->filter()->unique()->take(3);
                $habitat = $locations->implode(', ');
            }
            
            // 8. Ambil gambar pertama (jika ada)
            $imageUrl = null;
            if (!empty($media)) {
                $image = collect($media)->firstWhere('type', 'StillImage');
                $imageUrl = $image['identifier'] ?? null;
            }
            
            return [
                'success' => true,
                'data' => [
                    'accepted_name' => $species['scientificName'],
                    'common_name' => $commonName,
                    'genus_id' => $genus->id,
                    'citation_id' => $citationId,
                    'description' => $description,
                    'habitat' => $habitat,
                    'image_url' => $imageUrl,
                    'gbif_key' => $speciesKey,
                    'rank' => $species['rank'] ?? 'SPECIES',
                    'taxonomic_status' => $species['taxonomicStatus'] ?? 'ACCEPTED',
                    'vernacular_names' => $vernacularNames,
                    'distributions' => $distributions,
                    'media' => $media,
                ]
            ];
            
        } catch (\Exception $e) {
            return ['success' => false, 'message' => 'Error: ' . $e->getMessage()];
        }
    }

    // Ambil deskripsi Bahasa Indonesia dari Wikipedia
// Ambil deskripsi Bahasa Indonesia dari Wikipedia (FIXED)
public function fetchWikipediaData($query)
{
    try {
        $client = Http::withHeaders([
            'User-Agent' => 'BiodiversitasIndonesia/1.0 (Academic Project; contact: info@biodiversitas.id)',
            'Accept' => 'application/json',
        ])->timeout(15);

        // 1. Cari judul artikel
        $search = $client->get('https://id.wikipedia.org/w/api.php', [
            'action' => 'query',
            'list' => 'search',
            'srsearch' => $query,
            'format' => 'json',
            'srlimit' => 1,
        ]);

        $title = $search->json()['query']['search'][0]['title'] ?? null;
        if (!$title) {
          
            return null;
        }

        // 2. Ambil ringkasan artikel
        $summary = $client->get(
            'https://id.wikipedia.org/api/rest_v1/page/summary/' . str_replace(' ', '_', $title)

        );

        if ($summary->successful()) {
            $data = $summary->json();
            return [
                'description' => $data['extract'] ?? null,
                'image' => $data['thumbnail']['source'] ?? null,
            ];
        }
    } catch (\Exception $e) {
        \Log::error('Wikipedia fetch error: ' . $e->getMessage());
    }
    return null;
}

// Ambil foto dari Wikimedia Commons (FIXED)
public function fetchCommonsImages($query, $limit = 3)
{
    try {
        $response = Http::withHeaders([
            'User-Agent' => 'BiodiversitasIndonesia/1.0 (Academic Project; contact: info@biodiversitas.id)',
        ])->timeout(15)->get('https://commons.wikimedia.org/w/api.php', [
            'action' => 'query',
            'format' => 'json',
            'generator' => 'search',
            'gsrsearch' => $query,
            'gsrnamespace' => 6,
            'gsrlimit' => $limit,
            'prop' => 'imageinfo',
            'iiprop' => 'url',
            'iiurlwidth' => 1200,
        ]);

        $pages = $response->json()['query']['pages'] ?? [];
        $images = [];
        foreach ($pages as $page) {
            $url = $page['imageinfo'][0]['thumburl'] ?? $page['imageinfo'][0]['url'] ?? null;
            if ($url) $images[] = $url;
        }
        return $images;
    } catch (\Exception $e) {
        \Log::error('Commons fetch error: ' . $e->getMessage());
        return [];
    }
}
}