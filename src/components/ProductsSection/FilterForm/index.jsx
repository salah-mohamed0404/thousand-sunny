import { Grid } from "@mui/material";
import { useState } from "react";
import CategoryAccordion from "./CategoryAccordion";
import PriceSlider from "./PriceSlider";

const FilterForm = ({
  categories,
  priceRange,
  setPriceRange,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panal) => (e, newExpanded) => {
    setExpanded(newExpanded ? panal : false);
  };

  return (
    <Grid container mt={3} columnGap={4} rowGap={6} alignItems="center">
      <CategoryAccordion
        handleExpand={handleExpand}
        expanded={expanded}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
    </Grid>
  );
};

export default FilterForm;
