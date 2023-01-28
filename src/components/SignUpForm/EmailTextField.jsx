import { TextField } from "@mui/material";
import { handleEmail } from "../../utilities/formUtilities";

const EmailTextField = ({
  email,
  setEmail,
  emailError,
  setEmailError,
  emailHelperText,
  setEmailHelperText,
}) => {
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = (e) => {
    const { error, helperText } = handleEmail(e.target.value);
    setEmailError(error);
    setEmailHelperText(helperText);
  };

  return (
    <TextField
      label="Email"
      value={email}
      error={emailError}
      helperText={emailHelperText}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default EmailTextField;
