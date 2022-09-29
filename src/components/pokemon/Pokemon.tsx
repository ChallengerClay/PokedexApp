import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { getPokemonDetails } from '../../helpers/getPokemon';
import { IPokemon, IPokemonDetails } from '../../types/pokemon/interfaces';
import {formatName} from './utils';
import {useQuery} from 'react-query';

type PokemonProps = { 
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: PokemonProps) => {
  const { name } = pokemon;
  const {data:pokemonInfo, status} = useQuery(['pokemonList', name], () =>getPokemonDetails(name))
  const navigate = useNavigate();
  
  const HandleClick = () => {
    navigate(`/pokemon/${name}`, { state: { pokeInfo: pokemonInfo } });
  };


  if (status ==='loading'){
    return (
      <div className="o-pokeball c-loader u-swing"></div>
    )
  }

  if (status ==='error'){
    return (
      <div>
        <p>An error has ocurred</p>
      </div>
    )
  }

  return (
    // TODO(nit): move css file into folder
    <div className="card">
      <a onClick={HandleClick}>
      <img className="pokeImg" src={pokemonInfo.sprites?.other?.['official-artwork'].front_default} />
      <div className="textName">
          <h2>{formatName(name)}</h2>
      </div>
      </a>
    </div>
  );
};

export default Pokemon;
