<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatsTable extends Migration
{
    public function up()
    {
        // Criação da tabela atributo
        Schema::create('atributo', function (Blueprint $table) {
            $table->id(); // id atributo
            $table->unsignedBigInteger('pokemon_id'); // Chave estrangeira para associar com um Pokémon
            $table->string('atributo_nome'); // Nome do atributo
            $table->integer('atributo_numero'); // Valor numérico do atributo
            $table->timestamps(); // Colunas de data e hora de criação/atualização

            // Chave estrangeira para vincular com a tabela 'pokemon'
            $table->foreign('pokemon_id')->references('id')->on('pokemon')->onDelete('cascade');
        });
    }


    public function down()
    {
        // Excluir tabela 'atributo' se a migração for revertida
        Schema::dropIfExists('atributo');
    }
}
