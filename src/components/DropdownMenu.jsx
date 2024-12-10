import React, { useState } from "react";
import "../styles/DropdownMenu.css"; 

const DropDownMenu = ({ navigateTo }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="dropdown header__nav-item"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button className="dropdown-button">Menu</button>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          <li onClick={() => navigateTo("appetizers")}>Appetizers</li>
          <li onClick={() => navigateTo("main-food")}>Main Food</li>
          <li onClick={() => navigateTo("drinks")}>Drinks</li>
          <li onClick={() => navigateTo("desserts")}>Desserts</li>
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;