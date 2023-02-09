import { useContext } from "react";
import { alpha, Box, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import tech from "../../assets/tech-wallpaper.jpg";
import ThemeContext from "../../store/theme-context";

const HeroWrapper = ({ children }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <Box
      py={7}
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${alpha(
          grey[700],
          mode === "dark" ? 0.5 : 0.1
        )} , ${alpha(grey[600], mode === "dark" ? 0.5 : 0.1)}), url(${tech})`,
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
