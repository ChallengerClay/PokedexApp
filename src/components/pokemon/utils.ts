import { IPokemonName } from "../../types/pokemon/interfaces"

export const formatName = (name: string) => {
    const POKEMON_NAMES:IPokemonName = {
        'nidoran-m': name.substring(0, name.indexOf('-')) + '♂',
        'nidoran-f': name.substring(0, name.indexOf('-')) + '♀',
    }
    const POKEMON_DEFAULT_NAME:string = name

    return POKEMON_NAMES[name] || POKEMON_DEFAULT_NAME
}