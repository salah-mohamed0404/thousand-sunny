import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContextProvider } from "./store/theme-context";
import { AuthContextProvider } from "./store/Auth-context";
import { CartContextProvider } from "./store/cart-context";
import { WishlistContextProvider } from "./store/wishlist-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <WishlistContextProvider>
          <CartContextProvider>
            <Router>
              <App />
            </Router>
          </CartContextProvider>
        </WishlistContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
