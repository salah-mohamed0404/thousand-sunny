import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/not-found.svg";
const NotFound = () => {
  return (
    <Stack alignItems="center" justifyContent="center" py={5} px={30}>
      <img src={NotFoundImg} alt="Page not found" height={300} />
      <Typography variant="h5" mt={10} mb={5} textAlign="center">
        The page you are looking for could not be found. The link to this
        address may be outdated or we may have moved the since you last
        bookmarked it.Sorry😥
      </Typography>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Button variant="contained" size="large">
          Go home
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFound;
