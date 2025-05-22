import React from "react";

const projects = [
  {
    title: "myself-shamim",
    desc: "Personal portfolio website built with React and Vite.",
    url: "https://github.com/Shamim-cse-pust/myself-shamim",
  },
  {
    title: "payment-gateway-integration",
    desc: "Payment gateway integration project using Blade.",
    url: "https://github.com/Shamim-cse-pust/payment-gateway-integration",
  },
  {
    title: "project-laravel-admin-ms",
    desc: "Admin management system built with Laravel.",
    url: "https://github.com/Shamim-cse-pust/project-laravel-admin-ms",
  },
  {
    title: "project-react-admin-ms",
    desc: "Admin management system built with React and TypeScript.",
    url: "https://github.com/Shamim-cse-pust/project-react-admin-ms",
  },
  {
    title: "E-commerce_with_Blog_Django_website",
    desc: "E-commerce website with blog using Django.",
    url: "https://github.com/Shamim-cse-pust/E-commerce_with_Blog_Django_website",
  },
  {
    title: "Boighor_Ecommerce",
    desc: "Book e-commerce platform.",
    url: "https://github.com/Shamim-cse-pust/Boighor_Ecommerce",
  },
  {
    title: "Snack-and-Ladders-Using-Java",
    desc: "Snake and Ladders game using Java and Socket Programming.",
    url: "https://github.com/Shamim-cse-pust/Snack-and-Ladders-Using-Java",
  },
  {
    title: "api_prothom_alo",
    desc: "API project for Prothom Alo (Python).",
    url: "https://github.com/Shamim-cse-pust/api_prothom_alo",
  },
  {
    title: "Potato_disease_Classification",
    desc: "Potato disease classification using ML.",
    url: "https://github.com/Shamim-cse-pust/Potato_disease_Classification",
  },
  {
    title: "Skin_disease_prediction",
    desc: "Skin disease prediction using Jupyter Notebook.",
    url: "https://github.com/Shamim-cse-pust/Skin_disease_prediction",
  },
  {
    title: "noisereduce",
    desc: "Noise reduction in Python using spectral gating.",
    url: "https://github.com/Shamim-cse-pust/noisereduce",
  },
  {
    title: "YoutubeVideoDownloder",
    desc: "A tool to download YouTube videos (HTML/JS).",
    url: "https://github.com/Shamim-cse-pust/YoutubeVideoDownloder",
  },
];

const githubTag = (
  <span className="github-tag">
    <i className="devicon-github-original"></i> Github
  </span>
);

const Projects = () => {
  return (
    <section id="projects" className="projects common">
      <h2>Projects</h2>
      <div className="education-grid">
        {projects.map((proj, i) => (
          <div key={i} className="edu-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="edu-institute">{proj.desc}</p>
            <ul className="edu-details">
              <li>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  {githubTag}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
