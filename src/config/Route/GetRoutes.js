import { Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import Routes from "./RouteConfig";

function GetRoutes() {
  return (
    <Suspense
      fallback={
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
      }
    >
      <Switch>
        {Routes.map((route, indx) => {
          const { path, component } = route;
          return <Route key={indx} path={path} exact={true} component={component} />;
        })}
      </Switch>
    </Suspense>
  );
}

export default GetRoutes;
