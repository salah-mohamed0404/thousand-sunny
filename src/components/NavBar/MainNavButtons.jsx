import { useContext } from "react";
import { Stack, Avatar, Button, IconButton, Tooltip } from "@mui/material";
import {
  LightMode,
  Person,
  FavoriteBorder,
  DarkMode,
  Login,
  Logout,
  LocalMallOutlined,
} from "@mui/icons-material";
import ThemeContext from "../../store/theme-context";
import LiveSearch from "../LiveSearch";
import { Link } from "react-router-dom";
import AuthContext from "../../store/Auth-context";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import AuthButton from "./AuthButton";

const MainNavButtons = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <LiveSearch />

      <WishlistButton />

      <CartButton />

      <AuthButton isAuthenticated={isAuthenticated} logout={logout} />

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
