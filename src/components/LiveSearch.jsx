import { useCallback, useEffect, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import {
  Avatar,
  createTheme,
  InputAdornment,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";

function LiveSearch() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchRes, setSearchRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: { main: "#fff" },
        },
      }),
    []
  );

  const fetchProducts = useCallback(async (searchTerm = "") => {
    setLoading(true);
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${searchTerm}&limit=5`
    );
    setOptions(res.data.products);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    open ? fetchProducts() : setOptions([]);
  }, [open, fetchProducts]);

  const handleSearchRes = (selectedValue) => {
    setSearchRes(selectedValue);

    // Navigate to the product page
  };

  // Rendering our parameters on the DOM
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="live-search"
        options={options}
        value={searchRes}
        loading={loading}
        open={open}
        sx={{ width: 300 }}
        freeSolo
        autoComplete
        openOnFocus
        disableClearable
        disableListWrap
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={(e, newValue) => handleSearchRes(newValue)}
        onInputChange={(e, newInputValue, reason) => {
          if (reason === "input") fetchProducts(newInputValue);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => (option.title ? option.title : option)}
        // clearIcon={<clearIcon size="small" color="red" />}
        renderOption={(props, option) => (
          <Stack
            component="li"
            direction="row"
            spacing={2}
            flexWrap="nowrap"
            {...props}
          >
            <Avatar variant="circular" src={option.images[0]} />
            <Typography flexGrow={1}>{option.title}</Typography>
          </Stack>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                </>
              ),
            }}
          />
        )}
        noOptionsText="NO AVAILABLE PRODUCTS😥"
      />
    </ThemeProvider>
  );
}

export default LiveSearch;
