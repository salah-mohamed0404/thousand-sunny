import { Box, Container, Grid } from "@mui/material";
import Categories from "./Categories";
import Products from "./Products";

const HomeProducts = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Products />
          </Grid>
          <Grid item xs={3}>
            <Categories />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeProducts;
