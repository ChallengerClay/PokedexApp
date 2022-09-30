import { pokeApi } from '.';
import { IPokemonDetails, IPokemonsList, IRegionList } from '../types/pokemon/interfaces';

export const getPokemonsList = async (): Promise<IPokemonsList> => {
  const { data } = await pokeApi.get<IPokemonsList>('/pokemon', {
    params: {
      limit: 40,
      offset: 0,
    },
  });
  return data;
};

export const getPokemonDetails = async (name: string): Promise<IPokemonDetails> => {
  const { data } = await pokeApi.get<IPokemonDetails>(`/pokemon/${name}`);
  return data;
};

export const getRegions = async (): Promise<IRegionList> => {
  const { data } = await pokeApi.get<IRegionList>('/region');
  return data
}
