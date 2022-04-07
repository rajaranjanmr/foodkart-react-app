import axios from "axios";
import { apiCall } from "./apiCall";
import { encodedToken } from "../context/product-page-context";

const addToWishList = async (item, setWishList) => {
  const response = await apiCall(
    "POST",
    "/api/user/wishlist",
    encodedToken,
    item
  );
  setWishList(response.data.wishlist);
};
const removeFromWishList = async (item, setWishList) => {
  const response = await apiCall(
    "DELETE",
    `/api/user/wishlist/${item._id}`,
    encodedToken,
    item
  );
  setWishList(response.data.wishlist);
};
const incrementItemWishList = async (item, setWishList) => {
  const response = await apiCall(
    "POST",
    `/api/user/cart/${item._id}`,
    encodedToken,
    item,

  );
  setWishList(response.data.wishlist);
};
const decrementItemWishList = async (item, setWishList) => {
  const response = await apiCall(
    "POST",
    `/api/user/cart/${item._id}`,
    encodedToken,
    item
  );

  setWishList(response.data.wishlist);
};
export {
  addToWishList,
  removeFromWishList,
  incrementItemWishList,
  decrementItemWishList,
};

