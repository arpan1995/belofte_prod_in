import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
// comment for testing
const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" className="brand">
            <img
              src="/belofte_logo.png"
              alt="Belofte Foundation"
              className="logo-img"
            />
            <span className="brand-text">
              <span className="highlight">Belofte</span> Foundation
            </span>
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          {/* <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link> */}
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>

          <Link to="/donate" className="donate-btn">
            💖 Donate
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
