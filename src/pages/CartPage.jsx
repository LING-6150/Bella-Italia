import React, { useState } from "react";
import "../styles/CartPage.css";

const CartPage = ({ cartItems, updateCart, addToOrderHistory }) => {
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setCheckoutMessage("Your cart is empty. Please add items to proceed.");
      return;
    }

    addToOrderHistory(cartItems);

    updateCart([]);

    setCheckoutMessage("Your order is successful, and we will prepare your food soon!");
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
      {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Add some items from the menu!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="cart-checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

