import { lazy } from "react";

const delayTime = 5000000;

export const Page404Route = lazy(() => {
  return Promise.all([
    import("./404/404.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const LoginRoute = lazy(() => {
  return Promise.all([
    import("./Login/login.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const MainApp = lazy(() => {
  return Promise.all([
    import("./mainApp/mainApp"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});
