import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/not-found.svg";
const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" justifyContent="center" py={6}>
        <img src={NotFoundImg} alt="Page not found" width="75%" />

        <Typography
          variant="h5"
          mt={10}
          mb={5}
          textAlign="center"
          maxWidth={1000}
        >
          The page you are looking for could not be found. The link to this
          address may be outdated or we may have moved the since you last
          bookmarked it.Sorry😥
        </Typography>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Button variant="contained" size="large">
            Back to home
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default NotFound;
