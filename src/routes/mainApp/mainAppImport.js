import { lazy } from "react";

// export const FunRoute = React.lazy(() => import("./fun/fun.route"));
// export const HomeRoute = React.lazy(() => import("./home/home.route"));
// export const BlogRoute = React.lazy(() => import("./blog/blog.route"));
// export const ContactRoute = React.lazy(() => import("./contact/contact.route"));
// export const BlogDetailRoute = React.lazy(() =>
//   import("./blog/blogDetail/blogDetail.route")
// );

const delayTime = 700;

export const FunRoute = lazy(() => {
  return Promise.all([
    import("./fun/fun.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const HomeRoute = lazy(() => {
  return Promise.all([
    import("./home/home.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const BlogRoute = lazy(() => {
  return Promise.all([
    import("./blog/blog.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const ContactRoute = lazy(() => {
  return Promise.all([
    import("./contact/contact.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const BlogDetailRoute = lazy(() => {
  return Promise.all([
    import("./blog/blogDetail/blogDetail.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});
