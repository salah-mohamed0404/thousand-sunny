import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack } from "@mui/material";
import logo from "../../assets/thousand-sunny-logo.webp";
import { lazy, Suspense, useContext } from "react";
import ThemeContext from "../../store/theme-context";
import { UserProfileButton } from "./MainButtons";
import AuthContext from "../../store/Auth-context";
const MainNavButtons = lazy(() => import("./MainNavButtons"));
const DrawerButton = lazy(() =>
  import("./MobileButtons").then((module) => ({ default: module.DrawerButton }))
);

const MainNav = () => {
  const { isDesktop } = useContext(ThemeContext);
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Link to="/">
            <img src={logo} alt="website logo" width={64} height={64} />
          </Link>

          <Suspense>{isDesktop && <MainNavButtons />}</Suspense>
          <Suspense>
            {!isDesktop && (
              <Stack direction="row" spacing={2} alignItems="center">
                {isAuthenticated && <UserProfileButton userImg={user?.image} />}
                <DrawerButton />
              </Stack>
            )}
          </Suspense>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
