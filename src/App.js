import React from "react";
import { Sider, Footer, Header } from "./components";
import { Layout, Breadcrumb } from "antd";
import { RootReducer } from "./combine";
import { useSpring } from "react-spring";
import { FancyBg } from "my-react-spring-comp-lib";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeRoute, BlogRoute } from "./routes";
import { Auth0Provider, useAuth0 } from "./auth";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

const { REACT_APP_OAUTH_DOMAIN, REACT_APP_OAUTH_CLIENT_ID } = process.env;

const App = () => {
  const onRedirectCallback = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };
  const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

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
      <div
        class="container"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Auth0Provider
          domain={REACT_APP_OAUTH_DOMAIN}
          client_id={REACT_APP_OAUTH_CLIENT_ID}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
        >
          <FancyBg>
            <Router>
              <Layout>
                <Header />
                <Layout>
                  <Sider style={style} />
                  <Layout style={{ padding: "0 24px 24px" }}>
                    <Route path="/" exact component={HomeRoute} />
                    <Route path="/blog" exact component={BlogRoute} />
                  </Layout>
                </Layout>
                <Footer />
              </Layout>
            </Router>
          </FancyBg>
        </Auth0Provider>
      </div>
    </Provider>
  );
};

export default App;
