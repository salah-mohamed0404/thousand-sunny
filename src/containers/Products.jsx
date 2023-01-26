import { useCallback, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductsSection from "../components/ProductsSection";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async (skip = 0) => {
    setLoading(true);

    const url = `https://dummyjson.com/products?limit=30&skip=${skip}`;
    const res = await axios.get(url);

    setProducts(res.data.products);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleProducts = (products) => {
    setProducts(products);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        color="primary.main"
        textAlign="center"
        p={2}
        gutterBottom
      >
        In your service
      </Typography>

      <ProductsSection
        loading={loading}
        products={products}
        handleProducts={handleProducts}
        fetchProducts={fetchProducts}
      />
    </Box>
  );
};

export default Products;
