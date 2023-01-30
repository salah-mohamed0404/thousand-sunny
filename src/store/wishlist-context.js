import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext({
  WishlistProducts: [],
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

  useEffect(() => {
    localStorage.setItem(localStorageRecordName, JSON.stringify(products));
  }, [products]);

  const addToCart = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistProducts: products,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
