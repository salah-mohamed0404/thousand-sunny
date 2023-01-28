import { Stack } from "@mui/material";

const LoginFormContainer = ({ handleSubmit, children }) => {
  return (
    <Stack
      component="form"
      spacing={3}
      width="70%"
      justifyContent="center"
      alignItems="center"
      onSubmit={handleSubmit}
    >
      {children}
    </Stack>
  );
};

export default LoginFormContainer;
