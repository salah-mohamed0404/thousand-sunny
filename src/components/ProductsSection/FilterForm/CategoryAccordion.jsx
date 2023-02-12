import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

const CategoryAccordion = ({
  expanded,
  handleExpand,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Grid
      item
      component={Accordion}
      expanded={expanded === "panal1"}
      onChange={handleExpand("panal1")}
    >
      <AccordionSummary id="category-select">
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
            <RadioGroup
              aria-labelledby="category-select"
              name="category-radio-group"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => {
                const modCategory = category.replace("-", " ");
                return (
                  <FormControlLabel
                    key={modCategory}
                    value={category}
                    control={<Radio />}
                    label={modCategory}
                  />
                );
              })}
            </RadioGroup>
          </FormGroup>
        </Box>
      </AccordionDetails>
    </Grid>
  );
};

export default CategoryAccordion;
