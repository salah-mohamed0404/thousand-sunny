import { lazy, Suspense } from "react";
import { Box, Container, Grid } from "@mui/material";
import Products from "./Products";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
const Categories = lazy(() => import("./Categories"));

const HomeProducts = () => {
  const { isDesktop } = useContext(ThemeContext);

  return (
    <Box component="section">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Products />
          </Grid>
          <Grid item xs={3}>
            <Suspense>{isDesktop && <Categories />}</Suspense>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeProducts;
