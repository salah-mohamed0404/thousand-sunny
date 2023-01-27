import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const RememberMeCheckBox = ({ rememberMe, setRememberMe }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            value={rememberMe}
            defaultChecked
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        }
        label="Remember me"
      />
    </FormGroup>
  );
};

export default RememberMeCheckBox;
