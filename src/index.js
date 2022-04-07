import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { makeServer } from "./server";
import { CartContext, CartContextProvider } from './context/cart-context';
import { WishListContext, WishListContextProvider } from './context/wishlist-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
         <WishListContextProvider>
          <App />
          </WishListContextProvider>
          </CartContextProvider>
          
          </Router>
          
  </React.StrictMode>,
  document.getElementById('root')
);


