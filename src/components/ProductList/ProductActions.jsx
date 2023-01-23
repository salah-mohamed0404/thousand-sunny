import {
  FavoriteBorder,
  LocalMallOutlined,
  Visibility,
} from "@mui/icons-material";
import { Box, CardActions, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductActions = ({ productId }) => {
  return (
    <CardActions sx={{ flexGrow: 1 }}>
      <Box mt="auto">
        <Tooltip title="Show details">
          <Link to={`/products/${productId}`}>
            <IconButton>
              <Visibility />
            </IconButton>
          </Link>
        </Tooltip>
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
      </Box>
    </CardActions>
  );
};

export default ProductActions;
