import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Box mt={5}>
      <Container>
        <Paper
          component={Stack}
          p={5}
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            🤗Sign up to 1000Sunny🤗
          </Typography>

          <SignUpForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
