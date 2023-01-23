import { Avatar, Stack, Typography } from "@mui/material";

const OptionItem = ({ props, option }) => {
  return (
    <Stack
      component="li"
      direction="row"
      spacing={2}
      flexWrap="nowrap"
      {...props}
    >
      <Avatar variant="circular" src={option.images[0]} />
      <Typography flexGrow={1}>{option.title}</Typography>
    </Stack>
  );
};

export default OptionItem;
