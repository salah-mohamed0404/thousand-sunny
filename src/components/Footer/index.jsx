import LogoCol from "./LogoCol";
import LinksCol from "./LinksCol";
import FooterContainer from "./FooterContainer";

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
            href: "#",
            text: "cell 102, level 6, Impel down",
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
            href: "#",
            text: "Create Account",
          },
          { href: "#", text: "Sign in" },
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
            href: "#",
            text: "About 1000Sunny",
          },
          { href: "#", text: "For business" },
          {
            href: "#",
            text: "Partners",
          },
          {
            href: "#",
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
          { href: "#", text: "Help center" },
          {
            href: "#",
            text: "Privacy & terms",
          },
        ]}
      />
    </FooterContainer>
  );
};

export default Footer;
