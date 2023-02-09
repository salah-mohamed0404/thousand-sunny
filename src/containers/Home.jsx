import { Stack } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HomeProducts from "../components/HomeProducts";
import HelpSupportSection from "../components/HelpSupportSection";
import { memo } from "react";

const Home = () => {
  return (
    <Stack spacing={5}>
      <HeroSection />
      <Features />
      <HomeProducts />
      <HelpSupportSection />
    </Stack>
  );
};

export default memo(Home);
