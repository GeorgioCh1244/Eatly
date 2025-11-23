import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/Eatly-logo.png"; // place your restaurant logo in assets folder

const NavBar = () => {
  return (
    <div className="navbar">
      {/* Left side: Logo */}
      <div className="leftSide">
        <Link to="/">
          <img src={logo} alt="Restaurant Logo" className="logo" />
        </Link>
      </div>

      {/* Right side: Navigation Links */}
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default NavBar;