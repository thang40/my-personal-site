import { combineReducers } from "redux";
import { HomeReducer, BlogReducer, LoginReducer, LoginSaga } from "./ducks";
import { all } from "redux-saga/effects";

export const RootReducer = combineReducers({
  LoginReducer,
  HomeReducer,
  BlogReducer
});

export function* rootSaga() {
  yield all([...LoginSaga]);
}
