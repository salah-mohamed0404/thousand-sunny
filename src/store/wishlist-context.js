import { createContext, useCallback, useEffect, useState } from "react";

const WishlistContext = createContext({
  wishlistProductIds: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

export const WishlistContextProvider = ({ children }) => {
  const [productIds, setProductIds] = useState([]);
  const localStorageRecordName = "1000sunnt-wishlist";

  useEffect(() => {
    const storedWishlist = JSON.parse(
      localStorage.getItem(localStorageRecordName)
    );

    if (storedWishlist) setProductIds(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageRecordName, JSON.stringify(productIds));
  }, [productIds]);

  const addToWishlist = useCallback((productId) => {
    setProductIds((prevProductIds) => [...prevProductIds, productId]);
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setProductIds((prevProductIds) =>
      prevProductIds.filter((prevProductId) => prevProductId !== productId)
    );
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistProductIds: productIds,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
