import { useMemo, useContext } from "react";
import { CardActions, Stack } from "@mui/material";
import CartContext from "../../store/cart-context";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import ChangeQuantityActions from "./ChangeQuantityActions";
import { useCallback } from "react";

const ProductActions = ({ product, quantity, setQuantity }) => {
  const { cartProducts, addToCart, removeFromCart, changeQuantity } =
    useContext(CartContext);

  const isInCart = useMemo(
    () =>
      cartProducts.findIndex((cartProduct) => cartProduct.id === product.id) !==
      -1,
    [cartProducts, product]
  );

  const handleAddToCart = () => {
    product.quantity = 1;
    setQuantity(1);
    addToCart(product);
  };

  const handleRemoveFromCart = useCallback(() => {
    product.quantity = 0;
    setQuantity(0);
    removeFromCart(product);
  }, [product, removeFromCart, setQuantity]);

  return (
    <CardActions>
      <Stack direction="row">
        <CartButton
          isInCart={isInCart}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />

        <ChangeQuantityActions
          isInCart={isInCart}
          product={product}
          cartProducts={cartProducts}
          changeQuantity={changeQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <WishlistButton product={product} />
      </Stack>
    </CardActions>
  );
};

export default ProductActions;
