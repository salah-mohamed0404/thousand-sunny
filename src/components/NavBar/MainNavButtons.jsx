import { useContext } from "react";
import { Stack } from "@mui/material";
import LiveSearch from "../LiveSearch";
import AuthContext from "../../store/Auth-context";
import UserAvatar from "./UserAvatar";
import { AuthButton, CartButton, ModeButton, WishlistButton } from "./Buttons";

const MainNavButtons = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Stack direction="row" spacing={4} alignItems="center" component="nav">
      <LiveSearch />

      <WishlistButton />

      <CartButton />

      <AuthButton isAuthenticated={isAuthenticated} logout={logout} />

      {isAuthenticated && <UserAvatar userImg={user?.image} />}

      <ModeButton />
    </Stack>
  );
};

export default MainNavButtons;
