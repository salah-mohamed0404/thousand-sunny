import { FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WishlistButton = () => {
  return (
    <Link to="/wishlist">
      <Button variant="text" endIcon={<FavoriteBorder />} color="inherit">
        WishList
      </Button>
    </Link>
  );
};

export default WishlistButton;
