import { TextField } from "@mui/material";
import { defaultErrorMessage } from "../../utilities/formUtilities";

const LNameTextField = ({ lName, setLName, lNameError, setLNameError }) => {
  const handleChange = (e) => {
    setLName(e.target.value);
  };

  const handleBlur = () => {
    setLNameError(false);
  };

  return (
    <TextField
      label="Last name"
      value={lName}
      error={lNameError}
      helperText={lNameError ? defaultErrorMessage("last name") : ""}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default LNameTextField;
