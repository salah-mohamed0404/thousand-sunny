import { Stack } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <Stack spacing={5}>
      <HeroSection />
      <Features />
      <HomeProducts />
    </Stack>
  );
};

export default Home;
