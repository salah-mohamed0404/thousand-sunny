import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import ProductDetails from "./containers/ProductDetails";
import Products from "./containers/Products";
import UserProfile from "./containers/UserProfile";

export default function Links() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
