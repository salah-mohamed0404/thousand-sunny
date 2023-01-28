import axios from "axios";
import { useEffect, useState } from "react";
import HomeProductsLoading from "./HomeProductsLoading";
import ProductsList from "../ProductList";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://dummyjson.com/products?limit=12&skip=6&select=id,title,rating,price,discountPercentage"
      );
      setProducts(res.data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return !loading ? (
    <ProductsList products={products} breakpoints={{ sx: 5, md: 3.75 }} />
  ) : (
    <HomeProductsLoading />
  );
};

export default LatestProducts;
