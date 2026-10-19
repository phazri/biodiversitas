<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TaxonOrder extends Model {
    protected $table = 'orders';
    protected $fillable = ['class_id', 'name', 'description'];
    public function taxonClass(): BelongsTo { return $this->belongsTo(TaxonClass::class, 'class_id'); }
    public function families(): HasMany { return $this->hasMany(Family::class, 'order_id'); }
}