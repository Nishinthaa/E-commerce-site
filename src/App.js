import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import PaymentPage from "./pages/PaymentPage";
import Products from "./pages/Products";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} /> 
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;



