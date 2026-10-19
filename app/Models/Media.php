<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Media extends Model {
    protected $fillable = ['species_id', 'image_url', 'caption', 'life_stage', 'is_self_photographed'];
    public function species(): BelongsTo { return $this->belongsTo(Species::class); }
}