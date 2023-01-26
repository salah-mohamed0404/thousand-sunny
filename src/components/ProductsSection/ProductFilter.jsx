import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { useState, useEffect, forwardRef } from "react";
import FilterForm from "./FilterForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductFilter = ({ products = [], handleProducts, fetchProducts }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Filters</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <DialogTitle variant="h5">Filters</DialogTitle>
          <Button variant="contained" onClick={handleClose}>
            Done
          </Button>
        </Stack>
        <DialogContent>
          <DialogContentText>
            Custmize your search as you like (filter with categories doesn't
            work with other filters)
          </DialogContentText>
          <FilterForm categories={categories} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductFilter;
