<?php

use App\Http\Controllers\SpeciesController;
use App\Http\Controllers\ContributionController; // ✅ TAMBAHKAN INI
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// 1. Halaman Utama & Pencarian
Route::get('/', [SpeciesController::class, 'index'])->name('home');
Route::get('/search', [SpeciesController::class, 'search'])->name('search');

// 2. Target redirect bawaan Breeze setelah login/register
Route::get('/dashboard', function () {
    return redirect('/');
})->middleware('auth')->name('dashboard');

// 3. Halaman Detail Spesies & Kontribusi User
Route::get('/species/{species}', [SpeciesController::class, 'show'])->name('species.show');
Route::middleware('auth')->post('/species/{species}/contribute', [ContributionController::class, 'store'])->name('species.contribute');

// 4. Halaman Statis (Tentang, Program, Berita)
Route::get('/tentang', fn () => Inertia::render('Static/Tentang'))->name('tentang');
Route::get('/program', fn () => Inertia::render('Static/Program'))->name('program');
Route::get('/berita', fn () => Inertia::render('Static/Berita'))->name('berita');

// 5. Knowledge Hub
Route::get('/knowledge-hub', fn () => Inertia::render('KnowledgeHub'))->name('knowledge-hub');
Route::get('/knowledge-hub/{category}', fn ($category) => Inertia::render('KnowledgeHub/Category', [
    'category' => $category
]))->name('knowledge-hub.category');
Route::get('/diskusi', [\App\Http\Controllers\DiscussionController::class, 'index'])->name('discussion');
Route::middleware('auth')->post('/diskusi', [\App\Http\Controllers\DiscussionController::class, 'store'])->name('discussion.store');

// 6. Route bawaan Breeze untuk login/register/logout
require __DIR__.'/auth.php';