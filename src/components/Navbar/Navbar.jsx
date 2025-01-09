import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="/images/alietlogo.jpg" alt="Project Logo" />
        <h1>ALIET CSE Academic Tracker</h1>
      </div>
    </nav>
  );
};

export default Navbar;
