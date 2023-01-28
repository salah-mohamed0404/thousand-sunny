import { Stack } from "@mui/material";

const RowContainer = ({ children }) => {
  return (
    <Stack width="100%" gap={3} direction={{ sx: "column", md: "row" }}>
      {children}
    </Stack>
  );
};

export default RowContainer;
