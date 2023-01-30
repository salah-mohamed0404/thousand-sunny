import { Login, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AuthButton = ({ isAuthenticated, logout }) => {
  return !isAuthenticated ? (
    <Link to="/login">
      <Button variant="text" color="inherit" endIcon={<Login />}>
        Log in
      </Button>
    </Link>
  ) : (
    <Button
      variant="text"
      color="inherit"
      endIcon={<Logout />}
      onClick={logout}
    >
      log out
    </Button>
  );
};

export default AuthButton;
