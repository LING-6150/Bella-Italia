import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = ({ name, description, image, price, addToCart }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price.toFixed(2)}</p>
        <button
          className="card-add-button"
          onClick={() => addToCart({ name, description, image, price })}
        >
          +
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;

