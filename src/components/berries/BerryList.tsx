import { IBerriesList , IBerry} from "../../types/pokemon/interfaces"
import {getBerries} from '../../helpers/getPokemon'
import {useQuery} from 'react-query'
import Berry from './Berry'
import './output.scss'

export const BerryList = () => {
    const {data: berryList, status, isFetching}= useQuery(['berryList'], getBerries)
  return (
    <>
    <div>BerryList</div>
    <div className="screen">
      <div className="berryList">
      {berryList?.results.map((berry:IBerry) => {
          return(
              <Berry key={berry.name} berry={berry}/>
          )
      })}
      </div>
    </div>
    </>
  )
}
export default BerryList