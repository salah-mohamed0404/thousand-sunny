import { useContext } from "react";
import { Container, Stack, Typography } from "@mui/material";
import ProductsList from "../components/ProductList";
import WishlistContext from "../store/wishlist-context";

const Wishlist = () => {
  const { wishlistProducts } = useContext(WishlistContext);

  return (
    <Stack spacing={3} width="100%">
      <Typography variant="h3" textAlign="center" py={5}>
        Your Wishlist🤩
      </Typography>

      <div>
        <Container maxWidth="xl">
          {wishlistProducts.length === 0 ? (
            <Typography variant="h5" textAlign="center" py={5}>
              You did not add any product to your wishlist yet😥
            </Typography>
          ) : (
            <ProductsList
              products={wishlistProducts}
              breakpoints={{ xs: 9.6, sm: 5.8, md: 2.85 }}
            />
          )}
        </Container>
      </div>
    </Stack>
  );
};

export default Wishlist;
