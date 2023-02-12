import axios from "axios";

export const API_URL = "https://dummyjson.com/products";

const fetch = async (url) => {
  const res = await axios.get(url);

  return res.data.products;
};

export const fetchProducts = async (page = 0, limit = 30) => {
  const skip = page * limit;
  const url = `${API_URL}?limit=${limit}&skip=${skip}`;
  const products = await fetch(url);

  return products;
};

export const fetchProductsByCategory = async (
  category,
  page = 0,
  limit = 30
) => {
  const skip = page * limit;
  const url = `${API_URL}/category/${category}?limit=${limit}&skip=${skip}`;
  const products = await fetch(url);

  return products;
};
