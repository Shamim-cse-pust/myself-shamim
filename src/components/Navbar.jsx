// src/components/Navbar.jsx
import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Technical Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#competitive-programming">Competitive Skill and Experienc</a>
        </li>
        <li>
          <a href="#awards">Awards & Achievements</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
