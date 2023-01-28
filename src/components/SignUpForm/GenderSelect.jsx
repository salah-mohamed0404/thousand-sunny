import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const GenderSelect = ({ gender, setGender, genderError, setGenderError }) => {
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const handleBlur = () => {
    setGenderError(false);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="gender">Gender</InputLabel>
      <Select
        labelId="gender"
        id="demo-simple-select-helper"
        value={gender}
        error={genderError}
        label="Gender"
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
      <FormHelperText sx={{ color: "error.main" }}>
        {genderError ? "Choose your gender, Please😡" : ""}
      </FormHelperText>
    </FormControl>
  );
};

export default GenderSelect;
