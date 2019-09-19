import React, { useState, useEffect } from "react";
import { Footer, Header } from "./components";
import { Provider } from "react-redux";
import { initStore, initSaga } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeContext, themes } from "./context/theme.context";
import {
  HomeRoute,
  BlogRoute,
  UserRoute,
  BlogDetailRoute,
  FunRoute
} from "./routes";
import { ROUTES } from "./consts";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = initStore();
initSaga();

const App = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <Provider store={store}>
      <Router>
        <ThemeContext.Provider
          value={{ theme: theme, changeTheme: changeTheme }}
        >
          <Header />
          <div style={{ minHeight: windowHeight - 150 }}>
            {/* <Sider style={style} /> */}
            <Route path={ROUTES.HOME_ROUTE} exact component={HomeRoute} />
            <Route path={ROUTES.BLOG_ROUTE} exact component={BlogRoute} />
            <Route
              path={ROUTES.BLOG_DETAIL_ROUTE}
              component={BlogDetailRoute}
            />
            <Route path={ROUTES.USER_ROUTE} component={UserRoute} />
            <Route path={ROUTES.FUN_ROUTE} component={FunRoute} />
          </div>
          <Footer />
        </ThemeContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
