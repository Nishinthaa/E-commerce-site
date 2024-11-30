import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
    
          <img src={logo} alt="Meesho Logo" />
       
        <h1>Meesho </h1>
      </div>
      <nav>
        <ul className="navbar-links">
          <li><Link to="/">🏠Home</Link></li>
          <li><Link to="/cart">🛒Cart</Link></li>
          <li><Link to="/login">🔑Login</Link></li>
          <li><Link to="/signup">👤Sign up</Link></li>
          <li><Link to="/wishlist">❤️Wishlist</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

