<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pokemon;

class PokemonController extends Controller
{
    // Método para salvar um Pokémon
    public function salvar(Request $request)
    {
        // Validação dos dados
        $data = $request->validate([
            'pokemon_id' => 'required|integer',
            'name' => 'required|string|max:255',
            'stats' => 'required|array',
        ]);

        $pokemon = Pokemon::create([
            'nome' => $data['name'],
            'pokemon_id' => $data['pokemon_id'],
        ]);

        foreach ($data['stats'] as $stat) {
            $pokemon->atributo()->create([
                'atributo_nome' => $stat['stat_name'],
                'atributo_numero' => $stat['base_stat'],
            ]);
        }

        return response()->json(['mensagem' => 'Pokémon e estatísticas salvos com sucesso']);
    }

    // Método para buscar todos os Pokémons salvos
    public function buscarSalvos()
    {
        $pokemonsSalvos = Pokemon::with('atributo')->get();
        return response()->json($pokemonsSalvos);
    }
}
