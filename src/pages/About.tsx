import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Belofte Foundation</h2>
        <p>
          Belofte Foundation is a non-profit organization dedicated to empowering
          underprivileged communities through education, skill development, and
          health awareness. Our mission is to create sustainable impact that
          uplifts lives and nurtures human potential.
        </p>

        <div className="about-graphics">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>
              Providing access to quality education and learning tools to
              children in need.
            </p>
          </div>
          <div className="about-card">
            <h3>💼 Skill Development</h3>
            <p>
              Empowering youth with employable skills for a brighter future.
            </p>
          </div>
          <div className="about-card">
            <h3>🌿 Community Growth</h3>
            <p>
              Promoting health, hygiene, and environmental awareness programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
