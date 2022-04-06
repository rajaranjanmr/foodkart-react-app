import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);

const productPageReducer = (productPageState, action) => {
  switch(action.type) {
    case 'CATEGORY_NAME':
      return {...productPageState, categoryName: action.payload}
  }
}

const ProductContextProvider = ({ children }) => {
  const [productPageState, productPageDispatch] = useReducer(
    productPageReducer,
    {
      categoryName: ''      
    }
  );

  const value = {
    productPageState,
    productPageDispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { useProductContext, ProductContextProvider };