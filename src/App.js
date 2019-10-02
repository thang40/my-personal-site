import React, { useState, useEffect, useRef, Suspense } from "react";
import { Footer, Header, SmallContainer } from "./components";
import { Provider } from "react-redux";
import { initStore, initSaga } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeContext, THEMES } from "./context/theme.context";
import { ROUTES } from "./consts";

const FunRoute = React.lazy(() => import("./routes/fun/fun.route"));
const HomeRoute = React.lazy(() => import("./routes/home/home.route"));
const BlogRoute = React.lazy(() => import("./routes/blog/blog.route"));
const BlogDetailRoute = React.lazy(() =>
  import("./routes/blog/blogDetail/blogDetail.route")
);
const baseName =
  process.env.NODE_ENV === "production" ? "/my-personal-site" : "/";
const store = initStore();
initSaga();

const App = () => {
  const [minBodyHeight, setWindowHeight] = useState(0);
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const footerHeight = footerRef.current.clientHeight;
    setWindowHeight(window.innerHeight - headerHeight - footerHeight);
  }, []);
  const changeTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  return (
    <Provider store={store}>
      <Router basename={baseName}>
        <ThemeContext.Provider
          value={{ theme: theme, changeTheme: changeTheme }}
        >
          <Header theme={theme} ref={headerRef} toggleTheme={changeTheme} />
          <SmallContainer theme={theme} style={{ minHeight: minBodyHeight }}>
            <Suspense fallback={<div>...loading</div>}>
              {/* <Sider style={style} /> */}
              <Route path={ROUTES.HOME_ROUTE} exact component={HomeRoute} />
              <Route path={ROUTES.BLOG_ROUTE} exact component={BlogRoute} />
              <Route
                path={ROUTES.BLOG_DETAIL_ROUTE}
                component={BlogDetailRoute}
              />
              <Route path={ROUTES.FUN_ROUTE} component={FunRoute} />
            </Suspense>
          </SmallContainer>
          <Footer theme={theme} ref={footerRef} />
        </ThemeContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
