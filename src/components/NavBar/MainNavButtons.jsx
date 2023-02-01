import { useContext } from "react";
import { Stack, IconButton, Tooltip } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import ThemeContext from "../../store/theme-context";
import LiveSearch from "../LiveSearch";
import AuthContext from "../../store/Auth-context";
import WishlistButton from "./WishlistButton";
import CartDialogButton from "./CartDialogButton";
import AuthButton from "./AuthButton";
import UserAvatar from "./UserAvatar";

const MainNavButtons = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Stack direction="row" spacing={4} alignItems="center" component="nav">
      <LiveSearch />

      <WishlistButton />

      <CartDialogButton />

      <AuthButton isAuthenticated={isAuthenticated} logout={logout} />

      {isAuthenticated && <UserAvatar userImg={user?.image} />}

      <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
        <IconButton onClick={toggleMode} color="inherit">
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default MainNavButtons;
