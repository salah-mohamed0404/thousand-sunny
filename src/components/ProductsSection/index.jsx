import { Container, Stack } from "@mui/material";
import Loading from "../Loading";
import ProductFilter from "./ProductFilter";
import ProductsList from "../ProductList";
import ProductSorter from "./ProductSorter";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
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

  const handleProducts = useCallback((products) => {
    setProducts(products);
  }, []);

  return (
    <Container component="section">
      <Stack spacing={3}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={2}
          borderBottom="1px solid"
          borderColor="divider"
        >
          <ProductFilter
            products={products}
            handleProducts={handleProducts}
            fetchProducts={fetchProducts}
          />
          <ProductSorter handleProducts={handleProducts} />
        </Stack>

        {!loading ? (
          <ProductsList
            products={products}
            breakpoints={{ xs: 3 }}
            col={12.75}
          />
        ) : (
          <Loading containerProps={{ my: 20 }} progressProps={{ size: 130 }} />
        )}
      </Stack>
    </Container>
  );
};

export default Index;
