import { Box, Grid, Slider, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const PriceSlider = ({ priceRange, setPriceRange }) => {
  return (
    <Grid item width={300}>
      <Box maxWidth={300} px={2}>
        <Typography variant="h6">Select a price range</Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            value={priceRange[0]}
            variant="standard"
            disabled
            sx={{ maxWidth: "4ch" }}
            inputProps={{
              style: { textAlign: "center" },
            }}
          />
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={0}
            max={2000}
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `$ ${value}`}
          />
          <TextField
            value={priceRange[1]}
            variant="standard"
            disabled
            sx={{ maxWidth: "4ch" }}
            inputProps={{
              style: { textAlign: "center" },
            }}
          />
        </Stack>
      </Box>
    </Grid>
  );
};

export default PriceSlider;
