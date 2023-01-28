export const defaultErrorMessage = (field) => `Enter the ${field}, Please😑.`;

/********* Email field utility *********/
export const emailDefaultHelperText = "Example: test@gmail.com";

export const isEmailVaild = (email) => /\S+@\S+\.\S+/.test(email);

export const handleEmail = (email) => {
  if (!isEmailVaild(email))
    return {
      error: true,
      helperText: `Enter a vaild email, Please😑. ${emailDefaultHelperText}`,
    };
  else
    return {
      error: false,
      helperText: emailDefaultHelperText,
    };
};

/********* Password field utility *********/
const passwordRegularExpression = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
);
export const passwordDefaultHelperText =
  "It must cotain numbers, lower and upper case letter and 8 length.";

export const isPasswordVaild = (password) =>
  passwordRegularExpression.test(password);

export const handlePassword = (password) => {
  if (!isPasswordVaild(password))
    return {
      error: true,
      helperText: `Enter your password, Please😑. ${passwordDefaultHelperText}`,
    };
  else
    return {
      error: false,
      helperText: passwordDefaultHelperText,
    };
};
