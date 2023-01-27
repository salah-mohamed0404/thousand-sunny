import { useContext } from "react";
import { Stack, Avatar, Button, IconButton, Tooltip } from "@mui/material";
import {
  LightMode,
  Person,
  FavoriteBorder,
  LocalMall,
  DarkMode,
  Login,
  Logout,
} from "@mui/icons-material";
import ThemeContext from "../../store/theme-context";
import LiveSearch from "../LiveSearch";
import { Link } from "react-router-dom";
import AuthContext from "../../store/Auth-context";

const MainNavButtons = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <LiveSearch />
      <Button variant="text" endIcon={<FavoriteBorder />} color="inherit">
        WishList
      </Button>
      <Button variant="text" endIcon={<LocalMall />} color="inherit">
        Cart
      </Button>
      {!isAuthenticated ? (
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
      )}
      {isAuthenticated && (
        <Tooltip title="User profile">
          <Link to="/user-profile">
            <Avatar>
              {user?.image ? (
                <img src={user.image} alt="user " width="100%" />
              ) : (
                <Person />
              )}
            </Avatar>
          </Link>
        </Tooltip>
      )}
      <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
        <IconButton onClick={toggleMode} color="inherit">
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default MainNavButtons;
