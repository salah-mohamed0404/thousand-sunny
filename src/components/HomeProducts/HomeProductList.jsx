import ProductsList from "../ProductList";
import HomeProductsLoading from "./HomeProductsLoading";

const HomeProductList = ({ loading, products }) => {
  return !loading ? (
    <ProductsList
      products={products}
      breakpoints={{ xs: 11, sm: 5.75, md: 3.75 }}
    />
  ) : (
    <HomeProductsLoading />
  );
};

export default HomeProductList;
