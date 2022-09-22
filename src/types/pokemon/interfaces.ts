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

export interface IPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    // TODO: improve type!
    other: any;
  };
}
