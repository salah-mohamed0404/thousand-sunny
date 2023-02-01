import { Badge, Grid } from "@mui/material";
import ItemWapper from "./ItemWapper";
import ProductBody from "./ProductBody";

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
          <Badge
            color="primary"
            badgeContent={`-${product.discountPercentage}%`}
            overlap="rectangular"
            sx={{
              position: "absolute",
              top: "5%",
              right: "15%",
            }}
          />

          <ProductBody product={product} />
        </ItemWapper>
      ))}
    </Grid>
  );
};

export default ProductsList;
