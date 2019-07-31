import React from "react";
import { Sider, Footer, Header } from "./components";
import createSagaMiddleware from "redux-saga";
import { Layout } from "antd";
import { RootReducer, rootSaga } from "./combine";
import { useSpring } from "react-spring";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeRoute, BlogRoute, LoginRoute } from "./routes";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

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
        <Router>
          <Layout>
            <Header />
            <Layout>
              <Sider style={style} />
              <Layout style={{ padding: "0 24px 24px" }}>
                <Route path="/" exact component={HomeRoute} />
                <Route path="/blog" exact component={BlogRoute} />
                <Route path="/login" exact component={LoginRoute} />
              </Layout>
            </Layout>
            <Footer />
          </Layout>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
