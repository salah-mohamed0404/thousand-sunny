import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Stack, Typography } from "@mui/material";
import axios from "axios";

const Categories = ({ maxHeight = 430 }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  return (
    <Stack border="1px solid" borderColor="text.secondary">
      <Typography
        variant="h5"
        color="whitesmoke"
        bgcolor="text.secondary"
        p={1}
        textAlign="center"
      >
        Categories
      </Typography>
      <Stack
        spacing={2}
        divider={<Divider flexItem />}
        maxHeight={maxHeight}
        p={2}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": { width: 10 },
          "&::-webkit-scrollbar-track": { bgcolor: "lightgray" },
          "&::-webkit-scrollbar-thumb": { bgcolor: "grey" },
        }}
      >
        {categories.map((category) => (
          <Link to={`/products?category=${category}`} key={category}>
            <Typography px={1} textTransform="capitalize">
              {category.replace("-", " ")}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Categories;
