import { useContext, useState } from "react";
import axios from "axios";
import EmailTextField from "./EmailTextField";
import FormButtons from "./FormButtons";
import GenderSelect from "./GenderSelect";
import PasswordTextField from "./PasswordTextField";
import SignUpFormContainer from "./SignUpFormContainer";
import AuthContext from "../../store/Auth-context";
import RowContainer from "./RowContainer";
import FNameTextField from "./FNameTextField";
import LNameTextField from "./LNameTextField";
import UserNameTextField from "./UserNameTextField";
import {
  passwordDefaultHelperText,
  emailDefaultHelperText,
  defaultErrorMessage,
} from "../../utilities/formUtilities";

const SignUpForm = () => {
  const [fName, setFName] = useState("");
  const [fNameError, setFNameError] = useState(false);
  const [lName, setLName] = useState("");
  const [lNameError, setLNameError] = useState(false);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState(
    passwordDefaultHelperText
  );
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState(
    emailDefaultHelperText
  );
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fName === "") {
      setFNameError(true);
      return;
    }

    if (lName === "") {
      setLNameError(true);
      return;
    }

    if (gender === "") {
      setGenderError(true);
      return;
    }

    if (userName === "") {
      setUserNameError(true);
      return;
    }

    if (password === "") {
      setPasswordError(true);
      setPasswordHelperText(defaultErrorMessage("password"));
      return;
    }

    if (email === "") {
      setEmailError(true);
      setEmailHelperText(defaultErrorMessage("email"));
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("https://dummyjson.com/users/add", {
        firstName: fName,
        lastName: lName,
        gender,
        username: userName,
        password,
        email,
      });

      login(res.data, true);
    } catch (e) {
      setSubmitError("Sign up fails. We are so sorry😥, Please try again");
      setLoading(false);
    }
  };
  return (
    <SignUpFormContainer handleSubmit={handleSubmit}>
      <RowContainer>
        <FNameTextField
          fName={fName}
          setFName={setFName}
          fNameError={fNameError}
          setFNameError={setFNameError}
        />
        <LNameTextField
          lName={lName}
          setLName={setLName}
          lNameError={lNameError}
          setLNameError={setLNameError}
        />
        <GenderSelect
          gender={gender}
          setGender={setGender}
          genderError={genderError}
          setGenderError={setGenderError}
        />
      </RowContainer>

      <RowContainer>
        <UserNameTextField
          userName={userName}
          setUserName={setUserName}
          userNameError={userNameError}
          setUserNameError={setUserNameError}
        />
        <PasswordTextField
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          passwordHelperText={passwordHelperText}
          setPasswordHelperText={setPasswordHelperText}
        />
      </RowContainer>

      <EmailTextField
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        setEmailError={setEmailError}
        emailHelperText={emailHelperText}
        setEmailHelperText={setEmailHelperText}
      />

      <FormButtons loading={loading} submitError={submitError} />
    </SignUpFormContainer>
  );
};

export default SignUpForm;
