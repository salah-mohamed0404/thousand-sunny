import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Login = () => {
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
          <Typography variant="h3" textAlign="center" gutterBottom>
            Log in to 1000Sunny
          </Typography>

          <LoginForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
