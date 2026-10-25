<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('contributions', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        $table->foreignId('species_id')->constrained()->cascadeOnDelete();
        $table->string('type');              // 'description' | 'citation'
        $table->text('content')->nullable(); // isi deskripsi
        $table->string('citation_title')->nullable();
        $table->string('citation_authors')->nullable();
        $table->string('citation_year')->nullable();
        $table->string('citation_source')->nullable();
        $table->string('citation_doi')->nullable();
        $table->string('status')->default('pending'); // pending | approved | rejected
        $table->text('review_note')->nullable();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contributions');
    }
};
