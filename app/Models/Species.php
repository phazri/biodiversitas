<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Species extends Model {
    protected $fillable = ['genus_id', 'citation_id', 'accepted_name', 'common_name', 'description_simple', 'habitat', 'conservation_status', 'is_endemic'];
    
    public function genus(): BelongsTo { return $this->belongsTo(Genus::class, 'genus_id'); }
    public function citation(): BelongsTo { return $this->belongsTo(Citation::class); }
    public function media(): HasMany { return $this->hasMany(Media::class); }
    public function contributions(): HasMany { return $this->hasMany(Contribution::class); }
}