<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->foreignId('species_id')->constrained('species')->cascadeOnDelete();
            
            $table->string('image_url'); // Path atau URL gambar
            $table->string('caption')->nullable();
            $table->enum('life_stage', ['adult', 'juvenile', 'egg', 'habitat', 'other'])->default('adult');
            $table->boolean('is_self_photographed')->default(false); // True jika Anda yang memotret
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};