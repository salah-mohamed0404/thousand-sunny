import { lazy, Suspense, memo, useContext } from "react";
import ThemeContext from "../../store/theme-context";
import MainNav from "./MainNav";

const MobileNav = lazy(() => import("./MobileNav"));

const NavBar = () => {
  const { isDesktop } = useContext(ThemeContext);

  return (
    <Suspense>
      <MainNav />
      {!isDesktop && <MobileNav />}
    </Suspense>
  );
};

export default memo(NavBar);
