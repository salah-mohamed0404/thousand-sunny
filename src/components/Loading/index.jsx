import { CircularProgress, Stack } from "@mui/material";

const Loading = ({ containerProps, progressProps }) => {
  return (
    <Stack alignItems="center" justifyContent="center" {...containerProps}>
      <CircularProgress {...progressProps} />
    </Stack>
  );
};

export default Loading;
