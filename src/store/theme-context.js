import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
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
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: { main: red[700] },
            }
          : {
              // palette values for dark mode
              primary: { main: red[700] },
            }),
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
