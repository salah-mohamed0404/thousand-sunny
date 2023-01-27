import { cloneElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../store/Auth-context";

function querystring(name, url = window.location.href) {
  const parsedName = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp(`[?&]${parsedName}(=([^&#]*)|&|#|$)`, "i");
  const results = regex.exec(url);

  if (!results || !results[2]) {
    return false;
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function UnauthenticatedRoute(props) {
  const { isAuthenticated } = useContext(AuthContext);
  const { children } = props;
  const redirect = querystring("redirect");

  if (isAuthenticated) {
    return <Navigate to={redirect || "/"} />;
  }

  return cloneElement(children, props);
}
