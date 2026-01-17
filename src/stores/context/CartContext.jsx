import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtocart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const removefromcart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addtocart, removefromcart }}>
      {children}
    </CartContext.Provider>
  );
};

export const usecart = () => {
  return useContext(CartContext);
};

