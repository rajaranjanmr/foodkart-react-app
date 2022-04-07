import axios from "axios";
import { apiCall } from "./apiCall";
import { encodedToken } from "../context/product-page-context";

function getCartItem() {}
const addToCart = async (item, setCart) => {
    const response = await apiCall("POST", "/api/user/cart", encodedToken, item);
  setCart(response.data.cart);
  console.log(response.data.cart);
};

const removeFromCart = async (item, setCart) => {
  const response = await apiCall(
    "DELETE",
    `/api/user/cart/${item._id}`,
    encodedToken,
    item
  );
  console.log(response);
  setCart(response.data.cart); 
};

const incrementItemCart = async (id, setCart) => {
  const response = await axios({
    method: 'post',
    url: `/api/user/cart/${id}`,
    headers: { authorization: encodedToken },
    data: {
      action:{
        type:'increment'
      }
    },
    
  });
    
  console.log('from incre',response)
  setCart(response.data.cart);
};
const decrementItemCart = async (id, setCart) => {
  const response = await axios({
    method: 'post',
    url: `/api/user/cart/${id}`,
    headers: { authorization: encodedToken },
    data: {
      action:{
        type:'decrement'
      }
    },
    
  });
    
  console.log('from incre',response)
  setCart(response.data.cart);;
};

export { removeFromCart, incrementItemCart, decrementItemCart, addToCart };
