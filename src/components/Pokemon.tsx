import { useState, useEffect } from 'react'
import React from 'react'
import {getPokemon} from '../helpers/getPokemon'

export const Pokemon = ({pokemon}:any) => {
    const {name, url} = pokemon
    const [pokemonInfo, setPokemon] = useState([])
    const [image, setImage] = useState('')
    //console.log(url)
    useEffect(() =>{
        getPokemon(url,setPokemon)
    },[]);

    useEffect(() =>{
       if(pokemonInfo) {
        let imagen = pokemonInfo['sprites']['other']['dream_world']['front_default']
        setImage(imagen)
       }

    },[pokemonInfo]);
  return (
    <>
    <img src={image}/>
    <div>{name}</div>
    </>
    
  )
}

export default Pokemon
