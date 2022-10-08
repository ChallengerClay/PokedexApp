import React from 'react'
import{IBerry} from '../../types/pokemon/interfaces'

interface IBerryProp{
    berry:IBerry
}

export const Berry = ({berry}:IBerryProp) => {
    
  return (
    <>
    <div className="berryCard">
        <div className="berryImg">
            <img src={`./img/berries/${berry.name}.png`} alt={berry.name} />
        </div>
        <div className="berryName">
            <p>{berry.name} Berry</p>
        </div>
    </div>
    </>
  )
}

export default Berry
