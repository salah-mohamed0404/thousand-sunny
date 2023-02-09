import { Divider } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartDialogActions from "./CartDialogActions";
import CartDialogContent from "./CartDialogContent";
import DialogContainer from "./DialogContainer";
import DialogHeader from "./DialogHeader";

const CartDialog = ({ open, handleClose }) => {
  const { cartProducts, totalPrice } = useContext(CartContext);
  return (
    <DialogContainer open={open} handleClose={handleClose}>
      <DialogHeader handleClose={handleClose} />

      <Divider />

      <CartDialogContent cartProducts={cartProducts} />

      <Divider />

      <CartDialogActions totalPrice={totalPrice} handleClose={handleClose} />
    </DialogContainer>
  );
};

export default CartDialog;
