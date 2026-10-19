<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Family extends Model {
    protected $fillable = ['order_id', 'name', 'description'];
    public function taxonOrder(): BelongsTo { return $this->belongsTo(TaxonOrder::class, 'order_id'); }
    public function genera(): HasMany { return $this->hasMany(Genus::class, 'family_id'); }
}