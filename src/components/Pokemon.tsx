import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import React from 'react'
import {getPokemon} from '../helpers/getPokemon'

export const Pokemon = ({pokemon}:any) => {
    let {name, url} = pokemon
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    if(name == 'nidoran-m'){
      name = 'Nidoran♂'
    }else if(name == 'nidoran-f'){
      name = 'Nidoran♀'
    }
    const HandleClick = (e:any) => {
      e.preventDefault();
      navigate(`/pokemon/${name}`, {state:{pokeInfo:pokemonInfo}});
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
      <img className="pokeImg" src={image}/>
      <div className="textName">
        <a onClick={(event) => HandleClick(event)}>
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </a>
      </div>
    </div>
    </>
    
  )
}

export default Pokemon
