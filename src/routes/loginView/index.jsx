import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { loginRoutes } from "../index";

export default () => {
  return (
    <Switch>
      {loginRoutes.map(route => {
        return (
          <Route key={route.path} path={route.path} component={route.com} />
        );
      })}
      <Redirect to="/login" />
    </Switch>
  );
};
