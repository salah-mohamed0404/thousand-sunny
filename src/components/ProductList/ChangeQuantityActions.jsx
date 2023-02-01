import { Add, Remove } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { useEffect } from "react";

const ChangeQuantityActions = ({
  isInCart,
  changeQuantity,
  product,
  cartProducts,
  handleRemoveFromCart,
  quantity,
  setQuantity,
}) => {
  useEffect(() => {
    const cartProduct = cartProducts.find((item) => item.id === product.id);
    const productQuantity = cartProduct?.quantity;
    if (productQuantity) setQuantity(productQuantity);
  }, [cartProducts, product.id, setQuantity]);

  useEffect(() => {
    if (quantity === "") return;
    if (quantity <= 0) handleRemoveFromCart();
  }, [quantity, handleRemoveFromCart]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      setQuantity("");
      return;
    }

    setQuantity(value);
    changeQuantity(product.id, value);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = ++prevQuantity;

      changeQuantity(product.id, newQuantity);

      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = --prevQuantity;

      changeQuantity(product.id, newQuantity);

      return newQuantity;
    });
  };

  return (
    isInCart && (
      <Stack direction="row" gap={1} alignItems="center">
        <IconButton size="small" onClick={decreaseQuantity}>
          <Remove />
        </IconButton>
        <TextField
          value={quantity}
          onChange={handleChange}
          type="tel"
          variant="standard"
          size="small"
          sx={{ maxWidth: 40 }}
          inputProps={{
            style: { textAlign: "center" },
          }}
        />
        <IconButton size="small" onClick={increaseQuantity}>
          <Add />
        </IconButton>
      </Stack>
    )
  );
};

export default ChangeQuantityActions;
