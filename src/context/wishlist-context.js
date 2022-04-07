import { createContext, useContext, useState } from "react";
const WishListContext = createContext(null);

function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
}
const useWishList = () => useContext(WishListContext);
export { WishListContextProvider, useWishList };
