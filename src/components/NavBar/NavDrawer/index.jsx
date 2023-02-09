import { IconButton, Stack, SwipeableDrawer } from "@mui/material";
import { ModeButton } from "../MainButtons";
import LiveSearch from "../../LiveSearch";
import Categories from "../../Categoies";
import { Close } from "@mui/icons-material";

const NavDrawer = ({ open, handleOpen, handleClose }) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      sx={{ position: "relative" }}
    >
      <Stack px={2} height="100%" sx={{ width: { sx: "100%", md: "auto" } }}>
        <Stack width={230}>
          <LiveSearch expanded={true} />
        </Stack>
        <Categories />
        <Stack direction="row" justifyContent="space-between" mt="auto" p={1}>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
          <ModeButton />
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
};

export default NavDrawer;
