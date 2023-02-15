import { CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import ProductContent from "./ProductContent";
import placeholderImg from "../../assets/placeholder.webp";

const ProductCardActionArea = ({ product, quantity }) => {
  return (
    <CardActionArea
      sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
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
          quantity={quantity}
        />
      </Link>
    </CardActionArea>
  );
};

export default ProductCardActionArea;
