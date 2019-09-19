import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {
  HomeReducer,
  BlogReducer,
  AuthReducer,
  FunPokedexReducer,
  AuthSaga,
  BlogSaga,
  FunPokedexSaga,
  initUserData
} from "./ducks";
import { all, fork } from "redux-saga/effects";

const RootReducer = combineReducers({
  BlogReducer,
  AuthReducer,
  HomeReducer,
  FunPokedexReducer
});
let sagaMiddleware;

function* rootSaga() {
  yield all([...AuthSaga, ...BlogSaga, ...FunPokedexSaga, fork(initUserData)]);
}
export const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  sagaMiddleware = createSagaMiddleware();
  return createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
};

export const initSaga = () => {
  sagaMiddleware.run(rootSaga);
};
