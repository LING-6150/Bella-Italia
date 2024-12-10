import React, { useState } from "react";
import "../styles/ContactUsPage.css";

const ContactUsPage = () => {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address (e.g., example@domain.com)");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-subtitle">
        We will get back to you as soon as possible.
      </p>

      <div className="contact-info">
        <div className="location">
          <h2>Shanghai, Yuyuan Road</h2>
          <p>123 Yuyuan Road, Jing'an District</p>
          <p>Shanghai, China</p>
          <a href="tel:+8602166668888" className="phone-number">
            (+86) 021-6666-8888
          </a>
        </div>

        <div className="location-image">
          <a
            href="https://www.google.com/maps/@31.22062,121.4325951,16z?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/images/location.jpg"
              alt="Location on Google Maps"
              className="location-photo"
            />
          </a>
        </div>

        <div className="hours">
          <h2>Hours</h2>
          <p>Sunday: 11:30 am - 10:00 pm</p>
          <p>Monday - Thursday: 11:30 am - 10:00 pm</p>
          <p>Friday - Saturday: 11:30 am - 10:30 pm</p>
        </div>
      </div>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Name (Required)"
          className="contact-input"
          required
        />
        <input
          type="email"
          placeholder="Email (Required)"
          className="contact-input"
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <input type="tel" placeholder="Phone" className="contact-input" />
        <textarea
          placeholder="Message (Required)"
          className="contact-textarea"
          required
        ></textarea>
        <div className="recaptcha">
          <input type="checkbox" id="recaptcha" />
          <label htmlFor="recaptcha">I'm not a robot</label>
        </div>
        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;

