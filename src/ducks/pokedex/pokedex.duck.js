import {
  getAllPokemonName,
  getPokemonDetail
} from "../../services/pokeAPI.service";
import { put, takeLatest, select, all, delay, fork } from "redux-saga/effects";
import Fuse from "fuse.js";

const INIT_POKEMON_NAME_SUCCESS = "@@FUN_POKEDEX/INIT_POKEMON_NAME_SUCCESS";
const SEARCH_POKEMON_REQUEST = "@@FUN_POKEDEX/SEARCH_POKEMON_REQUEST";
const SEARCH_POKEMON_SUCCESS = "@@FUN_POKEDEX/SEARCH_POKEMON_SUCCESS";
const RESET_LISTVIEW = "@@FUN_POKEDEX/RESET_LIST_VIEW";

// action creator
export const searchPokemonAction = searchStr => {
  return { type: SEARCH_POKEMON_REQUEST, payload: searchStr };
};

// reducer
const initialState = {
  count: undefined,
  pokemonNames: [], //preload pokemon name list
  page: 1,
  pkmPerPage: 20,
  detailList: [], //preload pokemon details to get image
  detailView: undefined, //current detail view
  listView: [], // paginated list
  loading: true
};

export const FunPokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POKEMON_NAME_SUCCESS: {
      const { details, pokemonNames } = action.payload;
      return {
        ...state,
        pokemonNames: pokemonNames,
        loading: false,
        detailList: details,
        listView: details
      };
    }
    case SEARCH_POKEMON_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SEARCH_POKEMON_SUCCESS: {
      const { detailList } = state;
      const { details, isAlrHaveArr } = action.payload;
      return {
        ...state,
        detailList: [
          ...detailList,
          ...details.filter((d, index) => !isAlrHaveArr[index])
        ],
        listView: details,
        isLoading: false
      };
    }
    case RESET_LISTVIEW: {
      return {
        ...state,
        listView: []
      };
    }
    default: {
      return state;
    }
  }
};

//selector
export const selectPokemonNames = state => state.FunPokedexReducer.pokemonNames;
export const selectPokemonListView = state => state.FunPokedexReducer.listView;
export const selectDetailList = state => state.FunPokedexReducer.detailList;
export const selectPkmPerPage = state => state.FunPokedexReducer.pkmPerPage;
export const selectIsLoading = state => state.FunPokedexReducer.isLoading;

function* watchInitPokemonName(action) {
  try {
    const pokemonNames = yield getAllPokemonName();
    const pkmPerPage = yield select(selectPkmPerPage);
    const nameList = pokemonNames
      .slice(0, pkmPerPage)
      .map(pokemon => pokemon.name);
    yield put({ type: RESET_LISTVIEW });
    const { details } = yield fetchBulkPokemonDetail(nameList, []);
    yield put({
      type: INIT_POKEMON_NAME_SUCCESS,
      payload: { pokemonNames, details }
    });
  } catch (error) {
    console.log(error);
  }
}

function* watchSearchPokemon(action) {
  yield delay(1000);
  try {
    const searchStr = action.payload;
    const pokemonNames = yield select(selectPokemonNames);
    const detailList = yield select(selectDetailList);
    const pkmPerPage = yield select(selectPkmPerPage);
    const fuseOption = {
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 50,
      maxPatternLength: 32,
      minMatchCharLength: 3,
      keys: ["name"]
    };
    const fuse = new Fuse(pokemonNames, fuseOption);
    //fuzzy search pokemon
    const result =
      searchStr !== ""
        ? yield fuse.search(searchStr)
        : pokemonNames.slice(0, pkmPerPage);
    //get pokemon name list to get the details for the pokemon images (only details api have images)
    //with each pokemon name we will get the details and store in redux
    const nameList = result.slice(0, pkmPerPage).map(pokemon => pokemon.name);
    yield put({ type: RESET_LISTVIEW });
    const pkmDetailsPayload = yield fetchBulkPokemonDetail(
      nameList,
      detailList
    );
    yield put({ type: SEARCH_POKEMON_SUCCESS, payload: pkmDetailsPayload });
  } catch (error) {
    console.log(error);
  }
}

function* fetchBulkPokemonDetail(nameList, detailList) {
  //if pokemon already been searched, it will marked as already have details
  const detailsArr = yield all(
    nameList.map(async name => {
      const index = detailList.findIndex(pokemon => pokemon.name === name);
      const isAlreadyHaveDetail = index !== -1;
      const detail = isAlreadyHaveDetail
        ? detailList[index]
        : await getPokemonDetail(name);
      return { detail, isAlreadyHaveDetail };
    })
  );
  return {
    details: detailsArr.map(d => d.detail),
    isAlrHaveArr: detailsArr.map(d => d.isAlreadyHaveDetail)
  };
}

export const FunPokedexSaga = [
  fork(watchInitPokemonName),
  takeLatest(SEARCH_POKEMON_REQUEST, watchSearchPokemon)
];
