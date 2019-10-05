import React, { useState, useEffect, useRef, Suspense } from "react";
import { Footer, Header, SmallContainer, LoadingSpinner } from "./components";
import { Provider } from "react-redux";
import { initStore, initSaga } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { THEMES } from "./context/theme.context";
import { ROUTES } from "./consts";

const FunRoute = React.lazy(() => import("./routes/fun/fun.route"));
const HomeRoute = React.lazy(() => import("./routes/home/home.route"));
const BlogRoute = React.lazy(() => import("./routes/blog/blog.route"));
const BlogDetailRoute = React.lazy(() =>
  import("./routes/blog/blogDetail/blogDetail.route")
);
const Page404Route = React.lazy(() => import("./routes/404/404.route"));
const baseName =
  process.env.NODE_ENV === "production" ? "/my-personal-site" : "/";
const store = initStore();
initSaga();

const App = () => {
  const [minBodyHeight, setMinBodyHeight] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.LIGHT
  );
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const footerHeight = footerRef.current.clientHeight;
    setMinBodyHeight(window.innerHeight - headerHeight - footerHeight);
  }, []);
  const changeTheme = () => {
    const changedTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem("theme", changedTheme);
    setTheme(changedTheme);
  };

  return (
    <Provider store={store}>
      <Router basename={baseName}>
        <Header theme={theme} ref={headerRef} toggleTheme={changeTheme} />
        <SmallContainer theme={theme} style={{ minHeight: minBodyHeight }}>
          <Suspense
            fallback={
              <div className="text-center">
                <LoadingSpinner />
              </div>
            }
          >
            <Switch>
              {/* <Sider style={style} /> */}
              <Route path={ROUTES.HOME_ROUTE} exact component={HomeRoute} />
              <Route path={ROUTES.BLOG_ROUTE} exact component={BlogRoute} />
              <Route
                path={ROUTES.BLOG_DETAIL_ROUTE}
                component={BlogDetailRoute}
              />
              <Route path={ROUTES.FUN_ROUTE} component={FunRoute} />
              <Route component={Page404Route} />
            </Switch>
          </Suspense>
        </SmallContainer>
        <Footer theme={theme} ref={footerRef} />
      </Router>
    </Provider>
  );
};

export default App;
