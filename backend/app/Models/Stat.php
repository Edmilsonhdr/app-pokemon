<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    use HasFactory;
    protected $table = 'atributo';

    protected $fillable = [
        'pokemon_id',
        'atributo_nome',
        'atributo_numero',
    ];

    public function pokemon()
    {
        return $this->belongsTo(Pokemon::class);
    }
}
