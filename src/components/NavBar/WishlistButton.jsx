import { FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";

const WishlistButton = () => {
  return (
    <Button variant="text" endIcon={<FavoriteBorder />} color="inherit">
      WishList
    </Button>
  );
};

export default WishlistButton;
