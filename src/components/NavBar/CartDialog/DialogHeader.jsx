import { Close } from "@mui/icons-material";
import { DialogTitle, IconButton, Stack } from "@mui/material";

const DialogHeader = ({ handleClose }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <DialogTitle id="cart-dialog-title">Your cart</DialogTitle>
      <IconButton onClick={handleClose} sx={{ mr: 2 }}>
        <Close />
      </IconButton>
    </Stack>
  );
};

export default DialogHeader;
