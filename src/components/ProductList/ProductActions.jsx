import { FavoriteBorder, LocalMallOutlined } from "@mui/icons-material";
import { CardActions, IconButton, Tooltip } from "@mui/material";

const ProductActions = () => {
  return (
    <CardActions sx={{ pl: 2 }}>
      <Tooltip title="Add to cart">
        <IconButton>
          <LocalMallOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add to wishlist">
        <IconButton>
          <FavoriteBorder />
        </IconButton>
      </Tooltip>
    </CardActions>
  );
};

export default ProductActions;
