<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use App\Models\Species;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiscussionController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Discussion/Index', [
            'messages' => Discussion::with(['user', 'species'])
                ->latest()
                ->limit(100)
                ->get(),
            'speciesOptions' => Species::orderBy('common_name')->get(['id', 'common_name', 'accepted_name']),
            'prefillSpecies' => $request->integer('species') ?: null,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'body' => ['required', 'string', 'max:500'],
            'species_id' => ['nullable', 'integer', 'exists:species,id'],
        ]);

        Discussion::create([
            'user_id' => $request->user()->id,
            'body' => $data['body'],
            'species_id' => $data['species_id'] ?? null,
        ]);

        return back();
    }
}