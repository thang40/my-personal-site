import { initPokemonName } from "../services/pokeAPI.service";
import { put, takeLatest, select } from "redux-saga/effects";
import Fuse from "fuse.js";

const INIT_POKEMON_NAME_REQUEST = "@@FUN_POKEDEX/INIT_POKEMON_NAME_REQUEST";
const INIT_POKEMON_NAME_SUCCESS = "@@FUN_POKEDEX/INIT_POKEMON_NAME_SUCCESS";
const SEARCH_POKEMON_REQUEST = "@@FUN_POKEDEX/SEARCH_POKEMON_REQUEST";
const SEARCH_POKEMON_SUCCESS = "@@FUN_POKEDEX/SEARCH_POKEMON_SUCCESS";

// action creator
export const initPokemonNameAction = () => {
  return { type: INIT_POKEMON_NAME_REQUEST };
};

export const searchPokemonAction = searchStr => {
  console.log("aa");
  return { type: SEARCH_POKEMON_REQUEST, payload: searchStr };
};
// reducer
const initialState = {
  pokemonNames: []
};

export const FunPokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POKEMON_NAME_SUCCESS: {
      return {
        ...state,
        pokemonNames: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

//selector
const selectPokemonNames = state => state.FunPokedexReducer.pokemonNames;

function* watchInitPokemonName(action) {
  try {
    const pokemonNames = yield initPokemonName();
    yield put({
      type: INIT_POKEMON_NAME_SUCCESS,
      payload: pokemonNames
    });
  } catch (error) {
    console.log(error);
  }
}

function* watchSearchPokemon(action) {
  try {
    const searchStr = action.payload;
    const pokemonNames = yield select(selectPokemonNames);
    const fuseOption = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name"]
    };
    const fuse = new Fuse(pokemonNames, fuseOption);
    const result = yield fuse.search(searchStr);
    console.log(result);
    // yield put({
    //   type: SEARCH_POKEMON_SUCCESS,
    //   payload: pokemonNames
    // });
  } catch (error) {
    console.log(error);
  }
}

export const FunPokedexSaga = [
  takeLatest(INIT_POKEMON_NAME_REQUEST, watchInitPokemonName),
  takeLatest(SEARCH_POKEMON_REQUEST, watchSearchPokemon)
];
