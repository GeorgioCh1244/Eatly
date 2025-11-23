import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import "../styles/Checkout.css";

const Checkout = () => {
  // Example cart state (in real app, pass from Menu/Cart)
const [cartItems] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    payment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order Confirmed!\n\nName: ${customer.name}\nAddress: ${customer.address}\nPayment: ${customer.payment}\n\nItems: ${cartItems.length}`
    );
    setCustomer({ name: "", address: "", payment: "" });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {/* Order Summary */}
      <OrderSummary cartItems={cartItems} />

      {/* Customer Details Form */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Customer Details</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={customer.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Delivery Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={customer.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="payment">Payment Method</label>
        <select
          name="payment"
          value={customer.payment}
          onChange={handleChange}
          required
        >
          <option value="">Select a payment method</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Mobile Payment">Mobile Payment</option>
        </select>

        <button type="submit" className="confirm-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;