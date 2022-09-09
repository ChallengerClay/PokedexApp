import { useState } from 'react'
import {getApi} from './helpers/getApi'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState([])

  //const fetch = await getApi(url)
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20";
    setPokemon(getApi(url))
  return (
    <> 
    <h1 className="test">Pokedex</h1>
    {pokemon.map((key)=>{
      return(
        <p key={key.name}>{key.name}</p>
      )
    })}
    </>
  )
}

export default App
