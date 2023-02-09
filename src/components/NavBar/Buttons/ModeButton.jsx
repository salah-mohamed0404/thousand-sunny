import { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import ThemeContext from "../../../store/theme-context";

const ModeButton = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
      <IconButton onClick={toggleMode} color="inherit">
        {mode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ModeButton;
