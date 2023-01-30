import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React, { useContext, useMemo } from "react";
import WishlistContext from "../../store/wishlist-context";

const WishlistButton = ({ product }) => {
  const { wishlistProducts, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isInWishlist = useMemo(
    () =>
      wishlistProducts.findIndex(
        (wishProduct) => wishProduct.id === product.id
      ) !== -1,
    [wishlistProducts, product]
  );

  const toggleWishlist = () => {
    if (isInWishlist) removeFromWishlist(product);
    else addToWishlist(product);
  };

  return (
    <Tooltip title="Add to wishlist">
      <IconButton onClick={toggleWishlist}>
        {!isInWishlist ? <FavoriteBorder /> : <Favorite />}
      </IconButton>
    </Tooltip>
  );
};

export default WishlistButton;
