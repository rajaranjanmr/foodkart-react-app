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

function CartListing({ value }) {
  const [qty, setQty] = useState(1);
  const { setCart } = useCart();
  const { setWishList } = useWishList();
  function incrementClickHandler() {
    setQty(qty + 1);
    value.qty = qty;
    incrementItemCart(value, setCart);
  }
  function decrementClickHandler() {
    if (qty > 0) setQty(qty - 1);
    value.qty = qty;
    decrementItemCart(value, setCart);
  }

  return (
    <div className="card">
      <img src={value.image} alt="biryani" style={{ width: "100%" }} />
      <h1>{value.category}</h1>
      <p className="price">₹{value.price} (10%off)</p>
      <div className="quantity-up-down">
        Quantity :
        <p>
          <i className="fa fa-plus" onClick={() => incrementClickHandler()}></i>
        </p>
        <p style={{ border: "1px solid black", display: "inline" }}>
          {value.qty}
        </p>
        <p>
          <i
            className="fa fa-minus"
            onClick={() => decrementClickHandler()}
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
