import { LoadingButton } from "@mui/lab";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FormButtons = ({ loading, submitError }) => {
  return (
    <Stack spacing={2} alignItems="center">
      {submitError !== "" && (
        <Typography color="error.main">{submitError}</Typography>
      )}
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={loading}
        sx={{ mt: 5 }}
      >
        Log in
      </LoadingButton>
      <Link to="/signup">
        <Button size="large">Create new account</Button>
      </Link>
    </Stack>
  );
};

export default FormButtons;
