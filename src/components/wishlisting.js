import { Link } from "react-router-dom";
import { useWishList } from "../context/wishlist-context";
import {
  decrementItemWishList,
  incrementItemWishList,
  removeFromWishList,
} from "../utility/wishlist-function";
import { addToCart, incrementItem } from "../utility/cart-function";
import { useCart } from "../context/cart-context";
import { useState } from "react";

function WishListing({ value }) {
  const { setWishList } = useWishList();
  const { setCart } = useCart();
  const [qty, setQty] = useState(1);
  function incrementClickHandler() {
    
    incrementItemWishList(value, setWishList);
  }
  function decrementClickHandler() {
    incrementItemWishList(value, setWishList);
  }
  return (
    <div className="card">
      <img src={value.image} alt="biryani" style={{ width: "100%" }} />
      <h1>Biryani</h1>
      <p className="price">₹300 (10%off)</p>
      <div className="card-btn-add">
        <p>
          <button onClick={() => removeFromWishList(value, setWishList)}>
            remove
          </button>
        </p>
        <p>
          <button onClick={() => addToCart(value, setCart)}>to cart</button>
        </p>
      </div>
    </div>
  );
}
export { WishListing };
