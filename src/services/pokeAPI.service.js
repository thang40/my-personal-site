import axios from "axios";
import { axiosErrorHandler } from "../utils/errorHandler.utils";

const hashnodeAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getAllPokemonName = async () => {
  const query = "pokemon?limit=1000";
  try {
    const res = await hashnodeAxios.get(query);
    return res.data.results;
  } catch (error) {
    axiosErrorHandler(error);
  }
};

export const getPokemonDetail = async name => {
  const query = `pokemon/${name}`;
  try {
    const res = await hashnodeAxios.get(query);
    return res.data;
  } catch (error) {
    axiosErrorHandler(error);
  }
};
