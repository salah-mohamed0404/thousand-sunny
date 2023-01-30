const { createContext, useState, useEffect, useCallback } = require("react");

const CartContext = createContext({
  cartProductIds: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [productIds, setProductIds] = useState([]);
  const localStorageRecordName = "1000sunny-cart";

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(localStorageRecordName));

    if (storedCart) setProductIds(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageRecordName, JSON.stringify(productIds));
  }, [productIds]);

  const addToCart = useCallback((productId) => {
    setProductIds((prevProductIds) => [...prevProductIds, productId]);
  }, []);

  const removeFromCart = useCallback((productId) => {
    setProductIds((prevProductIds) =>
      prevProductIds.filter((prevProductId) => prevProductId !== productId)
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProductIds: productIds,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
