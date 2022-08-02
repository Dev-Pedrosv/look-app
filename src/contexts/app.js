import React, { createContext, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const DISCOUNT_PERCENTAGE = 0.1;
  const DELIVERY_TAX = 10;
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  const addToCard = (product) => {
    const existentIndex = cart?.findIndex(
      (productCard) => productCard.id === product.id
    );
    let oldCart = cart;
    if (existentIndex !== -1) {
      oldCart[existentIndex] = product;
    } else {
      oldCart.push(product);
    }

    setCart(oldCart);
  };

  const removeToCart = (productId) => {
    const filteredProducts = cart?.filter(
      (product) => product.id !== productId
    );
    setCart(filteredProducts);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCard,
        removeToCart,
        DISCOUNT_PERCENTAGE,
        DELIVERY_TAX,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
