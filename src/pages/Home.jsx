import React from "react";
import "../styles/Home.css";
import heroImage from "../assets/restaurant.png"; // add a nice restaurant image in assets

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src={heroImage} alt="Restaurant" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Eatly</h1>
          <p>Delicious meals, fresh ingredients, and a cozy atmosphere.</p>
          <a href="/menu" className="cta-btn">Order Now</a>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Why Choose Us?</h2>
        <div className="highlight-list">
          <div className="highlight">
            <h3>🍽️ Fresh Ingredients</h3>
            <p>We use only the freshest produce and meats for every dish.</p>
          </div>
          <div className="highlight">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your favorite meals delivered hot and on time.</p>
          </div>
          <div className="highlight">
            <h3>⭐ Customer Satisfaction</h3>
            <p>Our priority is to make every dining experience memorable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;