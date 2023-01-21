import { alpha, Grid, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

const ColWrapper = ({ children, bgImg }) => {
  return (
    <Grid
      item
      md={6}
      p={5}
      borderRadius={1}
      color={grey[200]}
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${alpha(
          grey[700],
          0.5
        )} , transparent), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      component={Paper}
    >
      {children}
    </Grid>
  );
};

export default ColWrapper;
