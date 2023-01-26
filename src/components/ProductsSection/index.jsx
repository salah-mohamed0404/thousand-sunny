import { Container, Stack } from "@mui/material";
import Loading from "../Loading";
import ProductFilter from "./ProductFilter";
import ProductsList from "../ProductList";
import ProductSorter from "./ProductSorter";

const index = ({ loading, products, handleProducts, fetchProducts }) => {
  return (
    <Container component="section">
      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={2}
          mb={3}
          borderBottom="1px solid"
          borderColor="divider"
        >
          <ProductFilter
            products={products}
            handleProducts={handleProducts}
            fetchProducts={fetchProducts}
          />
          <ProductSorter
            products={products}
            handleProducts={handleProducts}
            fetchProducts
          />
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

export default index;
