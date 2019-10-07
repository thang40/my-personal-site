import React from "react";

// export * from "./home/home.route";
// export * from "./blog/blog.route";
// export * from "./user/user.route";
// export * from "./blog/blogDetail/blogDetail.route";
// export * from "./fun/fun.route";
// export * from "./404/404.route";

export const FunRoute = React.lazy(() => import("./fun/fun.route"));
export const HomeRoute = React.lazy(() => import("./home/home.route"));
export const BlogRoute = React.lazy(() => import("./blog/blog.route"));
export const Page404Route = React.lazy(() => import("./404/404.route"));
export const BlogDetailRoute = React.lazy(() =>
  import("./blog/blogDetail/blogDetail.route")
);
export const ContactRoute = React.lazy(() => import("./contact/contact.route"));
