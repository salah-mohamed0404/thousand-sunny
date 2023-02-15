import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Title from "./Title";
import CategoryContainer from "./CategoryContainer";
import Category from "./Category";
import { fetchCategories } from "../../api/ProductsAPI";

const Categories = ({ maxHeight = 430 }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesRes = await fetchCategories();
      setCategories(categoriesRes);
    };
    getCategories();
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
