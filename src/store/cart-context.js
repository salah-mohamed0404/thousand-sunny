const { createContext, useState, useEffect, useCallback } = require("react");

const CartContext = createContext({
  cartProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const localStorageRecordName = "1000sunny-cart";

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(localStorageRecordName));

    if (storedCart) setProducts(storedCart);
  }, []);

  const addToCart = useCallback((product) => {
    setProducts((prevProducts) => {
      product.quantity = 1;
      const updatedProducts = [...prevProducts, product];

      localStorage.setItem(
        localStorageRecordName,
        JSON.stringify(updatedProducts)
      );

      return updatedProducts;
    });
  }, []);

  const changeQuantity = useCallback((productId, newQuantity) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((prevProduct) => {
        if (prevProduct.id === productId)
          return { ...prevProduct, quantity: newQuantity };

        return prevProduct;
      });

      localStorage.setItem(
        localStorageRecordName,
        JSON.stringify(updatedProducts)
      );

      return updatedProducts;
    });
  }, []);

  const removeFromCart = useCallback((product) => {
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
    <CartContext.Provider
      value={{
        cartProducts: products,
        addToCart,
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
