import { Dialog } from "@mui/material";
import Transition from "./Transition";

const DialogContainer = ({ open, handleClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="cart-dialog-title"
      aria-describedby="cart-dialog-description"
      maxWidth="xl"
    >
      {children}
    </Dialog>
  );
};

export default DialogContainer;
