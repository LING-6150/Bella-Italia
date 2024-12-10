import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card"; 
import "../../styles/menu/MainFoodPage.css"; 

const pastaDishes = [
  {
    name: "Spaghetti Carbonara",
    description: "Spaghetti tossed with pancetta, egg yolk, pecorino cheese, and black pepper.",
    image: "/assets/images/carbonara.avif",
    price: 14.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Penne alla Vodka",
    description: "Penne pasta in a creamy tomato-vodka sauce with parmesan and a hint of chili flakes.",
    image: "/assets/images/penne-vodka.jpg",
    price: 15.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Lasagna alla Bolognese",
    description: "Layers of pasta, rich meat sauce, béchamel, and parmesan cheese.",
    image: "/assets/images/lasagna.avif",
    price: 16.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Fettuccine Alfredo",
    description: "Fettuccine in a creamy butter and parmesan sauce, with an optional addition of chicken or shrimp.",
    image: "/assets/images/fettuccine-alfredo.avif",
    price: 17.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Ravioli di Ricotta e Spinaci",
    description: "Handmade ravioli filled with ricotta cheese and spinach, served in sage butter or marinara.",
    image: "/assets/images/ravioli.avif",
    price: 18.99,
    icon: "/assets/images/add.svg",
  },
];

const meatAndSeafoodDishes = [
  {
    name: "Chicken Parmigiana",
    description: "Breaded chicken cutlet topped with marinara sauce and melted mozzarella, served with spaghetti.",
    image: "/assets/images/chicken-parm.jpeg",
    price: 19.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Osso Buco alla Milanese",
    description: "Braised veal shank with a rich wine and vegetable sauce, served over saffron risotto.",
    image: "/assets/images/osso-buco.avif",
    price: 24.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Saltimbocca alla Romana",
    description: "Veal or chicken medallions wrapped in prosciutto and sage, sautéed in a white wine sauce.",
    image: "/assets/images/saltimbocca.avif",
    price: 22.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Seafood Risotto (Risotto ai Frutti di Mare)",
    description: "Creamy risotto with shrimp, clams, mussels, and squid in a white wine and tomato base.",
    image: "/assets/images/seafood-risotto.avif",
    price: 25.99,
    icon: "/assets/images/add.svg",
  },
  {
    name: "Grilled Branzino",
    description: "Whole grilled Mediterranean sea bass, served with a lemon-caper sauce and roasted vegetables.",
    image: "/assets/images/grilled-branzino.avif",
    price: 27.99,
    icon: "/assets/images/add.svg",
  },
];

const MainFoodPage = ({ addToCart }) => {
  return (
    <div className="main-food-page">
      <h1 className="main-food-title">Main Courses (Primi & Secondi Piatti)</h1>

      <section className="food-section">
        <h2 className="section-title">Pasta Dishes (Primi Piatti)</h2>
        <div className="menu-grid">
          {pastaDishes.map((dish, index) => (
            <Card
              key={index}
              name={dish.name}
              description={dish.description}
              image={dish.image}
              price={dish.price}
              icon={dish.icon}
              addToCart={addToCart} 
            />
          ))}
        </div>
      </section>

      <section className="food-section">
        <h2 className="section-title">Meat & Seafood Dishes (Secondi Piatti)</h2>
        <div className="menu-grid">
          {meatAndSeafoodDishes.map((dish, index) => (
            <Card
              key={index}
              name={dish.name}
              description={dish.description}
              image={dish.image}
              price={dish.price}
              icon={dish.icon}
              addToCart={addToCart} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

MainFoodPage.propTypes = {
  addToCart: PropTypes.func.isRequired, 
};

export default MainFoodPage;
