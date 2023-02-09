import { memo, useCallback, useContext, useState } from "react";
import { Box } from "@mui/material";
import ThemeContext from "../../store/theme-context";
import ToggleSearchBtn from "./ToggleSearchBtn";
import AutoCompleteSearch from "./AutoCompleteSearch";
import { useNavigate } from "react-router-dom";

function LiveSearch({ expanded = false }) {
  const [focus, setFocus] = useState(false);
  const [searchRes, setSearchRes] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);
  const { mode } = useContext(ThemeContext);
  const nav = useNavigate();

  const toggleSearch = useCallback(() => {
    setOpenSearch((prevState) => !prevState);
  }, []);

  const handleSearchRes = useCallback(
    (selectedValue) => {
      setSearchRes(selectedValue);

      if (selectedValue.id) nav(`/products/${selectedValue.id}`);
      else nav(`products?search=${selectedValue}`);
    },
    [nav]
  );

  return (
    <Box position="relative">
      <AutoCompleteSearch
        openSearch={!expanded ? openSearch : expanded}
        searchRes={searchRes}
        handleSearchRes={handleSearchRes}
        handleFocus={() => setFocus(true)}
        handleBlur={() => setFocus(false)}
        mode={mode}
      />

      {!expanded && (
        <ToggleSearchBtn
          openSearch={openSearch}
          toggleSearch={toggleSearch}
          focus={focus}
          mode={mode}
        />
      )}
    </Box>
  );
}

export default memo(LiveSearch);
