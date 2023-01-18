import NavBar from "./components/NavBar";
import Routes from "./Routes";
import Footer from "./components/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "./store/theme-context";

function App() {
  const { theme, mode } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      {mode === "dark" && <CssBaseline />}
      <NavBar />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
