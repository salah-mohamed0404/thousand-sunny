import { useEffect, useState } from "react";
import axios from "axios";
import HomeProductList from "./HomeProductList";

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

  return <HomeProductList loading={loading} products={products} />;
};

export default FeaturedProducts;
