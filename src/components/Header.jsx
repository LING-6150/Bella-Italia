import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";
import DropdownMenu from "../components/DropdownMenu"

const Header = ({ navigateTo, cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="header">
      <div className="header__logo-container" onClick={() => navigateTo("home")}>
        <img src="./assets/images/logo.avif" alt="Logo" className="header__logo" />
        <span className="header__name">Bella Italia</span>
      </div>

      <button className="header__hamburger" onClick={toggleHamburgerMenu}>
        ☰
      </button>

      <nav className={`header__nav ${isHamburgerOpen ? "header__nav--open" : ""}`}>
        <button onClick={() => navigateTo("home")} className="header__nav-item">
          Home
        </button>
        <DropdownMenu className="header__nav-item" navigateTo={navigateTo} />
        <button onClick={() => navigateTo("cart")} className="header__nav-item">
          Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
        </button>
        <button
          onClick={() => navigateTo("order-history")}
          className="header__nav-item"
        >
          Order History
        </button>
        <button onClick={() => navigateTo("about")} className="header__nav-item">
          About Us
        </button>
        <button onClick={() => navigateTo("contact-us")} className="header__nav-item">
          Contact Us
        </button>
        <button onClick={() => navigateTo("become-vip")} className="header__nav-item">
          Become VIP
        </button>
        <button onClick={() => navigateTo("sign-in")} className="header__nav-item">
          Sign In
        </button>
      </nav>
    </header>
  );
};

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Header;

