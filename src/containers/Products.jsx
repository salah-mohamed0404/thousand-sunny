import { Box, Typography } from "@mui/material";
import { memo } from "react";
import ProductsSection from "../components/ProductsSection";

const Products = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="primary.main"
        textAlign="center"
        px={2}
        py={4}
      >
        In your service
      </Typography>

      <ProductsSection />
    </Box>
  );
};

export default memo(Products);
