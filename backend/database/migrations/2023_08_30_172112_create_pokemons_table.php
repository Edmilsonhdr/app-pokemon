<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonsTable extends Migration
{
    public function up()
    {
        // Criação da tabela 'pokemon'
        Schema::create('pokemon', function (Blueprint $table) {
            $table->id(); //id pokemon
            $table->string('nome'); // Nome do Pokémon
            $table->timestamps(); // Colunas de data e hora de criação/atualização
        });
    }

    public function down()
    {
        // Excluir tabela 'pokemon' se a migração for revertida
        Schema::dropIfExists('pokemon');
    }
}
