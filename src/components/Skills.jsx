import React from "react";

const skills = ["PHP", "Laravel", "Python", "Moodle", "Docker", "Tailwind CSS", "Backend API", "Machine Learning"];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {skills.map((skill, idx) => (
          <li key={idx} className="skill-box">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
