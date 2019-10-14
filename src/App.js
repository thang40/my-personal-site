import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { THEMES, LANGUAGES, languageContext, themeContext } from "./contexts";
import { LoadingSpinner } from "./components";
import { initStore, initSaga } from "./store";
import { Provider } from "react-redux";
import { ROUTES } from "./consts";
import trans from "./assets/translations/translation.json";
import moment from "moment";
import { LoginRoute, MainApp, Page404Route } from "./routes";

const { EN, VN } = LANGUAGES;
const baseName =
  process.env.NODE_ENV === "production" ? "/my-personal-site" : "/";
const store = initStore();
initSaga();

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.LIGHT
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || EN
  );

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
        <languageContext.Provider
          value={{
            language,
            translate,
            datetimeFormat,
            toggleLanguage: changeLanguage
          }}
        >
          {/* style={{ position: "absolute", top: "50%", left: "50%" }} */}
          <themeContext.Provider value={{ theme, toggleTheme: changeTheme }}>
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
                  <LoadingSpinner size="big" />
                </div>
              }
            >
              <Switch>
                <Route path={ROUTES.LOGIN_ROUTE} component={LoginRoute} />
                <Route path={ROUTES.HOME_ROUTE} component={MainApp} />
                <Route component={Page404Route} />
              </Switch>
            </Suspense>
            <div id="toast-root" style={{ position: "relative" }}></div>
          </themeContext.Provider>
        </languageContext.Provider>
      </Router>
    </Provider>
  );
};

export default App;
