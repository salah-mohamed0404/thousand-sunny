import { BottomNavigation } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../store/Auth-context";
import CartDialog from "./CartDialog";
import {
  AuthButton,
  CartButton,
  HomeButton,
  WishListButton,
} from "./MobileButtons";

const MobileNav = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { pathname } = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  const handleLogOut = () => {
    logout();
    setActive(0);
  };

  useEffect(() => {
    if (pathname === "/") setActive(0);
    else if (pathname === "/wishlist") setActive(1);
    else if (pathname === "/cart") setActive(2);
    else if (pathname === "/login") setActive(3);
  }, [pathname]);

  return (
    <>
      <BottomNavigation
        value={active}
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          zIndex: "appBar",
        }}
      >
        <HomeButton />
        <WishListButton />
        <CartButton handleOpen={handleOpen} />
        <AuthButton
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogOut}
        />
      </BottomNavigation>
      <CartDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default MobileNav;
