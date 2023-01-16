import { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Avatar, InputAdornment, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

function LiveSearch() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchRes, setSearchRes] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(searchRes);

  const fetchProducts = useCallback(async (searchTerm = "") => {
    setLoading(true);
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${searchTerm}`
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
    <Autocomplete
      id="live-search"
      freeSolo
      value={searchRes}
      onChange={(e, newValue) => handleSearchRes(newValue)}
      onInputChange={(event, newInputValue) => {
        fetchProducts(newInputValue);
      }}
      sx={{ width: 300 }}
      disableClearable
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => (option.title ? option.title : option)}
      options={options}
      loading={loading}
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
  );
}

export default LiveSearch;
