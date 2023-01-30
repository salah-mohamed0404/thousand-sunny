import { LocalMallOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

const CartButton = () => {
  return (
    <Button variant="text" endIcon={<LocalMallOutlined />} color="inherit">
      Cart
    </Button>
  );
};

export default CartButton;
