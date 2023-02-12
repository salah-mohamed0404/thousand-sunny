import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";

const ProductSorter = ({ updateSearchParams, priceOrderParam }) => {
  const [priceOrder, setPriceOrder] = useState(priceOrderParam);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const selectedPriceOrder = e.target.value;
    setPriceOrder(selectedPriceOrder);
    updateSearchParams("priceOrder", selectedPriceOrder);
  };

  return (
    <div>
      <Button
        id="sort-button"
        aria-controls={open ? "sort-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Sort products
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "sort-button",
        }}
      >
        <Stack px={3} py={1}>
          <FormControl>
            <FormLabel
              id="price-sort-radio-button"
              sx={{ fontWeight: "fontWeightBold" }}
              focused
            >
              Price order
            </FormLabel>
            <RadioGroup
              aria-labelledby="price-sort-radio-button"
              name="price-sort-radio-buttons-group"
              value={priceOrder}
              onChange={handleChange}
            >
              <FormControlLabel
                value="asc"
                control={<Radio />}
                label="Price ASC (1, 2 ,3)"
              />
              <FormControlLabel
                value="desc"
                control={<Radio />}
                label="Price DESC (3, 2, 1)"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Menu>
    </div>
  );
};

export default ProductSorter;
