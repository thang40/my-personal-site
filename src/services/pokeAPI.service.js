import axios from "axios";
import { commonErrorParser } from "../utils/error-handler.util";

const hashnodeAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const initPokemonName = async () => {
  const query = "pokemon?limit=1000";
  try {
    const res = await hashnodeAxios.get(query);
    return res.data.results;
  } catch (error) {
    throw new Error(commonErrorParser(error));
  }
};
