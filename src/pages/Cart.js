import { useState, useEffect } from "react";
import { apiCall } from "../utility/apiCall";
import "./Cart.css";
import { useCart } from "../context/cart-context";
import { CartListing } from "../components/cart-listing";
import { Checkout } from "../components/Checkout";
export default function Cart() {
  const { cart } = useCart();
  const [category, setCategory] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const data = apiCall("GET", "/api/user/cart", localStorage.getItem("token"))
      .then((response) => {
        console.log(response.data.cart);
        setCategory(response.data.categories);
      })
      .catch((e) => {
        console.log(e);
      });
    if (data === null) setMessage("your Cart is empty");
  }, []);

  // calculations

  return (
    <div>
      <div class="header-cart">
        <h1>************ Welcome to your Cart ************{message}</h1>
        <h1>{message}</h1>
      </div>

      <div className="cards cards-ecom-change">
        {cart.map((x) => {
          return <CartListing value={x} />;
        })}
      </div>

      <Checkout value={cart}></Checkout>
    </div>
  );
}
