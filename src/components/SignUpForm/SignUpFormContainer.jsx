import { Stack } from "@mui/material";

const SignUpFormContainer = ({ handleSubmit, children }) => {
  return (
    <Stack
      component="form"
      spacing={3}
      justifyContent="center"
      alignItems="center"
      onSubmit={handleSubmit}
      width="100%"
    >
      {children}
    </Stack>
  );
};

export default SignUpFormContainer;
