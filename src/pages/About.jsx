import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/about.png"; // add a nice restaurant/team photo in assets

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <div className="about-section">
        <img src={aboutImage} alt="About our restaurant" className="about-image" />

        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At Eatly, we believe food is more than just a meal — it’s an experience. 
            Since opening our doors, we’ve been dedicated to serving delicious dishes made 
            with fresh, locally sourced ingredients. Our chefs combine tradition with creativity 
            to bring you flavors that feel like home, yet surprise you every time.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>🍽️ Quality: Only the freshest ingredients go into our meals.</li>
            <li>🤝 Community: We support local farmers and suppliers.</li>
            <li>⭐ Service: Your satisfaction is our top priority.</li>
          </ul>

          <h2>Our Mission</h2>
          <p>
            To create a welcoming space where families, friends, and food lovers can gather, 
            enjoy great meals, and make lasting memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;