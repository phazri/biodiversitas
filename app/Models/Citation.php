<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Citation extends Model {
    protected $fillable = ['title', 'authors', 'year', 'source_type', 'apa_formatted_text'];
    public function species(): HasMany { return $this->hasMany(Species::class); }
}