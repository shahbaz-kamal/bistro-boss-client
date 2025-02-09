import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default PrivateRoute;
