<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Genus extends Model {
    protected $table = 'genera';
    protected $fillable = ['family_id', 'name', 'description'];
    public function family(): BelongsTo { return $this->belongsTo(Family::class, 'family_id'); }
    public function species(): HasMany { return $this->hasMany(Species::class, 'genus_id'); }
}