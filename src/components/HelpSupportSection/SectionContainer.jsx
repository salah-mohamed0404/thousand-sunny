import { alpha, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import techSuppportImg from "../../assets/tech-support.jpg";

const SectionContainer = ({ children }) => {
  return (
    <section>
      <Container
        sx={{
          py: 8,
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            grey[700],
            0.35
          )} , ${alpha(grey[600], 0.35)}), url(${techSuppportImg})`,
          backgroundSize: "cover",
        }}
      >
        {children}
      </Container>
    </section>
  );
};

export default SectionContainer;
