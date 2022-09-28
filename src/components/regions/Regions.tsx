import {useEffect, useState} from 'react';
import {IRegionsList} from '../../types/pokemon/interfaces';
import { getRegions } from '../../helpers/getPokemon';


function Regions() {

    const [regionList, setRegions] = useState<IRegionsList>();

    useEffect(() => {
        const handleRegions = async () => {
          const regions = await getRegions();
          setRegions(regions);
        };
        handleRegions();
      }, []);
  return (
    <>
      <h1 className="test">Regions</h1>
      <div className="screen">
        <div className="pokemonList">
           {regionList?.results.map(region =>{
            return(
                <div>{region.name}</div>
            )
           })}
        </div>
      </div>
    </>
  )
}

export default Regions
