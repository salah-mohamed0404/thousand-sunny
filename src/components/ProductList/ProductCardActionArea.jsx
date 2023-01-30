import { CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import ProductContent from "./ProductContent";
import placeholderImg from "../../assets/placeholder.jpg";

const ProductCardActionArea = ({ product }) => {
  return (
    <CardActionArea
      sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <CardMedia
          component="img"
          height={200}
          image={placeholderImg}
          alt={product.title}
        />

        <ProductContent
          title={product.title}
          price={product.price}
          discount={product.discountPercentage}
          rating={product.rating}
        />
      </Link>
    </CardActionArea>
  );
};

export default ProductCardActionArea;
