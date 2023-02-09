import { useContext } from "react";
import { Stack } from "@mui/material";
import LiveSearch from "../LiveSearch";
import AuthContext from "../../store/Auth-context";
import {
  AuthButton,
  CartButton,
  ModeButton,
  WishlistButton,
  UserProfileButton,
} from "./MainButtons";

const MainNavButtons = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Stack direction="row" spacing={4} alignItems="center" component="nav">
      <Stack width={250}>
        <LiveSearch />
      </Stack>

      <WishlistButton />

      <CartButton />

      <AuthButton isAuthenticated={isAuthenticated} logout={logout} />

      {isAuthenticated && <UserProfileButton userImg={user?.image} />}

      <ModeButton />
    </Stack>
  );
};

export default MainNavButtons;
