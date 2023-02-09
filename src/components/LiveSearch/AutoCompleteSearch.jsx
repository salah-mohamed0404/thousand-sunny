import { useCallback, useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import axios from "axios";
import OptionItem from "./OptionItem";
import SearchTextField from "./SearchTextField";

const AutoCompleteSearch = ({
  searchRes,
  handleSearchRes,
  openSearch,
  handleFocus,
  handleBlur,
  mode,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async (searchTerm = "") => {
    setLoading(true);
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${searchTerm}&limit=5&select=id,title,images`
    );
    setOptions(res.data.products);
    setLoading(false);
  }, []);

  useEffect(() => {
    open ? fetchProducts() : setOptions([]);
  }, [open, fetchProducts]);

  return (
    <Autocomplete
      id="live-search"
      options={options}
      value={searchRes}
      loading={loading}
      open={open}
      sx={{
        MaxWidth: 300,
        scale: openSearch ? 1 : 0,
        transition: "scale 0.3s",
        py: 2,
      }}
      freeSolo
      fullWidth
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(e, newValue) => handleSearchRes(newValue)}
      onInputChange={(e, newInputValue, reason) => {
        if (reason === "input") fetchProducts(newInputValue);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => (option.title ? option.title : option)}
      renderOption={(props, option) => (
        <OptionItem props={props} option={option} key={option.id} />
      )}
      renderInput={(params) => (
        <SearchTextField params={params} mode={mode} loading={loading} />
      )}
      noOptionsText="NO AVAILABLE PRODUCTS😥"
    />
  );
};

export default AutoCompleteSearch;
