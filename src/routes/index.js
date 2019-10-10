import { lazy } from "react";

// export * from "./home/home.route";
// export * from "./blog/blog.route";
// export * from "./user/user.route";
// export * from "./blog/blogDetail/blogDetail.route";
// export * from "./fun/fun.route";
// export * from "./404/404.route";

// export const Page404Route = React.lazy(() => import("./404/404.route"));
// export const LoginRoute = React.lazy(() => import("./Login/login.route"));
// export const MainApp = React.lazy(() => import("./mainApp/mainApp"));

const delayTime = 1000;

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
