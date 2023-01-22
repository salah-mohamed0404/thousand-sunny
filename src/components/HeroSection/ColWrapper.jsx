import { alpha, Grid, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

const ColWrapper = ({
  children,
  bgImg,
  grediantDir = "bottom right",
  breakpoints = {},
  otherStyle = {},
}) => {
  return (
    <Grid
      item
      {...breakpoints}
      p={5}
      borderRadius={1}
      color={grey[200]}
      sx={{
        backgroundImage: `linear-gradient(to ${grediantDir}, ${alpha(
          grey[700],
          0.35
        )} 50%, transparent), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...otherStyle,
      }}
      component={Paper}
    >
      {children}
    </Grid>
  );
};

export default ColWrapper;
