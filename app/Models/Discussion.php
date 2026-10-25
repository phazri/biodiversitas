<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Discussion extends Model
{
    protected $fillable = ['user_id', 'species_id', 'body'];

    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function species(): BelongsTo { return $this->belongsTo(Species::class); }
}