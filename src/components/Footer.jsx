import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer__info">
        <div className="footer__address">
          <h3>Visit Us</h3>
          <p>123 Yuyuan Road, Jing'an District</p>
          <p>Shanghai, China</p>
          <a href="tel:+8602166668888" className="footer__phone">
            (+86) 021-6666-8888
          </a>
        </div>
        <div className="footer__hours">
          <h3>Hours</h3>
          <p>Sunday: 11:30 am - 10:00 pm</p>
          <p>Monday - Thursday: 11:30 am - 10:00 pm</p>
          <p>Friday - Saturday: 11:30 am - 10:30 pm</p>
        </div>
      </div>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>

      <p>&copy; 2024 Bella Italia, Shanghai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

