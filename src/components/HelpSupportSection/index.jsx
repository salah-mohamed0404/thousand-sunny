import { Stack } from "@mui/material";
import { memo } from "react";
import Content from "./Content";
import SectionContainer from "./SectionContainer";

function HelpSupportSection() {
  return (
    <SectionContainer>
      <Stack direction={{ sx: "column", md: "row" }} rowGap={2}>
        <Content />
      </Stack>
    </SectionContainer>
  );
}

export default memo(HelpSupportSection);
