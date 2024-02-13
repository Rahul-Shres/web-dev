import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            Your Logo
          </a>
          <div
            className={`navbar-burger${isOpen ? ' is-active' : ''}`}
            onClick={toggleNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu${isOpen ? ' is-active' : ''}`}>
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/about" className="navbar-item">
              About
            </a>
            <a href="/createBlog" className="navbar-item">
              CreateBlog
            </a>
            <a href="/contact" className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
