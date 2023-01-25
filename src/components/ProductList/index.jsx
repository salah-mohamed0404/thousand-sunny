import { CardMedia, Grid } from "@mui/material";
import placeholderImg from "../../assets/placeholder.jpg";
import ItemWapper from "./ItemWapper";
import ProductActions from "./ProductActions";
import ProductContent from "./ProductContent";

const ProductsList = ({ col = 12, breakpoints = [], products = [] }) => {
  return (
    <Grid
      container
      columns={col}
      columnGap={2}
      rowGap={4}
      alignContent="center"
      justifyContent="center"
      justifyItems="center"
    >
      {products.map((product) => (
        <ItemWapper key={product.id} breakpoints={breakpoints}>
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

          <ProductActions productId={product.id} />
        </ItemWapper>
      ))}
    </Grid>
  );
};

export default ProductsList;