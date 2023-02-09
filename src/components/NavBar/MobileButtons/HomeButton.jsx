import { Home } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";

const HomeButton = (props) => {
  return (
    <BottomNavigationAction
      {...props}
      label="Home"
      icon={<Home fontSize="small" />}
      LinkComponent={Link}
      to="/"
    />
  );
};

export default HomeButton;
