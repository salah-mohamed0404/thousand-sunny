const { createContext, useState, useEffect, useCallback } = require("react");

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

  const addToCart = useCallback(
    (product) => {
      const newProducts = [...products, product];
      localStorage.setItem(localStorageRecordName, JSON.stringify(newProducts));

      setProducts((prevProducts) => [...prevProducts, product]);
    },
    [products]
  );

  const removeFromCart = useCallback(
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
