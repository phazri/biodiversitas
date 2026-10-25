<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contribution extends Model
{
    protected $fillable = [
        'user_id', 'species_id', 'type', 'content',
        'citation_title', 'citation_authors', 'citation_year',
        'citation_source', 'citation_doi', 'status', 'review_note',
    ];

    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function species(): BelongsTo { return $this->belongsTo(Species::class); }
    public function contributions(): HasMany { return $this->hasMany(Contribution::class); }

  
public function pendingSiblingsCount(): int
{
    return static::where('species_id', $this->species_id)
        ->where('type', 'citation')
        ->where('status', 'pending')
        ->where('id', '!=', $this->id)
        ->count();
}
}