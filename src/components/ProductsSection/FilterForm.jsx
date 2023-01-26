import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";

const FilterForm = ({ categories }) => {
  const [expanded, setExpanded] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const handleExpand = (panal) => (e, newExpanded) => {
    setExpanded(newExpanded ? panal : false);
  };

  return (
    <Grid container mt={3} columnGap={4} rowGap={6} alignItems="center">
      <Grid
        item
        component={Accordion}
        expanded={expanded === "panal1"}
        onChange={handleExpand("panal1")}
      >
        <AccordionSummary>
          Categories
          <ExpandMore
            sx={{ rotate: expanded === "panal1" ? "180deg" : 0, ml: "auto" }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              maxHeight: 300,
              overflowY: "scroll",
              "&::-webkit-scrollbar": { width: 7 },
              "&::-webkit-scrollbar-track": { bgcolor: "lightgray" },
              "&::-webkit-scrollbar-thumb": { bgcolor: "grey" },
            }}
          >
            <FormGroup>
              {categories.map((category) => {
                const modCategory = category.replace("-", " ");
                return (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={modCategory}
                  />
                );
              })}
            </FormGroup>
          </Box>
        </AccordionDetails>
      </Grid>
      <Grid item>
        <Box maxWidth={300}>
          <Typography variant="h6" gutterBottom>
            Select a price range
          </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={0}
            max={2000}
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `$ ${value}`}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FilterForm;
