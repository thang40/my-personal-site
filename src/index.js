import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ErrorBoundary } from "./components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { initService } from "./services/airtable.service";
// Init airtable service
// initService();
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
