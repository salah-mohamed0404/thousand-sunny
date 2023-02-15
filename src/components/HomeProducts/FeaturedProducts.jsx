import { useEffect, useState } from "react";
import HomeProductList from "./HomeProductList";
import { fetchProducts } from "../../api/ProductsAPI";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const productRes = await fetchProducts(0, 6, [
        "id",
        "title",
        "rating",
        "price",
        "discountPercentage",
      ]);

      setProducts(productRes);
      setLoading(false);
    };
    getProducts();
  }, []);

  return <HomeProductList loading={loading} products={products} />;
};

export default FeaturedProducts;
