import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import "../../styles/menu/DessertsPage.css";

const desserts = [
  {
    name: "Tiramisu",
    description: "Layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder.",
    image: "/assets/images/tiramisu.avif",
    price: 7.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Cannoli",
    description: "Crisp pastry shells filled with sweet ricotta and chocolate chips.",
    image: "/assets/images/cannoli.avif",
    price: 6.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Panna Cotta",
    description: "Creamy vanilla-flavored custard topped with berry compote.",
    image: "/assets/images/pannacotta.avif",
    price: 6.49,
    icon: "/assets/images/add.png",
  },
  {
    name: "Affogato al Caffè",
    description: "Vanilla gelato 'drowned' in a shot of hot espresso.",
    image: "/assets/images/affogato.avif",
    price: 5.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Gelato",
    description: "Traditional Italian ice cream in flavors like pistachio, hazelnut, chocolate, and lemon.",
    image: "/assets/images/gelato.avif",
    price: 4.99,
    icon: "/assets/images/add.png",
  },
  {
    name: "Ricotta Cheesecake",
    description: "Italian-style cheesecake made with ricotta cheese and a hint of lemon.",
    image: "/assets/images/ricottacheesecake.avif",
    price: 7.49,
    icon: "/assets/images/add.png",
  },
];

const DessertsPage = ({ addToCart }) => (
  <div className="menu-page">
    {desserts.map((item, index) => (
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

DessertsPage.propTypes = {
  addToCart: PropTypes.func.isRequired, 
};

export default DessertsPage;


