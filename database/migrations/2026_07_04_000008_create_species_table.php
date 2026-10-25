<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('species', function (Blueprint $table) {
            // Identitas
            $table->string('authority')->nullable()->after('accepted_name');      // mis. "Desmarest, 1822"
            $table->string('english_name')->nullable()->after('common_name');

            // Ciri & ekologi
            $table->text('physical_description')->nullable()->after('description_simple');
            $table->string('diet')->nullable()->after('habitat');
            $table->string('distribution')->nullable()->after('diet');            // mis. "Ujung Kulon, Banten"

            // Populasi & konservasi
            $table->string('population_estimate')->nullable()->after('conservation_status');
            $table->enum('population_trend', ['decreasing', 'stable', 'increasing', 'unknown'])
                  ->nullable()->after('population_estimate');
            $table->text('threats')->nullable()->after('population_trend');
            $table->text('conservation_actions')->nullable()->after('threats');
            $table->string('protection_status')->nullable()->after('conservation_actions');
            $table->enum('cites_appendix', ['I', 'II', 'III'])->nullable()->after('protection_status');

            // Verifikasi eksternal
            $table->string('iucn_url')->nullable();
            $table->string('gbif_url')->nullable();
        });

        // Kredit & lisensi foto: sesuaikan nama tabel media kamu.
        // Schema::table('species_media', function (Blueprint $table) {
        //     $table->string('credit')->nullable();
        //     $table->string('license')->nullable();
        // });
    }

    public function down(): void
    {
        Schema::table('species', function (Blueprint $table) {
            $table->dropColumn([
                'authority', 'english_name', 'physical_description', 'diet', 'distribution',
                'population_estimate', 'population_trend', 'threats', 'conservation_actions',
                'protection_status', 'cites_appendix', 'iucn_url', 'gbif_url',
            ]);
        });
    }
};