import { Favorite } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";

const WishListButton = (props) => {
  return (
    <BottomNavigationAction
      {...props}
      label="Wishlist"
      icon={<Favorite fontSize="small" />}
      LinkComponent={Link}
      to="/wishlist"
    />
  );
};

export default WishListButton;
