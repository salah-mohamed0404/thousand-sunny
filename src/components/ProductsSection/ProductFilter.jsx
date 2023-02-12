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
import { useCallback } from "react";
import { useState, useEffect, forwardRef } from "react";
import FilterForm from "./FilterForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductFilter = ({ updateSearchParams, priceRangePararm }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(
    priceRangePararm
      ? priceRangePararm.split(",").map((item) => parseInt(item))
      : [0, 2000]
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  const handleOpen = () => setOpen(true);

  const handleClose = useCallback(() => {
    setOpen(false);
    updateSearchParams("price", priceRange.join(","));
    if (selectedCategory) updateSearchParams("category", selectedCategory);
  }, [priceRange, selectedCategory, updateSearchParams]);

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
          <FilterForm
            categories={categories}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductFilter;
