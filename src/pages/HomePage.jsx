import React from "react";
import "../styles/HomePage.css";

const HomePage = ({ navigateTo }) => {
  return (
    <div className="home-page">
    
      <section className="home-page__hero">
        <div className="home-page__hero-text">
          <h1>"The Most Authentic Italian Restaurant"</h1>
          <p>
            Bella Italia is known as "The Most Authentic Italian Restaurant," offering a cozy
            atmosphere with world-class traditional cuisine. From Saltimbocca di Pollo to
            brick-oven pizzas piled high with house-made sausages and mozzarella, we bring
            the taste of Italy to Shanghai.
          </p>
          <button
            className="home-page__cta"
            onClick={() => navigateTo("main-food")}
          >
            View Our Menu
          </button>
        </div>
        <div className="home-page__hero-image">
          <img
            src="./assets/images/Bella.avif"
            alt="Bella Italia Restaurant"
            className="hero-image"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
