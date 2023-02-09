import LogoCol from "./LogoCol";
import LinksCol from "./LinksCol";
import FooterContainer from "./FooterContainer";
import { memo } from "react";

const location = "cell 102, level 6, Impel down";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoCol />

      <LinksCol
        xs={4}
        otherBreakPoints={{ md: 3 }}
        title="Contact Us"
        links={[
          {
            href: `https://www.google.com/maps/search/${location.replace(
              " ",
              "+"
            )}`,
            text: location,
          },
          { href: "tel:+201116387902", text: "+201116387902" },
          {
            href: "mailto:salah.mohamed0404@gmail.com",
            text: "salah.mohamed0404@gmail.com",
          },
        ]}
      />

      <LinksCol
        title="Account"
        links={[
          {
            to: "/signup",
            text: "Create Account",
          },
          { to: "/login", text: "Log in" },
          {
            href: "#",
            text: "IOS App",
          },
          {
            href: "#",
            text: "Android App",
          },
        ]}
      />

      <LinksCol
        title="Company"
        links={[
          {
            to: "/about",
            text: "About 1000Sunny",
          },
          { to: "/for-business", text: "For business" },
          {
            to: "/partners",
            text: "Partners",
          },
          {
            to: "/careers",
            text: "Careers",
          },
        ]}
      />

      <LinksCol
        title="Resources"
        links={[
          {
            to: "/products",
            text: "Products",
          },
          { to: "/support", text: "Help center" },
          {
            to: "/privacy&terms",
            text: "Privacy & terms",
          },
        ]}
      />
    </FooterContainer>
  );
};

export default memo(Footer);
