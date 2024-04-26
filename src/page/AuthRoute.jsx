// AuthRoute.jsx

import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ isAuthenticated, redirectTo, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to={redirectTo} />}
    />
  );
};

export default AuthRoute;
