import React from "react";
import "./HeroSection.css"; // Import the updated CSS file

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Student Marks System</h1>
        <p className="hero-description">
          Access all student details and performance data at your fingertips!
        </p>
        <div className="hero-button-container">
          <button className="hero-button">Get Started</button>
        </div>
      </div>
      <div className="hero-images">
        <img
          src="/images/marks.jpg"
          alt="Student Data"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
