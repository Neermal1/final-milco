"use client";

import React from "react";

const OurStory: React.FC = () => {
  return (
    <div className="story-container">
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "34px",
          color: "#FF5733",
        }}
      >
        Our Story
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "18px",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Welcome to our journey! Our company was founded with a vision to make a 
        difference in the industry. Over the years, we have grown into a strong 
        and innovative team dedicated to providing top-notch solutions and services. 
        Join us as we continue to innovate and shape the future.
      </p>
    </div>
  );
};

export default OurStory;
