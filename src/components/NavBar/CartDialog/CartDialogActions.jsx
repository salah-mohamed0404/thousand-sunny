import { Button, DialogActions, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CartDialogActions = ({ totalPrice }) => {
  return (
    <DialogActions sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" component="p" px={2} color="inherit">
        Total price: {totalPrice.toFixed(2)}
      </Typography>

      <Link to="/cart">
        <Button color="inherit">Show detail and Check out</Button>
      </Link>
    </DialogActions>
  );
};

export default CartDialogActions;
