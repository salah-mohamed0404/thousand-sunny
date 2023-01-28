import { useEffect, useState } from "react";
import axios from "axios";
import HomeProductsLoading from "./HomeProductsLoading";
import ProductsList from "../ProductList";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://dummyjson.com/products?limit=6&select=id,title,rating,price,discountPercentage"
      );
      setProducts(res.data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return !loading ? (
    <ProductsList products={products} breakpoints={{ xs: 5, md: 3.75 }} />
  ) : (
    <HomeProductsLoading />
  );
};

export default FeaturedProducts;
