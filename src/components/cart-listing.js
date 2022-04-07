import { Link } from "react-router-dom";
import { useState } from "react";
import {
  decrementItemCart,
  incrementItemCart,
  removeFromCart,
} from "../utility/cart-function";
import { useCart } from "../context/cart-context";
import { addToWishList } from "../utility/wishlist-function";
import { useWishList } from "../context/wishlist-context";
import './card-listing.css'

function CartListing({ value }) {
  const [qty, setQty] = useState(1);
  const { setCart } = useCart();
  const { setWishList } = useWishList();
   function incrementClickHandler(value) {    
    incrementItemCart(value._id,setCart)
  }
  function decrementClickHandler(value) {
    decrementItemCart(value._id,setCart)
  } 

  return (
    <div className="card">
      <img src={value.image} alt="biryani" style={{ width: "100%" }} />
      <h1>{value.category}</h1>
      <p className="price">₹{value.price} (10%off)</p>
      <div className="quantity-up-down">
        Quantity :
        <p>
          <i className="fa fa-plus" onClick={() => incrementClickHandler(value)}></i>
        </p>
        <p clasName="card-ptag"style={{  }} >
          {value.qty}
        </p>
        <p>
          <i
            className="fa fa-minus"
            onClick={() => decrementClickHandler(value)}
          ></i>
        </p>
      </div>
      <div className="card-btn-add">
        <p>
          <button onClick={() => removeFromCart(value, setCart)}>remove</button>
        </p>
        <p>
          <button onClick={() => addToWishList(value, setWishList)}>
            to wishlist
          </button>
        </p>
      </div>
    </div>
  );
}
export { CartListing };
