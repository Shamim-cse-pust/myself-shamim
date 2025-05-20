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
    title: "api_prothom_alo",
    desc: "API project for Prothom Alo (Python).",
    url: "https://github.com/Shamim-cse-pust/api_prothom_alo",
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
    title: "potato_api",
    desc: "Potato disease classification API (Python).",
    url: "https://github.com/Shamim-cse-pust/potato_api",
  },
  {
    title: "YoutubeVideoDownloder",
    desc: "A tool to download YouTube videos (HTML/JS).",
    url: "https://github.com/Shamim-cse-pust/YoutubeVideoDownloder",
  },
  {
    title: "E-commerce_with_Blog_Django_website",
    desc: "E-commerce website with blog using Django.",
    url: "https://github.com/Shamim-cse-pust/E-commerce_with_Blog_Django_website",
  },
  {
    title: "Django_web_project",
    desc: "Web project built with Django.",
    url: "https://github.com/Shamim-cse-pust/Django_web_project",
  },
  {
    title: "Potato_disease_Classification",
    desc: "Potato disease classification using ML.",
    url: "https://github.com/Shamim-cse-pust/Potato_disease_Classification",
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
    title: "Skin_disease_prediction",
    desc: "Skin disease prediction using Jupyter Notebook.",
    url: "https://github.com/Shamim-cse-pust/Skin_disease_prediction",
  },
  {
    title: "Snack-and-Ladders",
    desc: "Snake and Ladders game in Java.",
    url: "https://github.com/Shamim-cse-pust/Snack-and-Ladders",
  },
  {
    title: "my-portfolio",
    desc: "Personal portfolio website (HTML).",
    url: "https://github.com/Shamim-cse-pust/my-portfolio",
  },
  {
    title: "noisereduce",
    desc: "Noise reduction in Python using spectral gating.",
    url: "https://github.com/Shamim-cse-pust/noisereduce",
  },
  {
    title: "1.2-gaming-project",
    desc: "Car racing game in C.",
    url: "https://github.com/Shamim-cse-pust/1.2-gaming-project",
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
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              {githubTag}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
