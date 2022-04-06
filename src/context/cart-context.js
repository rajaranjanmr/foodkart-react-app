import { createContext, useContext, useReducer, useState } from "react";
const CartContext = createContext(null);

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
const useCart = () => useContext(CartContext);
export { CartContext, CartContextProvider, useCart };
