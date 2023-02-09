import {
  Box,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import ProductsList from "../../ProductList";

const CartDialogContent = ({ cartProducts }) => {
  return (
    <DialogContent sx={{ overflow: "hidden" }}>
      <DialogContentText id="cart-dialog-description" mb={3}>
        Here you will find all product you attended to buy
      </DialogContentText>
      <Box sx={{ maxHeight: 500 }} overflow="auto">
        {cartProducts.length === 0 ? (
          <Typography variant="h5" p={5}>
            There isn't any product in the cart yet. Please, add some🥰
          </Typography>
        ) : (
          <ProductsList
            products={cartProducts}
            breakpoints={{ md: cartProducts.length > 2 ? 3 : 8 }}
          />
        )}
      </Box>
    </DialogContent>
  );
};

export default CartDialogContent;
