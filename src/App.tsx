import { useState, useEffect } from 'react'
import {getPokemon} from './helpers/getPokemon'
import './App.css'
import './assets/css/output.scss'
import Button from '@mui/material/Button';
import Pokemon from './components/Pokemon';


function App() {
  //const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([])

  //const fetch = await getApi(url)
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
  useEffect(
    () =>{
    getPokemon(url,setPokemonList)
  },
  [])
  return (
    <> 
    <h1 className="test">Pokedex</h1>
      <div className="screen">
        <div className="pokemonList">
        {
          pokemonList.map(pokes =>{
            return(
              <Pokemon key={pokes.name} pokemon={pokes}/>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default App
