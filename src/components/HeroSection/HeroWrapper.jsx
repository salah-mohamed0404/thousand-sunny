import { alpha, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import tech from "../../assets/tech-wallpaper.jpg";

const HeroWrapper = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 3,
        pb: 5,
        backgroundImage: `linear-gradient(to bottom right, ${alpha(
          grey[700],
          0.5
        )} , ${alpha(grey[500], 0.5)}), url(${tech})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      component="section"
    >
      <Grid container>{children}</Grid>
    </Container>
  );
};

export default HeroWrapper;
