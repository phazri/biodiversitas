<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kingdom extends Model {
    protected $fillable = ['name', 'description'];
    public function phyla(): HasMany { return $this->hasMany(Phylum::class); }
}