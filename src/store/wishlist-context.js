import { createContext, useCallback, useEffect, useState } from "react";

const WishlistContext = createContext({
  wishlistProducts: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

export const WishlistContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const localStorageRecordName = "1000sunnt-wishlist";

  useEffect(() => {
    const storedWishlist = JSON.parse(
      localStorage.getItem(localStorageRecordName)
    );

    if (storedWishlist) setProducts(storedWishlist);
  }, []);

  const addToWishlist = useCallback((product) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];

      localStorage.setItem(
        localStorageRecordName,
        JSON.stringify(updatedProducts)
      );

      return updatedProducts;
    });
  }, []);

  const removeFromWishlist = useCallback((product) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (prevProduct) => prevProduct.id !== product.id
      );

      localStorage.setItem(
        localStorageRecordName,
        JSON.stringify(updatedProducts)
      );
      return updatedProducts;
    });
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistProducts: products,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
