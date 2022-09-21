import React from 'react'
import { useLocation } from "react-router-dom";


export const PokemonInfo = () => {
    const location = useLocation();
  return (
    <div>
        <p>PokemonInfo</p> 
        <pre>
            {JSON.stringify(location.state.pokeInfo)}
        </pre>
    </div>
  )
}
export default PokemonInfo