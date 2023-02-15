import { Container, Stack } from "@mui/material";
import Loading from "../Loading";
import ProductFilter from "./ProductFilter";
import ProductsList from "../ProductList";
import ProductSorter from "./ProductSorter";
import { memo, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts, fetchProductsByCategory } from "../../api/ProductsAPI";
import CustomizationsContainer from "./CustomizationsContainer";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = {
    priceRange: searchParams.get("price"),
    category: searchParams.get("category"),
    priceOrder: searchParams.get("priceOrder"),
  };

  /********** Filter products based on price range**********/
  const handlePriceRange = useCallback(
    (products) => {
      if (!params.priceRange) return products;

      const priceRange = params.priceRange
        .split(",")
        .map((item) => parseInt(item));

      return products.map((product) => {
        let { discountPercentage: discount, price } = product;

        if (discount) price = price * ((100 - discount) / 100);
        if (price >= priceRange[0] && price <= priceRange[1]) {
          product.hide = true;
        } else product.hide = false;

        return product;
      });
    },
    [params.priceRange]
  );

  /********** Sort products based on price **********/
  const handleSort = useCallback(
    (products) => {
      const order = params.priceOrder;
      if (!order) return products;

      if (order === "asc") {
        return products.sort((a, b) => a.price - b.price);
      } else if (order === "desc") {
        return products.sort((a, b) => b.price - a.price);
      }
    },
    [params.priceOrder]
  );

  /********** Fetch products and filter them **********/
  const getProducts = useCallback(
    async (category) => {
      setLoading(true);

      let products = !category
        ? await fetchProducts()
        : await fetchProductsByCategory(category);

      products = handlePriceRange(products);
      products = handleSort(products);

      setProducts(products);
      setLoading(false);
    },
    [handlePriceRange, handleSort]
  );

  /********** Handle fetch products and filters *********/
  useEffect(() => {
    getProducts(params.category);
  }, [getProducts, params.category]);

  const updateSearchParams = useCallback(
    (key, value) => {
      setSearchParams((prev) => {
        prev.set(key, value);
        return prev;
      });
    },
    [setSearchParams]
  );

  return (
    <Container component="section">
      <Stack spacing={3}>
        <CustomizationsContainer>
          <ProductFilter
            updateSearchParams={updateSearchParams}
            priceRangePararm={params.priceRange}
          />
          <ProductSorter
            updateSearchParams={updateSearchParams}
            priceOrderParam={params.priceOrder}
          />
        </CustomizationsContainer>

        {!loading ? (
          <ProductsList
            products={products}
            breakpoints={{ xs: 11, sm: 5, md: 3 }}
            col={12.75}
          />
        ) : (
          <div>
            <Loading
              containerProps={{ my: 10 }}
              progressProps={{ size: 130 }}
            />
          </div>
        )}
      </Stack>
    </Container>
  );
};

export default memo(ProductSection);
