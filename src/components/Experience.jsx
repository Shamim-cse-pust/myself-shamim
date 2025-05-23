import React from "react";
import "../App.css";

const experiences = [
  {
    company: "Brain Station 23 PLC",
    role: "Software Engineer I",
    location: "Dhaka, Bangladesh",
    duration: "Apr, 2024 – Present",
  },
  {
    company: "Mitu Nursing College",
    role: "Lecturer",
    location: "Pabna-6600, Bangladesh",
    duration: "Jan, 2022 – Dec, 2023",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section common">
      <h2>Job Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-role">{exp.role}</div>
            <div className="experience-location">{exp.location}</div>
            <div className="experience-duration">{exp.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
