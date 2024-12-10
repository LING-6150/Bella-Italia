import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import "../../styles/menu/AppetizersPage.css";

const appetizers = [
  {
    name: "Bruschetta al Pomodoro",
    description: "Toasted bread with fresh tomatoes, basil, garlic, and olive oil.",
    image: "/assets/images/bruschetta.avif",
    price: 8.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Caprese Salad",
    description: "Sliced fresh mozzarella, tomatoes, basil leaves, drizzled with balsamic glaze.",
    image: "/assets/images/caprese.avif",
    price: 10.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Arancini",
    description: "Crispy fried risotto balls stuffed with mozzarella and served with marinara sauce.",
    image: "/assets/images/arancini.avif",
    price: 9.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Antipasto Platter",
    description: "A selection of cured meats, cheeses, olives, roasted vegetables, and breadsticks.",
    image: "/assets/images/antipasto.avif",
    price: 10.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Calamari Fritti",
    description: "Lightly breaded and fried calamari served with marinara and aioli dips.",
    image: "/assets/images/calamari.avif",
    price: 9.99,
    icon: "/assets/images/add.png",
  },
];

const AppetizersPage = ({ addToCart }) => (
  <div className="menu-page">
    {appetizers.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        description={item.description}
        image={item.image}
        price={item.price}
        icon={item.icon}
        addToCart={addToCart} 
      />
    ))}
  </div>
);

AppetizersPage.propTypes = {
  addToCart: PropTypes.func.isRequired, 
};

export default AppetizersPage;
