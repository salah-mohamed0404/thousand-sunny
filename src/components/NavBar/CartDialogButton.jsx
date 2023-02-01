import { forwardRef, useState } from "react";
import { Close, LocalMallOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import ProductsList from "../ProductList";

const CartButton = () => {
  const [open, setOpen] = useState(false);
  const { cartProducts, totalPrice } = useContext(CartContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="text"
        endIcon={<LocalMallOutlined />}
        color="inherit"
        onClick={handleOpen}
      >
        Cart
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="cart-dialog-title"
        aria-describedby="cart-dialog-description"
        maxWidth="xl"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <DialogTitle id="cart-dialog-title">Your cart</DialogTitle>
          <IconButton onClick={handleClose} sx={{ mr: 2 }}>
            <Close />
          </IconButton>
        </Stack>
        <Divider />

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
              <ProductsList products={cartProducts} breakpoints={{ md: 3 }} />
            )}
          </Box>
        </DialogContent>

        <Divider />
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="p" px={2}>
            Total price: {totalPrice.toFixed(2)}
          </Typography>
          <Button color="inherit">Show detail and Check out</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default CartButton;
