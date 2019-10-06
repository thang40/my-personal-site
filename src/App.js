import React, { useState, useEffect, useRef, Suspense } from "react";
import { Footer, Header, SmallContainer, LoadingSpinner } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { THEMES, LANGUAGES, LanguageContext } from "./contexts";
import { withInt } from "./HOCs/withInt";
import { initStore, initSaga } from "./store";
import { Provider } from "react-redux";
import { ROUTES } from "./consts";
import trans from "./assets/translations/translation.json";
import moment from "moment";

const FunRoute = React.lazy(() => import("./routes/fun/fun.route"));
const HomeRoute = React.lazy(() => import("./routes/home/home.route"));
const BlogRoute = React.lazy(() => import("./routes/blog/blog.route"));
const Page404Route = React.lazy(() => import("./routes/404/404.route"));
const BlogDetailRoute = React.lazy(() =>
  import("./routes/blog/blogDetail/blogDetail.route")
);
const { EN, VN } = LANGUAGES;
const IntHeader = withInt(Header);
const baseName =
  process.env.NODE_ENV === "production" ? "/my-personal-site" : "/";
const store = initStore();
initSaga();

const App = () => {
  const [minBodyHeight, setMinBodyHeight] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.LIGHT
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || EN
  );
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const footerHeight = footerRef.current.clientHeight;
    setMinBodyHeight(window.innerHeight - headerHeight - footerHeight);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", EN);
    }
    moment.locale(localStorage.getItem("language"));
  }, []);

  const changeTheme = () => {
    const changedTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem("theme", changedTheme);
    setTheme(changedTheme);
  };
  const changeLanguage = () => {
    const changedLang = language === EN ? VN : EN;
    localStorage.setItem("language", changedLang);
    moment.locale(changedLang);
    setLanguage(changedLang);
  };
  const datetimeFormat = datetimeStr => {
    return moment(datetimeStr).format("LL");
  };
  const translate = text => {
    if (language === EN) {
      return text;
    }
    return trans[text] ? trans[text] : text;
  };

  return (
    <Provider store={store}>
      <Router basename={baseName}>
        <LanguageContext.Provider
          value={{ language, translate, datetimeFormat }}
        >
          <IntHeader
            ref={headerRef}
            theme={theme}
            language={language}
            toggleTheme={changeTheme}
            toggleLanguage={changeLanguage}
          />
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
        </LanguageContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
