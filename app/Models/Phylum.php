<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Phylum extends Model {
    protected $table = 'phyla';
    protected $fillable = ['kingdom_id', 'name', 'description'];
    public function kingdom(): BelongsTo { return $this->belongsTo(Kingdom::class); }
    public function classes(): HasMany { return $this->hasMany(TaxonClass::class, 'phylum_id'); }
}