import { useMemo, useContext } from "react";
import {
  Favorite,
  FavoriteBorder,
  LocalMall,
  LocalMallOutlined,
} from "@mui/icons-material";
import { CardActions, IconButton, Tooltip } from "@mui/material";
import CartContext from "../../store/cart-context";
import WishlistContext from "../../store/wishlist-context";

const ProductActions = ({ product }) => {
  const { cartProducts, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlistProducts, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isInCart = useMemo(
    () =>
      cartProducts.findIndex((cartProduct) => cartProduct.id === product.id) !==
      -1,
    [cartProducts, product]
  );
  const isInWishlist = useMemo(() => {
    console.log(1);
    return (
      wishlistProducts.findIndex(
        (wishProduct) => wishProduct.id === product.id
      ) !== -1
    );
  }, [wishlistProducts, product]);

  const toggleCart = () => {
    if (isInCart) removeFromCart(product);
    else addToCart(product);
  };

  const toggleWishlist = () => {
    if (isInWishlist) removeFromWishlist(product);
    else addToWishlist(product);
  };

  return (
    <CardActions sx={{ pl: 2 }}>
      <Tooltip title="Add to cart">
        <IconButton onClick={toggleCart}>
          {!isInCart ? <LocalMallOutlined /> : <LocalMall />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Add to wishlist">
        <IconButton onClick={toggleWishlist}>
          {!isInWishlist ? <FavoriteBorder /> : <Favorite />}
        </IconButton>
      </Tooltip>
    </CardActions>
  );
};

export default ProductActions;
