import { combineReducers } from "redux";
import {
  HomeReducer,
  BlogReducer,
  AuthReducer,
  AuthSaga,
  BlogSaga,
  initUserData
} from "./ducks";
import { all, fork } from "redux-saga/effects";

export const RootReducer = combineReducers({
  BlogReducer,
  AuthReducer,
  HomeReducer
});

export function* rootSaga() {
  yield all([...AuthSaga, ...BlogSaga, fork(initUserData)]);
}
