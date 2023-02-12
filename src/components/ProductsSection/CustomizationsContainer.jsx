import { Stack } from "@mui/material";

const CustomizationsContainer = ({ children }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      py={2}
      borderBottom="1px solid"
      borderColor="divider"
    >
      {children}
    </Stack>
  );
};

export default CustomizationsContainer;
