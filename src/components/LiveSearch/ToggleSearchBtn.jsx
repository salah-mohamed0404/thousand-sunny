import { Minimize, Search } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { red } from "@mui/material/colors";

const ToggleSearchBtn = ({ openSearch, toggleSearch, focus, mode }) => {
  return (
    <Tooltip title={`${openSearch ? "Minimize Search" : "Open Search"}`}>
      <IconButton
        color="inherit"
        onClick={toggleSearch}
        sx={{
          position: "absolute",
          right: "0%",
          top: "50%",
          translate: "0 -50%",
        }}
      >
        {!openSearch ? (
          <Search color="inherit" />
        ) : (
          <Minimize
            color="inherit"
            sx={{
              color: focus
                ? mode === "dark"
                  ? "primary.main"
                  : red[100]
                : mode === "dark"
                ? "inherit"
                : red[50],
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleSearchBtn;
