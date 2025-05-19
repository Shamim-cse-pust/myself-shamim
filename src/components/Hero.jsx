import React from "react";
import "../App.css";
import profileImg from "../../public/profile.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div>
        <h1>
          Hi, I'm<br />
          <span className="highlight" style={{ fontWeight: 700 }}>
            Md. Shamim Miah
          </span>
        </h1>
        <h2 style={{ fontWeight: 600, color: '#3db6ff', fontSize: '1.25rem', margin: '0.5rem 0 1.5rem 0', letterSpacing: '0.5px' }}>
          Software Engineer <span style={{ color: '#b2b7d0', fontWeight: 400 }}>| Brain Station 23 PLC</span>
        </h2>
        <p style={{ color: "#b2b7d0" }}>
          I build digital experiences and tools to make daily life easier.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        </p>
      </div>
      <div>
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
