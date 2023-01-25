import { Container, Divider, Grid } from "@mui/material";
import React from "react";

const FooterContainer = ({ children }) => {
  return (
    <>
      <Divider sx={{ mt: 5 }} />
      <Container
        component="footer"
        maxWidth="lg"
        sx={{
          borderTop: "1px solid",
          borderTopColor: "primary.light",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          my={10}
          px={2}
          spacing={4}
          columns={{ xs: 4, sm: 6, md: 12 }}
          width="100%"
        >
          {children}
        </Grid>
      </Container>
    </>
  );
};

export default FooterContainer;
