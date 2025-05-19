import React from "react";

const projects = [
  {
    title: "E-Commerce with Blog",
    desc: "An e-commerce solution with blog system using Laravel.",
    tag: "Live Demo",
  },
  {
    title: "Videopro Plugin",
    desc: "A Moodle plugin to manage and stream course videos.",
    tag: "Like Demo",
  },
  {
    title: "Skin Disease Prediction",
    desc: "ML-based tool to identify skin conditions.",
    tag: "Live Demo",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div key={i} className="project-box">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <button className="btn">{proj.tag}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
