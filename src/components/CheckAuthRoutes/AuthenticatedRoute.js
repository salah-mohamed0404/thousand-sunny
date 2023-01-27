import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../store/Auth-context";

export default function AuthenticatedRoute({ children }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${pathname}${search}`} />;
  }

  return children;
}
