import { Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" borderTop="">
      <Grid container>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item component="nav"></Grid>
        <Grid item component="nav"></Grid>
        <Grid item component="nav"></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
