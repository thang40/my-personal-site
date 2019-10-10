import { lazy } from "react";

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
