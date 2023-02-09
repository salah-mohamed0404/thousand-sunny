import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <Box sx={{ textAlign: "center", width: "100%", color: "whitesmoke" }}>
      <Typography variant="h3" gutterBottom>
        Help center
      </Typography>
      <Typography variant="h6" mb={5}>
        We are really care about you so we create a special section dedicated
        for your service
      </Typography>

      <Link to="/support">
        <Button variant="contained">Let us help</Button>
      </Link>
    </Box>
  );
};

export default Content;
