<?php

namespace App\Http\Controllers;

use App\Models\Species;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class SpeciesController extends Controller
{
    public function index()
{
    $species = Species::with(['genus', 'media'])
        ->orderBy('common_name')
        ->get();

    $species->each(function ($item) {
        // Ambil gambar PERTAMA jika ada
        if ($item->media->isNotEmpty()) {
            $firstMedia = $item->media->first();
            
            // Cek apakah URL external atau lokal
            if (str_starts_with($firstMedia->image_url, 'http')) {
                $item->image_url = $firstMedia->image_url;
            } else {
                $item->image_url = asset('storage/' . $firstMedia->image_url);
            }
        } else {
            $item->image_url = null;
        }
    });

    return Inertia::render('Species/Index', [
        'species' => $species
    ]);
}

   public function show(Species $species)
{
    $species->load([
        'genus.family.taxonOrder.taxonClass.phylum.kingdom',
        'genus.family.taxonOrder.taxonClass.phylum',
        'genus.family.taxonOrder.taxonClass',
        'genus.family.taxonOrder',
        'genus.family',
        'genus',
        'citation',
        'media'
    ]);

    if ($species->media->isNotEmpty()) {
        $species->media->each(function ($media) {
            if (str_starts_with($media->image_url, 'http')) {
                return;
            }
            
            $media->image_url = Storage::disk('local')->url($media->image_url);
        });
    }

    return Inertia::render('Species/Show', [
        'species' => $species
    ]);
}

public function search(Request $request)
{
    $query = $request->input('q', '');

    $species = Species::with(['genus', 'media', 'citation'])
        ->when(!empty($query), function ($q) use ($query) {
            $q->where('accepted_name', 'ILIKE', "%{$query}%")
              ->orWhere('common_name', 'ILIKE', "%{$query}%");
        })
        ->orderBy('common_name')
        ->paginate(10); // ⬅️ Hanya 10 hasil per halaman

    // Proses URL gambar
    $species->getCollection()->transform(function ($item) {
        if ($item->media->isNotEmpty()) {
            $firstMedia = $item->media->first();
            $item->image_url = str_starts_with($firstMedia->image_url, 'http')
                ? $firstMedia->image_url
                : asset('storage/' . $firstMedia->image_url);
        } else {
            $item->image_url = null;
        }
        return $item;
    });

    return Inertia::render('Search/Index', [
        'species' => $species,
        'query' => $query,
    ]);
}
}