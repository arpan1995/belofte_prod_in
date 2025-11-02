import React from "react";
import "./About.css";
import aboutImg from "../assets/img00.png"; // reuse your existing image
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <><section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="about-texts">
            <h2>About Belofte Foundation</h2>
            <p>
              Belofte Foundation is a non-profit organization dedicated to
              empowering underprivileged communities through education, skill
              development, and health awareness. Our mission is to create
              sustainable impact that uplifts lives and nurtures human potential.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Belofte Foundation" />
          </div>
        </div>

        <div className="about-graphics">
          <div className="about-card">
            <div className="icon">🎓</div>
            <h3>Education</h3>
            <p>
              Providing access to quality education and modern learning tools
              to children in need.
            </p>
          </div>

          <div className="about-card">
            <div className="icon">💼</div>
            <h3>Skill Development</h3>
            <p>
              Empowering youth with employable skills and guidance for a
              brighter future.
            </p>
          </div>

          <div className="about-card">
            <div className="icon">🌿</div>
            <h3>Community Growth</h3>
            <p>
              Promoting health, hygiene, and environmental awareness programs
              that create lasting change.
            </p>
          </div>
        </div>
      </div>
    </section><Footer /></>
  );
};

export default About;
