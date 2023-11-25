import React from "react";
import { Route, Navigate } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";

const isAuth = true;
const PrivateRoute = ({ children }) => {
  return isAuth ? <>{children}</> : <Navigate to="/" />;
};
export default PrivateRoute;
