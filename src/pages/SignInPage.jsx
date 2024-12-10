import React from "react";
import "../styles/SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-image">
        <img
          src="./assets/images/restaurant.avif"
          alt="Italian Cuisine"
          className="restaurant-image"
        />
      </div>
      <div className="sign-in-form-container">
        <h1 className="sign-in-title">Sign in to Bella Italia</h1>
        <p className="sign-in-subtitle">
          A few more questions to help us communicate better with you
        </p>
        <form className="sign-in-form">
          <input
            type="email"
            placeholder="Email Address"
            className="sign-in-input"
            required
          />
          <button type="submit" className="sign-in-button">
            Continue
          </button>
          <div className="divider">or</div>
          <button className="magic-link-button">Email me a Magic Link</button>
          <button className="social-button facebook-button">
            Sign in with Facebook
          </button>
          <button className="social-button google-button">
            Sign in with Google
          </button>
        </form>
        <p className="sign-in-footer">
          Don’t have an account? <a href="/become-vip">Become A VIP</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
