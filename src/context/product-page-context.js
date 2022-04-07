import { createContext, useContext, useReducer, useEffect } from "react";
import { apiCall } from "../utility/apiCall";

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);
export const encodedToken = localStorage.getItem("token");

const productPageReducer = (productPageState, action) => {
  switch (action.type) {
    case "CATEGORY_NAME":
      return { ...productPageState, categoryName: action.payload };
    case "LIST":
      return { ...productPageState, productList: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [productPageState, productPageDispatch] = useReducer(
    productPageReducer,
    {
      categoryName: "",
      productList: [],
    }
  ); 

  useEffect(() => {
    apiCall("GET", "/api/products")
      .then((response) => {
        productPageDispatch({ type: "LIST", payload: response.data.products });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM"
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
