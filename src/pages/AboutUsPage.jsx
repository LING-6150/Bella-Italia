import React, { useState } from "react";
import "../styles/AboutUsPage.css";

const AboutUsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedReview, setExpandedReview] = useState(null);

  const images = [
    "/assets/images/interior1.avif",
    "/assets/images/interior2.avif",
    "/assets/images/food1.avif",
    "/assets/images/food2.avif",
  ];

  const reviews = [
    {
      title: "Ranked #1 Italian Restaurant in Shanghai",
      content: `
        Recognized by food critics as the best spot for Italian cuisine, our restaurant takes pride in its authenticity and attention to detail. 
        From our famous wood-fired pizzas to hand-made pastas, every dish is crafted to perfection. Our exceptional service and cozy ambiance create a welcoming space for food enthusiasts. 
        Whether it's a family dinner or a romantic evening, we provide the perfect setting for every occasion.`,
    },
    {
      title: "Yelp's Top 100 Pizza Spot (2024)",
      content: `
        Our signature pizzas are baked to perfection using a traditional wood-fired oven, winning hearts worldwide. 
        Crafted with the finest ingredients imported from Italy, our pizzas boast a crispy crust and a delightful combination of flavors. 
        Join us for an unforgettable dining experience where passion meets flavor in every bite.`,
    },
    {
      title: "A Rich History",
      content: `
        Established in 2010, our restaurant started as a small trattoria, quickly becoming a staple for Italian food lovers in Shanghai. 
        Our founder, Carla Gomez, brought her passion for authentic Italian cuisine to the bustling city, creating a warm and inviting dining experience. 
        Today, we continue to honor our roots while embracing innovation, ensuring every guest leaves with a smile.`,
    },
    {
        title: "An Iconic Culinary Experience",
        content: `
          Praised by international food magazines, our restaurant has become an iconic destination for culinary enthusiasts from all over the world. 
          Known for our innovative take on Italian classics, we combine traditional recipes with contemporary techniques to create a menu that is both nostalgic and exciting. 
          Our wine list, featuring over 50 selections from Italy’s most renowned vineyards, perfectly complements each dish. 
          Whether you're enjoying a creamy truffle risotto or savoring a perfectly seared lamb chop, every visit promises to be a memorable journey through the flavors of Italy.
        `,
      },
      {
        title: "A Hidden Gem in Shanghai",
        content: `
          Tucked away in a charming corner of Shanghai, our restaurant has gained a reputation as a hidden gem. 
          Frequented by locals and travelers alike, we offer a cozy atmosphere that feels like stepping into an Italian home. 
          The rustic décor, with its wooden beams and soft lighting, sets the stage for an unforgettable meal. 
          From our famous tiramisu, handcrafted daily, to the comforting aroma of freshly baked bread, every detail is designed to transport you straight to the heart of Italy. 
          It's no surprise that many customers call us 'their second home.'
        `,
      },
  ];

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleReview = (index) => {
    setExpandedReview(expandedReview === index ? null : index);
  };

  return (
    <div className="about-us-page">
   
      <div className="slider">
        <button className="arrow left" onClick={handlePreviousImage}>
          &#8592;
        </button>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="slider-image"
        />
        <button className="arrow right" onClick={handleNextImage}>
          &#8594;
        </button>
      </div>

      <div className="info-section">
        <div className="info-box">
          <h2>The Scene</h2>
          <p>
            Located in the heart of Shanghai, our Italian restaurant combines
            the essence of Italian tradition with modern flavors. Owner Carla
            Gomez created this unique dining space inspired by her love for
            authentic Italian cuisine.
          </p>
        </div>
        <div className="info-box">
          <h2>The Food</h2>
          <p>
            From our famous wood-fired pizzas to creamy risottos and handmade
            pasta, we promise to deliver a true taste of Italy. Every dish is
            crafted with imported ingredients and made to order.
          </p>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Raves & Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3
              className={`review-title ${
                expandedReview === index ? "expanded" : ""
              }`}
              onClick={() => toggleReview(index)}
            >
              {review.title}
              <img
                src="/assets/images/arrow.png"
                alt="Toggle"
                className={`arrow-icon ${expandedReview === index ? "expanded" : ""}`}
              />
            </h3>
            {expandedReview === index && (
              <p className="review-content">{review.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;

