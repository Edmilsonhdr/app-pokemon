<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPokemonIdToPokemonTable extends Migration
{
    public function up()
    {
        // Adiciona uma coluna 'pokemon_id' à tabela 'pokemon'
        Schema::table('pokemon', function (Blueprint $table) {
            $table->unsignedBigInteger('pokemon_id')->nullable();
        });
    }

    public function down()
    {
        // Remove a coluna 'pokemon_id' da tabela 'pokemon'
        Schema::table('pokemon', function (Blueprint $table) {
            $table->dropColumn('pokemon_id');
        });
    }
}
