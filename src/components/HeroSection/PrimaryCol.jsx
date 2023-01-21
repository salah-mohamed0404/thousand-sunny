import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import laptop from "../../assets/laptop.jpg";
import ColWrapper from "./ColWrapper";

const PrimaryCol = () => {
  return (
    <ColWrapper bgImg={laptop}>
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
    </ColWrapper>
  );
};

export default PrimaryCol;
