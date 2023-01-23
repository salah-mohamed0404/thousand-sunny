import { useCallback, useContext, useState } from "react";
import { Box } from "@mui/material";
import ThemeContext from "../../store/theme-context";
import ToggleSearchBtn from "./ToggleSearchBtn";
import AutoCompleteSearch from "./AutoCompleteSearch";

function LiveSearch() {
  const [focus, setFocus] = useState(false);
  const [searchRes, setSearchRes] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);
  const { mode } = useContext(ThemeContext);

  const toggleSearch = useCallback(() => {
    setOpenSearch((prevState) => !prevState);
  }, []);

  const handleSearchRes = useCallback((selectedValue) => {
    setSearchRes(selectedValue);

    // Navigate to the product page
  }, []);

  return (
    <Box position="relative">
      <AutoCompleteSearch
        openSearch={openSearch}
        searchRes={searchRes}
        handleSearchRes={handleSearchRes}
        handleFocus={() => setFocus(true)}
        handleBlur={() => setFocus(false)}
        mode={mode}
      />

      <ToggleSearchBtn
        openSearch={openSearch}
        toggleSearch={toggleSearch}
        focus={focus}
        mode={mode}
      />
    </Box>
  );
}

export default LiveSearch;
