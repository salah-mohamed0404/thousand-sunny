import { useCallback, useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Avatar, InputAdornment, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import ThemeContext from "../store/theme-context";
import { red } from "@mui/material/colors";

function LiveSearch() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchRes, setSearchRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const { mode } = useContext(ThemeContext);

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

  const handleSearchRes = useCallback((selectedValue) => {
    setSearchRes(selectedValue);

    // Navigate to the product page
  }, []);

  return (
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
          InputLabelProps={{
            style: {
              color: mode === "dark" ? "text.primary" : red[50],
            },
            focus: {
              color: mode === "dark" ? "primary.main" : red[100],
            },
          }}
          InputProps={{
            ...params.InputProps,
            style: {
              color: mode === "dark" ? "text.primary" : red[50],
            },
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: open
                        ? mode === "dark"
                          ? "primary.main"
                          : red[100]
                        : mode === "dark"
                        ? "inherit"
                        : red[50],
                    }}
                  />
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
      noOptionsText="NO AVAILABLE PRODUCTS😥"
    />
  );
}

export default LiveSearch;
