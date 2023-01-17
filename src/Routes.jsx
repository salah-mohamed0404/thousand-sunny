import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./containers/Home"));
const Products = lazy(() => import("./containers/Products"));
const ProductDetails = lazy(() => import("./containers/ProductDetails"));
const UserProfile = lazy(() => import("./containers/UserProfile"));
const NotFound = lazy(() => import("./containers/NotFound"));

export default function Links() {
  return (
    <Suspense>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </Suspense>
  );
}
