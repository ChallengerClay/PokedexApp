import React from 'react'
import { useLocation } from "react-router-dom";


export const PokemonInfo = () => {
    const location = useLocation()
    const {name, abilities, sprites, types} = location.state.pokeInfo
  return (
    <div>
        <div className="screen">
          <div>
            <div className="nameBox">
              <h1 className="pkmnName">{name.toUpperCase()}</h1>
              </div>
                <img src={sprites?.other?.['official-artwork'].front_default} alt={name} width="20%"/>
                <div className="typeList">
                  <p>Types:</p>
                  {types.map(type => {
                    return (
                      <div key={type.slot} className={`types type${type.type.name}`} >
                      <p>
                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                      </p>
                      </div>
                    )
                  })}


              </div>
            </div>
            <pre>
                {JSON.stringify(location.state.pokeInfo)}
            </pre>
        </div>
    </div>
  )
}
export default PokemonInfo