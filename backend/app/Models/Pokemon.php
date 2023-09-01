<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'pokemon_id'
    ];

    public function atributo()
    {
        return $this->hasMany(Stat::class);
    }
}
