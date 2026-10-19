<?php

use App\Http\Controllers\SpeciesController;
use Illuminate\Support\Facades\Route;

// Halaman Utama: Daftar Spesies
Route::get('/', [SpeciesController::class, 'index'])->name('home');

Route::get('/search', [SpeciesController::class, 'search'])->name('search');

// Halaman Detail Spesies
Route::get('/species/{species}', [SpeciesController::class, 'show'])->name('species.show');


// Halaman Tentang
Route::get('/tentang', function () {
    return Inertia\Inertia::render('About');
})->name('about');

Route::get('/program', function () {
    return Inertia\Inertia::render('Program');
})->name('program');

Route::get('/knowledge-hub', function () {
    return Inertia\Inertia::render('KnowledgeHub');
})->name('knowledge-hub');

// Halaman Berita & Artikel
Route::get('/berita', function () {
    return Inertia\Inertia::render('News');
})->name('news');
// Route bawaan Breeze untuk login/register
require __DIR__.'/auth.php';

Route::get('/knowledge-hub/{category}', function ($category) {
    return Inertia\Inertia::render('KnowledgeHub/Category', [
        'category' => $category
    ]);
})->name('knowledge-hub.category');