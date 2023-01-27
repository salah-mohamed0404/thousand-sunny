import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { createContext, useCallback, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: null,
  mode: "",
  setMode: () => {},
  getDesignTokens: () => {},
  toggleMode: () => {},
});

export const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState("dark");

  const getDesignTokens = useCallback(
    (mode) => ({
      palette: {
        mode,
        primary: { main: red[900] },
        background: { paper: mode === "light" ? grey[200] : grey[900] },
      },
    }),
    []
  );

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode, getDesignTokens]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        getDesignTokens,
        toggleMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
