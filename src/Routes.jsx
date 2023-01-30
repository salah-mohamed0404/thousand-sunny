import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthenticatedRoute from "./components/CheckAuthRoutes/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/CheckAuthRoutes/UnauthenticatedRoute";
import Cart from "./containers/Cart";
import Wishlist from "./containers/Wishlist";
const Home = lazy(() => import("./containers/Home"));
const Login = lazy(() => import("./containers/Login"));
const SignUp = lazy(() => import("./containers/SignUp"));
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
          <Route
            path="/login"
            element={
              <UnauthenticatedRoute>
                <Login />
              </UnauthenticatedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <UnauthenticatedRoute>
                <SignUp />
              </UnauthenticatedRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/wishlist"
            element={
              <AuthenticatedRoute>
                <Wishlist />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <AuthenticatedRoute>
                <Cart />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <AuthenticatedRoute>
                <UserProfile />
              </AuthenticatedRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </Suspense>
  );
}
