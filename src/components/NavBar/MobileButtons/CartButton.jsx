import { LocalMall } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";

const CartButton = ({ handleOpen, ...rest }) => {
  return (
    <BottomNavigationAction
      {...rest}
      label="Cart"
      icon={<LocalMall fontSize="small" />}
      onClick={handleOpen}
    />
  );
};

export default CartButton;
