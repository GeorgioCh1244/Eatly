import React, { useState } from "react";
import { menuItems } from "../data"; 
import MenuItem from "../components/MenuItem";
import Cart from "../components/cart";
import "../styles/Menu.css";

const Menu = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Section */}
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Menu;