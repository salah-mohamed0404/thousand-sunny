import { TextField } from "@mui/material";
import { defaultErrorMessage } from "../../utilities/formUtilities";

const FNameTextField = ({ fName, setFName, fNameError, setFNameError }) => {
  const handleChange = (e) => {
    setFName(e.target.value);
  };

  const handleBlur = () => {
    setFNameError(false);
  };

  return (
    <TextField
      label="First name"
      value={fName}
      error={fNameError}
      helperText={fNameError ? defaultErrorMessage("first name") : ""}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default FNameTextField;
