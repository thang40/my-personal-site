import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {
  HomeReducer,
  AuthReducer,
  FunPokedexReducer,
  AuthSaga,
  FunPokedexSaga
} from "./ducks";
import { all } from "redux-saga/effects";

const RootReducer = combineReducers({
  AuthReducer,
  HomeReducer,
  FunPokedexReducer
});
let sagaMiddleware;
const isProd = process.env.NODE_ENV === "production";

function* rootSaga() {
  yield all([...AuthSaga, ...FunPokedexSaga]);
}
export const initStore = handleSagaError => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  sagaMiddleware = createSagaMiddleware({
    onError: error => {
      if (!isProd) {
        console.log(error);
      }
    }
  });
  return createStore(
    RootReducer,
    isProd
      ? applyMiddleware(sagaMiddleware)
      : composeEnhancers(applyMiddleware(sagaMiddleware))
  );
};

export const initSaga = () => {
  sagaMiddleware.run(rootSaga);
};
