// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const role = useSelector((state) => state.auth.role);
  if (role === "EMPLOYE") {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
