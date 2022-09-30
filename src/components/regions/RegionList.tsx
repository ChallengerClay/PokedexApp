import {useEffect, useState} from 'react';
import {IRegion} from '../../types/pokemon/interfaces';
import { getRegions } from '../../helpers/getPokemon';
import { useQuery } from 'react-query';
import  Region  from './Region';

function RegionList() {

      //const [regionList, setRegions] = useState<IRegionsList>();  
      const {data: regionList, status, isFetching}= useQuery(['regionList'], getRegions)
      

    /*useEffect(() => {
        const handleRegions = async () => {
          const regions = await getRegions();
          setRegions(regions);
        };
        handleRegions();
      }, []);*/
  return (
    <>
      <h1 className="test">Regions</h1>
      <div className="screen">
        <div className="pokemonList">
           {regionList?.results.map( (region:IRegion) =>{
            return(
                <Region key={region.name} region={region}/>
            )
           })}
        </div>
      </div>
    </>
  )
}

export default RegionList
