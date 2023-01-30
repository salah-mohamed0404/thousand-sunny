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

  const addToWishlist = useCallback(
    (product) => {
      const newProducts = [...products, product];
      localStorage.setItem(localStorageRecordName, JSON.stringify(newProducts));

      setProducts((prevProducts) => [...prevProducts, product]);
    },
    [products]
  );

  const removeFromWishlist = useCallback(
    (product) => {
      const newProducts = products.filter(
        (prevProduct) => prevProduct.id !== product.id
      );
      localStorage.setItem(localStorageRecordName, JSON.stringify(newProducts));

      setProducts((prevProducts) =>
        prevProducts.filter((prevProduct) => prevProduct.id !== product.id)
      );
    },
    [products]
  );

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
