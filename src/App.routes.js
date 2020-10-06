import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "./constants";

const Home = lazy(() => import("./pages/Home/Home"));
const Work = lazy(() => import("./pages/Work/Work"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const AppRoutes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path={Routes.HOME} component={Home} />
      <Route exact path={Routes.WORK} component={Work} />
      <Route exact path={Routes.NOTFOUND} component={NotFound} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
