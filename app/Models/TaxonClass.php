<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TaxonClass extends Model {
    protected $table = 'classes';
    protected $fillable = ['phylum_id', 'name', 'description'];
    public function phylum(): BelongsTo { return $this->belongsTo(Phylum::class, 'phylum_id'); }
    public function orders(): HasMany { return $this->hasMany(TaxonOrder::class, 'class_id'); }
}