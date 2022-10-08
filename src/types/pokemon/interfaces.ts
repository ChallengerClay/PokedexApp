export interface IPokemonsList {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonName {
  [key:string] : string
}

export interface IPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other:{
      dream_world: {
        front_default: string,
        front_female?: string,
      },
      home: {
        front_default: string,
        front_female?: string,
        front_shiny: string,
        front_shiny_female?: string
      },
      ['official-artwork']: {
        front_default: string
      }
    };
  };
}

export interface IRegionList {
  count: number;
  next: string;
  previous: string;
  results: IRegion[];
}

export interface IRegion {
  name: string;
  url: string;
}

export interface IRegionDetails {
  id:number;
  name:string;
}

export interface IBerriesList{
  count: number;
  next: string;
  previous: string;
  results: IBerry[];
}

export interface IBerry {
  name: string;
  url: string;
}