import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import React from 'react'
import {getPokemon} from '../helpers/getPokemon'

export const Pokemon = ({pokemon}:any) => {
    let {name, url} = pokemon
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [image, setImage] = useState('')
    if(name == 'nidoran-m'){
      name = 'Nidoran♂'
    }else if(name == 'nidoran-f'){
      name = 'Nidoran♀'
    }
    
    useEffect(() =>{
        getPokemon(url,setPokemonInfo)
    },[]);

    useEffect(() =>{
       if(pokemonInfo) {
        let imagen = pokemonInfo.sprites?.other?.['official-artwork'].front_default
        setImage(imagen)
       }

    },[pokemonInfo]);
  return (
    <>
    <div className="card">
    <Link to={`/Pokemon/${name}`}>
    <img className="pokeImg" src={image}/>
    <div className="textName"><h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2></div>
    </Link>
    </div>
    </>
    
  )
}

export default Pokemon
