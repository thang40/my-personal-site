import React, { useState, useEffect } from "react";
import { Footer, Header } from "./components";
import createSagaMiddleware from "redux-saga";
import { RootReducer, rootSaga } from "./combine";
import { useSpring } from "react-spring";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { ThemeContext, themes } from "./context/theme.context";
import {
  HomeRoute,
  BlogRoute,
  UserRoute,
  BlogDetailRoute,
  LoginRoute
} from "./routes";
import { ROUTES } from "./consts";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2
  ];

  const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
  const style = { transform: props.xy.interpolate(trans1) };
  return (
    <Provider store={store}>
      <Router>
        <ThemeContext.Provider
          value={{ theme: theme, changeTheme: changeTheme }}
        >
          <Header />
          <div
            className="container"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xy: calc(x, y) })
            }
            style={{ minHeight: windowHeight - 86 - 42 }}
          >
            {/* <Sider style={style} /> */}
            <Route path={ROUTES.HOME_ROUTE} exact component={HomeRoute} />
            <Route path={ROUTES.BLOG_ROUTE} exact component={BlogRoute} />
            <Route
              path={ROUTES.BLOG_DETAIL_ROUTE}
              component={BlogDetailRoute}
            />
            <Route path={ROUTES.LOGIN_ROUTE} exact component={LoginRoute} />
            <Route path={ROUTES.USER_ROUTE} component={UserRoute} />
          </div>
          <Footer />
        </ThemeContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
