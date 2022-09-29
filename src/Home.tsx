import React, { useState, useEffect } from 'react';
import './App.css';
import { getPokemonsList } from './helpers/getPokemon';
import { IPokemonsList } from './types/pokemon/interfaces';
import {useQuery} from 'react-query';
const  LazyPokemon = React.lazy(() => import('./components/pokemon/Pokemon'));

function Home() {
  const {data: pokemonList, status, isFetching}= useQuery(['pokemonList'], getPokemonsList,
  {
    refetchOnWindowFocus: false,
    refetchInterval:2000
  })
  
  if (status ==='loading'){
    return (
      <div>
        <p>Loading List.....</p>
      </div>
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
    <>
      <h1 className="test">Pokedex {isFetching && <p>Loading List.....</p>}</h1>
      <div className="screen">
        <div className="pokemonList">
          {pokemonList?.results.map((pokes) => {
            return <React.Suspense fallback="loading...." key={pokes.name}>
            <LazyPokemon key={pokes.name} pokemon={pokes} />
            </React.Suspense>;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
