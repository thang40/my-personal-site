import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {
  HomeReducer,
  BlogReducer,
  AuthReducer,
  FunPokedexReducer,
  AuthSaga,
  BlogSaga,
  FunPokedexSaga
} from "./ducks";
import { all } from "redux-saga/effects";

const RootReducer = combineReducers({
  BlogReducer,
  AuthReducer,
  HomeReducer,
  FunPokedexReducer
});
let sagaMiddleware;
const isProd = process.env.NODE_ENV === "production";

function* rootSaga() {
  yield all([...AuthSaga, ...BlogSaga, ...FunPokedexSaga]);
}
export const initStore = handleSagaError => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  sagaMiddleware = createSagaMiddleware({
    onError: error => {
      if (isProd) {
        console.log(error);
      }
      handleSagaError();
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
