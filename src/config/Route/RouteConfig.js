import { lazy } from "react";
const Forum = lazy(() => import("../../pages/Forum/Forum"));
const Home = lazy(() => import("../../pages/Home/Home"));
const Blog = lazy(() => import("../../pages/Blog/Blog"));
const Document = lazy(() => import("../../pages/Document/Document"));
const Routes = [
  { path: "/forum", exact: true, component: Forum },
  { path: "/blog", exact: true, component: Blog },
  { path: "/document", exact: true, component: Document },
  { path: "/", exact: true, component: Home },
];

export default Routes;
