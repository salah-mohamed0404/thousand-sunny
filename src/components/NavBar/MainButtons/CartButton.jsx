import { useState } from "react";
import { LocalMallOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import CartDialog from "../CartDialog";

const CartButton = () => {
  const [open, setOpen] = useState(false);

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

      <CartDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default CartButton;
