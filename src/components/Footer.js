import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>
      <p>© 2025 Your Eatly. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;