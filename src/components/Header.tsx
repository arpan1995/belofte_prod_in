import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo & Brand Name */}
        <div className="logo-container">
          <img src={logo} alt="Belofte Foundation Logo" className="logo" />
          <h1 className="brand-name">Belofte Foundation</h1>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>

          {/* Donate Button */}
          <Link to="/donate" className="donate-btn animated-donate-btn">
            Donate 💜
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
