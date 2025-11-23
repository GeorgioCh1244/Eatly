import React from "react";
import "../styles/OrderSummary.css";

const OrderSummary = ({ cartItems }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      {cartItems.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <h3 className="total">Total: ${totalPrice.toFixed(2)}</h3>

          <button className="confirm-btn">Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;