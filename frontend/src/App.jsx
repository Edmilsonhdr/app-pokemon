import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [pokemonAleatorio, setPokemonAleatorio] = useState(null);
  const [editarNome, setEditarNome] = useState("");
  const [salvarPokemon, setSalvarPokemon] = useState([]);

  // Função gera um número aleatório para buscar um Pokemon
  const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 152);
  };

  // Busca os Pokemons salvos
  useEffect(() => {
    buscarPokemonSalvo();
  }, []);

  const buscarPokemonAleatorio = async () => {
    try {
      const numeroAleatorio = gerarNumeroAleatorio();
      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
      );

      setPokemonAleatorio(resposta.data);
      setEditarNome(resposta.data.name);
    } catch (erro) {
      console.error("Erro ao buscar Pokémon :", erro);
    }
  };

  // Função para trocar o nome do Pokemon editado
  const trocarNome = (e) => {
    setEditarNome(e.target.value);
  };

  // Função para salvar o Pokemon gerado
  const salvarNome = async () => {
    if (pokemonAleatorio) {
      try {
        const dadosStatus = pokemonAleatorio.stats.map((stat) => {
          return {
            stat_name: stat.stat.name,
            base_stat: stat.base_stat,
          };
        });

        // Envia dados para API
        const resposta = await axios.post("http://localhost:8000/api/salvar", {
          pokemon_id: pokemonAleatorio.id,
          name: editarNome,
          stats: dadosStatus,
        });

        if (resposta.data.saved_pokemon == true) {
          setSalvarPokemon([...salvarPokemon, resposta.data.saved_pokemon]);
        }

        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          html: `Pokémon <b>#${pokemonAleatorio.id} ${editarNome}</b> salvo com sucesso.`,
        });

        // Atualizar a lista de Pokemons salvos
        buscarPokemonSalvo();
      } catch (erro) {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Erro ao salvar o Pokémon.",
        });
      }
    }
  };

  // Função para buscar os Pokemons salvos
  const buscarPokemonSalvo = async () => {
    try {
      const resposta = await axios.get("http://localhost:8000/api/pokemons");
      setSalvarPokemon(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar Pokémons salvos:", erro);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Pokemon App</h1>
              <button
                className="btn btn-primary mb-3"
                onClick={buscarPokemonAleatorio}
              >
                Gerar Pokemon
              </button>
              {pokemonAleatorio && (
                <div>
                  <h2>{pokemonAleatorio.name}</h2>
                  <p>Editar nome do pokemon:</p>
                  <input
                    className="form-control mb-2"
                    type="text"
                    value={editarNome}
                    onChange={trocarNome}
                  />
                  <button className="btn btn-success" onClick={salvarNome}>
                    Salvar Pokemon Gerado
                  </button>
                  <p>ID: {pokemonAleatorio.id}</p>
                  <div className="dados_gerados">
                    <img
                      src={pokemonAleatorio.sprites.front_default}
                      alt={pokemonAleatorio.name}
                      className="tamanho-img"
                    />
                    <h3>Atributos:</h3>
                    <ul>
                      {pokemonAleatorio.stats.map((atributo) => (
                        <li key={atributo.stat.name}>
                          {atributo.stat.name}: {atributo.base_stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Pokémons salvos:</h3>
          <div className="row">
            {salvarPokemon.map((pokemonSalvo) => (
              <div key={pokemonSalvo.id} className="col-md-4 mb-3">
                <div className="card ">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonSalvo.pokemon_id}.png`}
                    alt={pokemonSalvo.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pokemonSalvo.nome}</h5>
                    <ul>
                      {pokemonSalvo.atributo.map((atributos, index) => (
                        <li key={index}>
                          {atributos.atributo_nome}: {atributos.atributo_numero}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
