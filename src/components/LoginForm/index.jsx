import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import AuthContext from "../../store/Auth-context";
import FormButtons from "./FormButtons";
import RememberMeCheckBox from "./RememberMeCheckBox";
import LoginFormContainer from "./LoginFormContainer";

const testusername = "atuny0";
const userNameDefaultHelperText = `Enter your username😊, Test with ${testusername}`;
const testPassword = "9uQFF1Lh";
const passwordDefaultHelperText = `Enter your password😊, Test with ${testPassword}`;

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userNameHelperText, setUserNameHelperText] = useState(
    userNameDefaultHelperText
  );
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState(
    passwordDefaultHelperText
  );
  const [rememberMe, setRememberMe] = useState(true);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName === "") {
      setUserNameError(true);
      setUserNameHelperText(
        `Enter your username, Please😡. Or test with ${testusername}`
      );
      return;
    }

    if (password === "") {
      setPasswordError(true);
      setPasswordHelperText(
        `Enter your password, Please😡, Or test with ${testPassword}`
      );
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: userName,
        password,
      });

      login(res.data, rememberMe);
    } catch (e) {
      setSubmitError(
        "The username or password are wrong sorry😓 try to remember the correct one🤩"
      );
      setLoading(false);
    }
  };

  return (
    <LoginFormContainer handleSubmit={handleSubmit}>
      <TextField
        label="User Name"
        value={userName}
        error={userNameError}
        helperText={userNameHelperText}
        onChange={(e) => setUserName(e.target.value.toLowerCase().trim())}
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        error={passwordError}
        helperText={passwordHelperText}
        onChange={(e) => setPassword(e.target.value.trim())}
        fullWidth
      />

      <RememberMeCheckBox
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
      />

      <FormButtons loading={loading} submitError={submitError} />
    </LoginFormContainer>
  );
};

export default LoginForm;
