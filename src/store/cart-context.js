const { createContext, useState, useEffect } = require("react");

const CartContext = createContext({
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const localStorageRecordName = "1000sunny-cart";

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(localStorageRecordName));

    if (storedCart) setProducts(storedCart);
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
    <CartContext.Provider
      value={{
        cartProducts: products,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
