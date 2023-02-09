import { memo } from "react";
import HeroWrapper from "./HeroWrapper";
import PrimaryCol from "./PrimaryCol";
import SecodaryCol from "./SecodaryCol";

const HeroSection = () => {
  return (
    <HeroWrapper>
      <PrimaryCol breakpoints={{ xs: 12, md: 7.75 }} />
      <SecodaryCol breakpoints={{ xs: 12, md: 3.75 }} />
    </HeroWrapper>
  );
};

export default memo(HeroSection);
