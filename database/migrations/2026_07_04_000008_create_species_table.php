<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('species', function (Blueprint $table) {
            $table->id();
            $table->foreignId('genus_id')->constrained('genera')->cascadeOnDelete(); // PENTING
            $table->foreignId('citation_id')->nullable()->constrained('citations')->nullOnDelete(); // PENTING
            $table->string('accepted_name');
            $table->string('common_name')->nullable();
            $table->text('description_simple')->nullable();
            $table->string('habitat')->nullable();
            $table->enum('conservation_status', ['LC', 'NT', 'VU', 'EN', 'CR', 'EX'])->default('LC');
            $table->boolean('is_endemic')->default(false);
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('species'); }
};