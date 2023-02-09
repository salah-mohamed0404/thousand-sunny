import { Divider, Stack } from "@mui/material";
import React from "react";

const CategoryContainer = ({ maxHeight, children }) => {
  return (
    <Stack
      spacing={2}
      divider={<Divider flexItem />}
      maxHeight={maxHeight}
      p={2}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": { width: 10 },
        "&::-webkit-scrollbar-track": { bgcolor: "lightgray" },
        "&::-webkit-scrollbar-thumb": { bgcolor: "grey" },
      }}
    >
      {children}
    </Stack>
  );
};

export default CategoryContainer;
