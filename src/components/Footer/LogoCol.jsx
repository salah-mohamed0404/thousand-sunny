import { Link } from "react-router-dom";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import logo from "../../assets/thousand-sunny-logo.png";

const LogoCol = () => {
  return (
    <Grid item xs={3} color="text.secondary" gridColumn="span 3">
      <Link to="/">
        <img src={logo} alt="Website logo" width={80} height={80} />
      </Link>
      <Stack component="ul" direction="row" spacing={0.5} mt={2}>
        <Stack component="li">
          <IconButton href="https://www.facebook.com/" target="_blank">
            <FacebookRounded />
          </IconButton>
        </Stack>
        <Stack component="li">
          <IconButton href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </IconButton>
        </Stack>
        <Stack component="li">
          <IconButton href="https://twitter.com/" target="_blank">
            <Twitter />
          </IconButton>
        </Stack>
      </Stack>
      <Typography variant="body2" mt={7} color="inherit">
        Copyright © 2023 by 1000Sunny,Inc. All right reseved
      </Typography>
    </Grid>
  );
};

export default LogoCol;
