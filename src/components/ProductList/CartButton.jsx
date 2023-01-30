import { LocalMall, LocalMallOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const CartButton = ({ isInCart, handleAddToCart, handleRemoveFromCart }) => {
  const toggleCart = () => {
    if (isInCart) handleRemoveFromCart();
    else handleAddToCart();
  };

  return (
    <Tooltip title="Add to cart">
      <IconButton onClick={toggleCart}>
        {!isInCart ? <LocalMallOutlined /> : <LocalMall />}
      </IconButton>
    </Tooltip>
  );
};

export default CartButton;
