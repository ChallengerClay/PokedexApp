// Create axios instance
import axios from 'axios';

export const pokeApi = axios.create({
  // this could be held on a const file or env variable
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
