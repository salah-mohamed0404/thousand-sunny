import { Container, Divider, Stack } from "@mui/material";
import React from "react";

const FeaturesContainer = ({ children }) => {
  return (
    <section>
      <Divider sx={{ bgcolor: "primary.light" }} />
      <Container>
        <Stack
          direction={{ md: "row" }}
          py={3}
          justifyContent="space-between"
          gap={2}
          component="ul"
        >
          {children}
        </Stack>
      </Container>
      <Divider sx={{ bgcolor: "primary.light" }} />
    </section>
  );
};

export default FeaturesContainer;
