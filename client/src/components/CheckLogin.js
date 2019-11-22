import React from "react";
import { Redirect } from "react-router-dom";
import Routes from "./Routes";
import { useAuth } from "../hooks";

export default props => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Routes /> : <Redirect to="/login" />;
};
