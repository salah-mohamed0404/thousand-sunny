import { TextField } from "@mui/material";
import { handlePassword } from "../../utilities/formUtilities";

const PasswordTextField = ({
  password,
  setPassword,
  passwordError,
  setPasswordError,
  passwordHelperText,
  setPasswordHelperText,
}) => {
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBlur = (e) => {
    const { error, helperText } = handlePassword(e.target.value);
    setPasswordError(error);
    setPasswordHelperText(helperText);
  };

  return (
    <TextField
      label="Password"
      type="password"
      value={password}
      error={passwordError}
      helperText={passwordHelperText}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default PasswordTextField;
