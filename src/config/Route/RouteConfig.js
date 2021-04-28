import { lazy } from "react";
const Forum = lazy(() => import("../../pages/Forum/Forum"));
const Home = lazy(() => import("../../pages/Home/Home"));
const Blog = lazy(() => import("../../pages/Blog/Blog"));
const Document = lazy(() => import("../../pages/Document/Document"));
const Course = lazy(() => import("../../pages/Course/Course"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Signup = lazy(() => import("../../pages/Login/Signup"));
const CourseDetail = lazy(() => import("../../pages/CourseDetail"));
const BlogDetail = lazy(() => import("../../pages/BlogDetail"));
const ForumDetail = lazy(() => import("../../pages/ForumDetail"));
const CreateForum = lazy(() => import("../../pages/CreateForum"));
const Routes = [
  { path: "/course", exact: true, component: Course },
  { path: "/forum", exact: true, component: Forum },
  { path: "/blog", exact: true, component: Blog },
  { path: "/document", exact: true, component: Document },
  { path: "/", exact: true, component: Home },
  { path: "/login", exact: true, component: Login },
  { path: "/signup", exact: true, component: Signup },
  { path: "/course-detail/:id", exact: true, component: CourseDetail },
  { path: "/blog-detail/:id", exact: true, component: BlogDetail },
  { path: "/forum-detail/:id", exact: true, component: ForumDetail },
  { path: "/create-forum", exact: true, component: CreateForum },
];

export default Routes;
