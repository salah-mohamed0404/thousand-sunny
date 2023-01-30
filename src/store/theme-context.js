import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext({
  theme: null,
  mode: "",
  setMode: () => {},
  getDesignTokens: () => {},
  toggleMode: () => {},
  isDesktop: false,
});

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [isDesktop, setDesktop] = useState(false);
  const modeStorageField = "1000sunnyDarkmode";

  useEffect(() => {
    const storedMode = localStorage.getItem(modeStorageField);
    if (storedMode) setMode(storedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem(modeStorageField, mode);
  }, [mode]);

  const getDesignTokens = useCallback(
    (mode) => ({
      palette: {
        mode,
        primary: { main: red[900] },
        background: { paper: mode === "light" ? grey[100] : grey[900] },
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

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth >= 900) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    updateMedia();

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        getDesignTokens,
        toggleMode,
        isDesktop,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
