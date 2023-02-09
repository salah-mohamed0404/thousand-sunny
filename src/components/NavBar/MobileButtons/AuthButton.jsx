import { Login, Logout } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AuthButton = ({ isAuthenticated, handleLogout, ...rest }) => {
  return !isAuthenticated ? (
    <BottomNavigationAction
      {...rest}
      label="Log in"
      icon={<Login fontSize="small" />}
      LinkComponent={Link}
      to="/login"
    />
  ) : (
    <BottomNavigationAction
      {...rest}
      label="Logout"
      icon={<Logout fontSize="small" />}
      onClick={handleLogout}
    />
  );
};

export default AuthButton;
