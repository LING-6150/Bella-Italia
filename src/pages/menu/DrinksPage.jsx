import React from "react";
import PropTypes from "prop-types";
import "../../styles/menu/DrinksPage.css";
import Card from "../../components/Card";

const DrinksPage = ({ addToCart }) => {
  const italianWines = [
    {
      category: "Red Wines",
      items: [
        {
          name: "Chianti Classico",
          description: "A classic Italian red wine with notes of cherries and earthy spices.",
          price: 12.99,
          image: "/assets/images/wine1.avif",
        },
        {
          name: "Barolo",
          description: "Full-bodied red wine from Piedmont with aromas of roses and truffles.",
          price: 15.99,
          image: "/assets/images/wine2.avif",
        },
        {
          name: "Nero d’Avola",
          description: "Rich and dark Sicilian red wine with notes of black fruits and spices.",
          price: 11.99,
          image: "/assets/images/wine3.avif",
        },
      ],
    },
    {
      category: "White Wines",
      items: [
        {
          name: "Pinot Grigio",
          description: "Crisp and refreshing white wine with hints of green apples and citrus.",
          price: 10.99,
          image: "/assets/images/whitewine1.avif",
        },
        {
          name: "Verdicchio",
          description: "Medium-bodied white wine with floral notes and a hint of almond.",
          price: 9.99,
          image: "/assets/images/whitewine2.avif",
        },
        {
          name: "Gavi di Gavi",
          description: "Elegant white wine with fresh acidity and a touch of peach.",
          price: 12.99,
          image: "/assets/images/whitewine3.avif",
        },
      ],
    },
  ];

  const cocktails = [
    {
      name: "Aperol Spritz",
      description: "Aperol, prosecco, and soda water with an orange slice.",
      price: 9.99,
      icon: "/assets/images/add.svg",
      image: "/assets/images/cocktail1.avif",
    },
    {
      name: "Negroni",
      description: "Gin, Campari, and sweet vermouth.",
      price: 11.99,
      icon: "/assets/images/add.svg",
      image: "/assets/images/cocktail2.avif",
    },
    {
      name: "Limoncello Martini",
      description: "Limoncello, vodka, and a touch of lemon juice.",
      price: 12.99,
      icon: "/assets/images/add.svg",
      image: "/assets/images/cocktail3.avif",
    },
  ];

  const nonAlcoholicDrinks = [
    {
      name: "San Pellegrino Sparkling Water",
      description: "Refreshing Italian sparkling water.",
      price: 3.99,
      icon: "/assets/images/add.svg",
      image: "/assets/images/sparkling-water.avif",
    },
    {
      name: "Italian Lemonade",
      description: "Freshly squeezed lemon juice, sparkling water, and a touch of sugar.",
      price: 4.99,
      icon: "/assets/images/add.svg",
      image: "/assets/images/lemonade.avif",
    },
    {
      name: "Espresso or Cappuccino",
      description: "Italian coffee classics.",
      price: 4.49,
      icon: "/assets/images/add.svg",
      image: "/assets/images/espresso.avif",
    },
  ];

  const renderWineCategory = (category) => (
    <div key={category.category} className="wine-category">
      <div className="wine-category-header">
        <h3 className="category-title">{category.category}</h3>
      </div>
      <div className="menu-grid">
        {category.items.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image} 
            icon="/assets/images/add.svg"
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );

  const renderDrinksSection = (title, drinks) => (
    <section className="drink-section" key={title}>
      <h2 className="section-title">{title}</h2>
      <div className="menu-grid">
        {drinks.map((drink, index) => (
          <Card
            key={index}
            name={drink.name}
            description={drink.description}
            price={drink.price}
            image={drink.image}
            icon={drink.icon}
            addToCart={addToCart} 
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="drinks-page">
      <h1 className="drinks-title">Drinks (Bevande)</h1>

      <section className="drink-section">
        <h2 className="section-title">Italian Wines</h2>
        {italianWines.map((category) => renderWineCategory(category))}
      </section>

      {renderDrinksSection("Cocktails", cocktails)}
      {renderDrinksSection("Non-Alcoholic Drinks", nonAlcoholicDrinks)}
    </div>
  );
};

DrinksPage.propTypes = {
  addToCart: PropTypes.func.isRequired, 
};

export default DrinksPage;

