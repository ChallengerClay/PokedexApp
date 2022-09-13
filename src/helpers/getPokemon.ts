
import axios from 'axios'
export const getPokemon = async (url:string, state:any) =>{
   await axios.get(url)
   .then(function (result) {
    return state(result.data.results? result.data.results : result.data)
   })
   .catch(error => console.error(error))
}