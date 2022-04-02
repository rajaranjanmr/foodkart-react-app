import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import { Link } from "react-router-dom";
import Logout from "./pages/Logout";
import { Navigation } from "./components/Navigation";
import {ProductListing} from "./pages/ProductListing";
import MockAPI from "./pages/Mockapi";

export default function Main() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/mockman" element={<MockAPI/>} />
      </Routes>
      </>
  );
}
