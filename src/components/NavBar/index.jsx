import { useEffect, useState, lazy, Suspense } from "react";
const MainNav = lazy(() => import("./MainNav"));
const MobileNav = lazy(() => import("./MobileNav"));

const NavBar = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 900) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    updateMedia();

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return <Suspense>{isDesktop ? <MainNav /> : <MobileNav />}</Suspense>;
};

export default NavBar;
