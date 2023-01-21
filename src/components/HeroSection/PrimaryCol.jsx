import { alpha, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import laptop from "../../assets/laptop.jpg";

const PrimaryCol = () => {
  return (
    <Grid
      item
      md={6}
      p={5}
      borderRadius={1}
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${alpha(
          grey[700],
          0.5
        )} , transparent), url(${laptop})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      component={Paper}
    >
      <Stack width="50%" spacing={2}>
        <Typography
          variant="subtitle1"
          width="fit-content"
          color="primary.main"
          fontWeight={2}
        >
          Best Prices
        </Typography>

        <Typography variant="h4" component="p" mb={10}>
          Incredible Prices on All Your Favorite products
        </Typography>

        <Link to="/products">
          <Button variant="contained">Shop Now</Button>
        </Link>
      </Stack>
    </Grid>
  );
};

export default PrimaryCol;
