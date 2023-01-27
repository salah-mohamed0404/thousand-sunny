import { Stack } from "@mui/material";
import React from "react";

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
