import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import AppetizersPage from "./pages/menu/AppetizersPage";
import MainFoodPage from "./pages/menu/MainFoodPage";
import DrinksPage from "./pages/menu/DrinksPage";
import DessertsPage from "./pages/menu/DessertsPage";
import CartPage from "./pages/CartPage";
import BecomeVIPPage from "./pages/BecomeVIPPage";
import AboutUsPage from "./pages/AboutUsPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import ContactUsPage from "./pages/ContactUsPage";
import SignInPage from "./pages/SignInPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [orderHistory, setOrderHistory] = useState(
    JSON.parse(localStorage.getItem("orderHistory")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }, [orderHistory]);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const addToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.name === item.name);
    if (!isItemInCart) {
      setCartItems([...cartItems, item]);
      alert(`${item.name} added to the cart!`);
    } else {
      alert(`${item.name} is already in the cart!`);
    }
  };

  const addToOrderHistory = (items) => {
    setOrderHistory([...orderHistory, items]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "appetizers":
        return <AppetizersPage addToCart={addToCart} />;
      case "main-food":
        return <MainFoodPage addToCart={addToCart} />;
      case "drinks":
        return <DrinksPage addToCart={addToCart} />;
      case "desserts":
        return <DessertsPage addToCart={addToCart} />;
      case "cart":
        return (
          <CartPage
            cartItems={cartItems}
            updateCart={setCartItems}
            addToOrderHistory={addToOrderHistory}
          />
        );
      case "become-vip":
        return <BecomeVIPPage />;
      case "about":
        return <AboutUsPage />;
      case "order-history":
        return <OrderHistoryPage orderHistory={orderHistory} />;
      case "contact-us":
        return <ContactUsPage />;
      case "sign-in":
        return <SignInPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <Header navigateTo={navigateTo} cartCount={cartItems.length} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;

