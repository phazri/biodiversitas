<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Species;

class ContributionController extends Controller
{
    public function store(Request $request, Species $species)
    {
        $data = $request->validate([
            'type' => ['required', 'in:description,citation'],
            'content' => ['nullable', 'string', 'required_if:type,description'],
            'citation_title' => ['nullable', 'string', 'max:255', 'required_if:type,citation'],
            'citation_authors' => ['nullable', 'string', 'max:255'],
            'citation_year' => ['nullable', 'string', 'max:10'],
            'citation_source' => ['nullable', 'string', 'max:255'],
            'citation_doi' => ['nullable', 'string', 'max:255'],
        ]);

        $species->contributions()->create([
            ...$data,
            'user_id' => $request->user()->id,
            'status' => 'pending', 
        ]);

        return back();
    }
}