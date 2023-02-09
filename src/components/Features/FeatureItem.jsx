import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const FeatureItem = ({ Icon, title, description }) => {
  return (
    <Stack
      key={title}
      direction="row"
      justifyContent={{ md: "center" }}
      alignItems="center"
      spacing={2}
      component="li"
    >
      <Avatar sx={{ color: "whitesmoke", bgcolor: "primary.light" }}>
        <Icon />
      </Avatar>
      <Stack>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeatureItem;
