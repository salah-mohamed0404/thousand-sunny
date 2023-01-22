import { alpha, Box, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import tech from "../../assets/tech-wallpaper.jpg";

const HeroWrapper = ({ children }) => {
  return (
    <Box
      py={7}
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${alpha(
          grey[500],
          0.3
        )} , ${alpha(grey[400], 0.3)}), url(${tech})`,
        backgroundSize: "cover",
      }}
      component="section"
    >
      <Container maxWidth="xl">
        <Grid container rowGap={4} justifyContent="space-between">
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroWrapper;
