import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import axios from "axios";
import Title from "./Title";
import CategoryContainer from "./CategoryContainer";
import Category from "./Category";

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
      <Title />

      <CategoryContainer maxHeight={maxHeight}>
        {categories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </CategoryContainer>
    </Stack>
  );
};

export default Categories;
