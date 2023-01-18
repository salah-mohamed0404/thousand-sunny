import { Container, Divider, Grid } from "@mui/material";
import React from "react";

const FooterContainer = ({ children }) => {
  return (
    <>
      <Divider />
      <Container
        component="footer"
        maxWidth="lg"
        sx={{ borderTop: "1px solid", borderTopColor: "primary.light" }}
      >
        <Grid
          container
          my={10}
          px={2}
          spacing={4}
          columns={{ xs: 4, sm: 6, md: 12 }}
        >
          {children}
        </Grid>
      </Container>
    </>
  );
};

export default FooterContainer;
