import { Box, Button, Typography } from "@mui/material";
import ColWrapper from "./ColWrapper";
import perfumeImg from "../../assets/perfume2.jpg";
import { Link } from "react-router-dom";

const SecodaryCol = ({ breakpoints = {} }) => {
  return (
    <ColWrapper
      bgImg={perfumeImg}
      grediantDir="bottom"
      breakpoints={breakpoints}
      otherStyle={{
        backgroundPosition: "bottom",
        textAlign: "center",
      }}
    >
      <Box height={400}>
        <Typography variant="h4">Amazing perfume collections</Typography>

        <Typography mt={1}>
          We always seek for most perfect product to Satisfy you our dear
          custmor
        </Typography>

        <Link to="/products">
          <Button variant="contained" sx={{ mt: 3 }}>
            Give it a look
          </Button>
        </Link>
      </Box>
    </ColWrapper>
  );
};

export default SecodaryCol;
