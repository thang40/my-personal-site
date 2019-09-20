import { initPokemonName, getPokemonDetail } from "../services/pokeAPI.service";
import { put, takeLatest, select, all, delay } from "redux-saga/effects";
import Fuse from "fuse.js";

const INIT_POKEMON_NAME_REQUEST = "@@FUN_POKEDEX/INIT_POKEMON_NAME_REQUEST";
const INIT_POKEMON_NAME_SUCCESS = "@@FUN_POKEDEX/INIT_POKEMON_NAME_SUCCESS";
const SEARCH_POKEMON_REQUEST = "@@FUN_POKEDEX/SEARCH_POKEMON_REQUEST";
const SEARCH_POKEMON_SUCCESS = "@@FUN_POKEDEX/SEARCH_POKEMON_SUCCESS";
const INIT_DETAIL_LIST_AND_LISTVIEW =
  "@@FUN_POKEDEX/INIT_DETAIL_LIST_AND_LISTVIEW";
const FETCH_DETAIL_LIST_AND_LISTVIEW =
  "@@FUN_POKEDEX/FETCH_DETAIL_LIST_AND_LISTVIEW";
const RESET_LISTVIEW = "@@FUN_POKEDEX/RESET_LIST_VIEW";

// action creator
export const initPokemonNameAction = () => {
  return { type: INIT_POKEMON_NAME_REQUEST };
};

export const searchPokemonAction = searchStr => {
  return { type: SEARCH_POKEMON_REQUEST, payload: searchStr };
};
// reducer
const initialState = {
  count: undefined,
  pokemonNames: [],
  page: 1,
  detailList: [], //preload list
  detailView: undefined, //detail page view
  listView: [] // paginated list
};

export const FunPokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POKEMON_NAME_SUCCESS: {
      return {
        ...state,
        pokemonNames: action.payload
      };
    }
    case INIT_DETAIL_LIST_AND_LISTVIEW: {
      const { detail } = action.payload;
      return {
        ...state,
        detailList: [...state.detailList, detail],
        listView: [...state.listView, detail]
      };
    }
    case RESET_LISTVIEW: {
      return {
        ...state,
        listView: []
      };
    }
    case FETCH_DETAIL_LIST_AND_LISTVIEW: {
      const { detailList } = state;
      const { detail, isAlreadyHaveDetail } = action.payload;
      return {
        ...state,
        detailList: isAlreadyHaveDetail
          ? detailList
          : [...state.detailList, detail],
        listView: [...state.listView, detail]
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

function* watchInitPokemonName(action) {
  try {
    const pokemonNames = yield initPokemonName();
    const nameList = pokemonNames.slice(0, 20).map(pokemon => pokemon.name);
    yield put({ type: RESET_LISTVIEW });
    yield put({
      type: INIT_POKEMON_NAME_SUCCESS,
      payload: pokemonNames
    });
    yield _fetchBulkPokemonDetail(nameList, INIT_DETAIL_LIST_AND_LISTVIEW, []);
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
    const result =
      searchStr !== ""
        ? yield fuse.search(searchStr)
        : pokemonNames.slice(0, 20);
    const nameList = result.slice(0, 20).map(pokemon => pokemon.name);
    console.log(searchStr);
    yield put({ type: RESET_LISTVIEW });
    yield _fetchBulkPokemonDetail(
      nameList,
      FETCH_DETAIL_LIST_AND_LISTVIEW,
      detailList
    );
    // yield put({
    //   type: SEARCH_POKEMON_SUCCESS,
    //   payload: pokemonNames
    // });
  } catch (error) {
    console.log(error);
  }
}

function* _fetchBulkPokemonDetail(nameList, actionType, detailList) {
  const putArr = yield all(
    nameList.map(async name => {
      const index = detailList.findIndex(pokemon => pokemon.name === name);
      const isAlreadyHaveDetail = index !== -1;
      const detail = isAlreadyHaveDetail
        ? detailList[index]
        : await getPokemonDetail(name);
      return {
        type: actionType,
        payload: { detail, isAlreadyHaveDetail }
      };
    })
  );
  yield all(putArr.map(item => put(item)));
}

export const FunPokedexSaga = [
  takeLatest(INIT_POKEMON_NAME_REQUEST, watchInitPokemonName),
  takeLatest(SEARCH_POKEMON_REQUEST, watchSearchPokemon)
];
