import React from "react";
import "../App.css";
import profileImg from "../../public/profile.png";

const Hero = () => {
  return (
    <section id="hero" className="hero common">
      <div>
        <h1>
          Hi, I'm
          <br />
          <span className="highlight" style={{ fontWeight: 700 }}>
            Md. Shamim Miah
          </span>
        </h1>
        <h2
          style={{
            fontWeight: 600,
            color: "#3db6ff",
            fontSize: "1.25rem",
            margin: "0.5rem 0 1.5rem 0",
            letterSpacing: "0.5px",
          }}
        >
          Software Engineer{" "}
          <span style={{ color: "#b2b7d0", fontWeight: 400 }}>
            | Brain Station 23 PLC
          </span>
        </h2>
        <p>
          Driven by curiosity and a passion for growth, I thrive on solving
          complex problems and embracing new challenges. My goal is to craft
          impactful software solutions, collaborate with talented professionals,
          and continuously evolve—contributing to both organizational success
          and my own journey of learning and creativity.
        </p>
      </div>
      <div>
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
