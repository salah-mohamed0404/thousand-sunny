import { TextField } from "@mui/material";
import { defaultErrorMessage } from "../../utilities/formUtilities";

const UserNameTextField = ({
  userName,
  setUserName,
  userNameError,
  setUserNameError,
}) => {
  const handleChange = (e) => {
    setUserName(e.target.value.toLowerCase().trim());
  };

  const handleBlur = () => {
    setUserNameError(false);
  };

  return (
    <TextField
      label="Username"
      value={userName}
      error={userNameError}
      helperText={userNameError ? defaultErrorMessage("username") : ""}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default UserNameTextField;
