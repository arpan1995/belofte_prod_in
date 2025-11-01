import React from "react";
import "./Hero.css";
import empowermentImg from "../assets/img00.png"; // ✅ Your image

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Empowering Communities, Inspiring Change</h1>
          <p>
            At <strong>Belofte Foundation</strong>, we are dedicated to creating
            sustainable impact through education, skill development, and
            community empowerment. Our mission is to enable individuals to
            become self-reliant and lead dignified lives.
          </p>
          <button>Join Our Mission</button>
        </div>

        <div className="hero-image">
          <img src={empowermentImg} alt="Empowerment illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
