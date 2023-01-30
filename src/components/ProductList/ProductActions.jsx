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

const ProductActions = ({ productId }) => {
  const { cartProductIds, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlistProductIds, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isInCart = useMemo(
    () => cartProductIds.findIndex((id) => id === productId) !== -1,
    [cartProductIds, productId]
  );
  const isInWishlist = useMemo(
    () => wishlistProductIds.findIndex((id) => id === productId) !== -1,
    [wishlistProductIds, productId]
  );

  const toggleCart = () => {
    if (isInCart) removeFromCart(productId);
    else addToCart(productId);
  };

  const toggleWishlist = () => {
    if (isInWishlist) removeFromWishlist(productId);
    else addToWishlist(productId);
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
