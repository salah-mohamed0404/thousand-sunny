import { TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import Loading from "../Loading";

const SearchTextField = ({ params, mode, loading }) => {
  return (
    <TextField
      {...params}
      sx={{
        ".MuiInput-root::before": {
          borderColor: mode === "dark" ? "text.primary" : red[50],
        },
        ".MuiInput-root:hover::before": {
          borderColor: `${
            mode === "dark" ? "text.primary" : red[50]
          } !important`,
        },
      }}
      variant="standard"
      label="Search"
      InputLabelProps={{
        style: {
          color: mode === "dark" ? "text.primary" : red[50],
        },
        focus: {
          color: mode === "dark" ? "primary.main" : red[100],
        },
      }}
      InputProps={{
        ...params.InputProps,
        style: {
          color: mode === "dark" ? "text.primary" : red[50],
        },
        endAdornment: loading && (
          <Loading
            progressProps={{ color: "inherit", size: 21 }}
            containerProps={{ mr: 6, color: "inherit" }}
          />
        ),
      }}
    />
  );
};

export default SearchTextField;
