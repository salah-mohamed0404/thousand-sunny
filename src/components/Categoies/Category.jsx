import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <Link to={`/products?category=${category}`} key={category}>
      <Typography px={1} textTransform="capitalize">
        {category.replace("-", " ")}
      </Typography>
    </Link>
  );
};

export default Category;
