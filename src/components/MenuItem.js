import React from "react";
import "../styles/MenuItem.css";

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      {/* Dish Image */}
      <img src={item.image} alt={item.name} className="menu-image" />

      {/* Dish Info */}
      <h3>{item.name}</h3>
      <p className="description">{item.description}</p>
      <p className="price">${item.price.toFixed(2)}</p>

      {/* Add to Cart Button */}
      <button onClick={() => addToCart(item)} className="add-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;