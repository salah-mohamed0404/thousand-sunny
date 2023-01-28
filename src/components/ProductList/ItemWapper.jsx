import { Card, Grid } from "@mui/material";
import React from "react";

const ItemWapper = ({ children, breakpoints }) => {
  return (
    <Grid
      item
      component={Card}
      display="flex"
      flexDirection="column"
      position="relative"
      {...breakpoints}
    >
      {children}
    </Grid>
  );
};

export default ItemWapper;
