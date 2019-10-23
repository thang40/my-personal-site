import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  Suspense
} from "react";
import {
  Footer,
  Header,
  SmallContainer,
  LoadingSpinner
} from "../../components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { languageContext, themeContext } from "../../contexts";
import {
  logoutAction,
  fetchNewCommitsAction,
  selectCommits
} from "../../ducks";
import { withInt } from "../../HOCs/withInt";
import { ROUTES } from "../../consts";
import {
  AdminRoute,
  FunRoute,
  HomeRoute,
  BlogRoute,
  ContactRoute,
  BlogDetailRoute
} from "./mainAppImport";

const IntHeader = withInt(Header);

const MainApp = ({ logoutAction, fetchCommits, commits }) => {
  const [minBodyHeight, setMinBodyHeight] = useState(0);
  const { language, toggleLanguage } = useContext(languageContext);
  const { theme, toggleTheme } = useContext(themeContext);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const footerHeight = footerRef.current.clientHeight;
    setMinBodyHeight(window.innerHeight - headerHeight - footerHeight);
  }, []);

  useEffect(() => {
    setInterval(() => {
      fetchCommits();
    }, 60000 * 5);
  }, [fetchCommits]);

  return (
    <React.Fragment>
      <IntHeader
        ref={headerRef}
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        logoutAction={logoutAction}
        commits={commits}
      />

      <SmallContainer theme={theme} style={{ minHeight: minBodyHeight }}>
        <Suspense
          fallback={
            <div className="text-center">
              <LoadingSpinner />
            </div>
          }
        >
          <Route path={ROUTES.HOME_ROUTE} exact component={HomeRoute} />
          <Route path={ROUTES.BLOG_ROUTE} exact component={BlogRoute} />
          <Route path={ROUTES.BLOG_DETAIL_ROUTE} component={BlogDetailRoute} />
          <Route path={ROUTES.FUN_ROUTE} component={FunRoute} />
          <Route path={ROUTES.CONTACT_ROUTE} component={ContactRoute} />
          <Route path={ROUTES.ADMIN_ROUTE} component={AdminRoute} />
        </Suspense>
      </SmallContainer>
      <Footer theme={theme} ref={footerRef} />
    </React.Fragment>
  );
};

export default connect(
  state => ({
    commits: selectCommits(state)
  }),
  {
    logoutAction: logoutAction,
    fetchCommits: fetchNewCommitsAction
  }
)(MainApp);
