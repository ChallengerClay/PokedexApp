import { useState, useEffect } from 'react'
import React from 'react'
import {getPokemon} from '../helpers/getPokemon'

export const Pokemon = ({pokemon}:any) => {
    const {name, url} = pokemon
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [image, setImage] = useState('')
    
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
    <img src={image}/>
    <div className="textName"><p>{name}</p></div>
    </div>
    </>
    
  )
}

export default Pokemon
