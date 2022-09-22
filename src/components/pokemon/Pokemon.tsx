import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { getPokemonDetails } from '../../helpers/getPokemon';
import { IPokemon, IPokemonDetails } from '../../types/pokemon/interfaces';

type PokemonProps = { 
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: PokemonProps) => {
  const { name } = pokemon;
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonDetails>();
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  // TODO: refact
  // if (name == 'nidoran-m') {
  //   name = 'Nidoran♂';
  // } else if (name == 'nidoran-f') {
  //   name = 'Nidoran♀';
  // }
  const HandleClick = () => {
    navigate(`/pokemon/${name}`, { state: { pokeInfo: pokemonInfo } });
  };

  useEffect(() => {
    const handlePokemon = async () => {
      const pokemon = await getPokemonDetails(name);
      setPokemonInfo(pokemon);
      setImage(pokemon.sprites?.other?.['official-artwork'].front_default);
    };
    handlePokemon();
  }, []);

  return (
    // TODO(nit): move css file into folder
    <div className="card">
      <img className="pokeImg" src={image} />
      <div className="textName">
        <a onClick={HandleClick}>
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </a>
      </div>
    </div>
  );
};

export default Pokemon;
