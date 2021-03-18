import { lazy } from "react";
const Forum = lazy(() => import("../../pages/Forum/Forum"));
const Home = lazy(() => import("../../pages/Home/Home"));
const Blog = lazy(() => import("../../pages/Blog/Blog"));
const Document = lazy(() => import("../../pages/Document/Document"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Signup = lazy(() => import("../../pages/Login/Signup"));
const Routes = [
  { path: "/forum", exact: true, component: Forum },
  { path: "/blog", exact: true, component: Blog },
  { path: "/document", exact: true, component: Document },
  { path: "/", exact: true, component: Home },
  { path: "/login", exact: true, component: Login },
  { path: "/signup", exact: true, component: Signup },
];

export default Routes;
