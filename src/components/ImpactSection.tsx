import React from "react";
import "./ImpactSection.css";
import { FaHeart, FaHandsHelping, FaUsers } from "react-icons/fa";

const ImpactSection: React.FC = () => {
  return (
    <section className="impact-section">
      <div className="impact-overlay"></div>
      <h2 className="impact-title">Our Impact So Far</h2>

      <div className="impact-container">
        <div className="impact-card">
          <FaHeart className="impact-icon" />
          <h3 className="impact-number">1K+</h3>
          <p className="impact-text">Lives Impacted</p>
        </div>

        <div className="impact-card">
          <FaHandsHelping className="impact-icon" />
          <h3 className="impact-number">12+</h3>
          <p className="impact-text">Projects Completed</p>
        </div>

        <div className="impact-card">
          <FaUsers className="impact-icon" />
          <h3 className="impact-number">35+</h3>
          <p className="impact-text">Volunteers</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
