import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import laptop from "../../assets/laptop.webp";
import ColWrapper from "./ColWrapper";

const PrimaryCol = ({ breakpoints = {} }) => {
  return (
    <ColWrapper
      bgImg={laptop}
      breakpoints={breakpoints}
      otherStyle={{ backgroundPosition: "center" }}
    >
      <Stack
        sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }}
        height="100%"
        justifyContent="center"
      >
        <Typography
          variant="subtitle1"
          width="fit-content"
          color="primary.main"
          fontWeight={2}
        >
          Best Prices
        </Typography>

        <Typography variant="h3" component="p" mt={1}>
          Incredible Prices on All Your Favorite products
        </Typography>

        <Typography mt={2}>
          Free shipping on all your order. we deliver you enjoy
        </Typography>

        <Link to="/products">
          <Button variant="contained" sx={{ mt: 5 }}>
            do't miss it
          </Button>
        </Link>
      </Stack>
    </ColWrapper>
  );
};

export default PrimaryCol;
