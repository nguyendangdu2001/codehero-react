import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home/Home"));

const Routes = [{ path: "/", exact: true, component: Home }];

export default Routes;
