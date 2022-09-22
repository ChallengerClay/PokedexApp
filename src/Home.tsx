import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './components/pokemon/Pokemon';
import { getPokemonsList } from './helpers/getPokemon';
import { IPokemonsList } from './types/pokemon/interfaces';

function Home() {
  const [pokemonList, setPokemonList] = useState<IPokemonsList>();

  useEffect(() => {
    const handlePokemons = async () => {
      const pokemons = await getPokemonsList();
      setPokemonList(pokemons);
    };
    handlePokemons();
  }, []);

  return (
    <>
      <h1 className="test">Pokedex</h1>
      <div className="screen">
        <div className="pokemonList">
          {pokemonList?.results.map((pokes) => {
            return <Pokemon key={pokes.name} pokemon={pokes} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
