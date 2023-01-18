import { useContext } from "react";
// eslint-disable-next-line
import { Stack, Avatar, Button, IconButton } from "@mui/material";
import {
  LightMode,
  // eslint-disable-next-line
  PersonIcon,
  FavoriteBorder,
  LocalMall,
  DarkMode,
} from "@mui/icons-material";
import ThemeContext from "../../store/theme-context";

const NavButtons = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  // const fetchCategories = useCallback(
  //   async () => await axios.get("https://dummyjson.com/products/categories"),
  //   []
  // );

  // useEffect(() => {
  //   fetchCategories().then((res) => setCategories(res.data));
  // }, [fetchCategories]);

  return (
    <Stack direction="row" spacing={4}>
      {/* <Link to="/user-profile">
        <Avatar>
          <PersonIcon />
        </Avatar>
      </Link> */}
      <Button variant="text" color="inherit">
        Sign in
      </Button>
      <Button variant="text" endIcon={<FavoriteBorder />} color="inherit">
        WishList
      </Button>
      <Button variant="text" endIcon={<LocalMall />} color="inherit">
        Cart
      </Button>
      <IconButton onClick={toggleMode} color="inherit">
        {mode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Stack>
  );
};

export default NavButtons;
