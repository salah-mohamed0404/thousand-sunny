import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import NavDrawer from "../NavDrawer";

const DrawerButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Menu />
      </IconButton>

      <NavDrawer
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default DrawerButton;
