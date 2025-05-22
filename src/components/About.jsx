import React from "react";

const About = () => {
  return (
    <section id="about" className="about common">
      <h2>About Me</h2>
      <p className="about-text">
        I am <strong>Md. Shamim Miah</strong>, a dedicated{" "}
        <strong>Software Engineer</strong> at{" "}
        <strong>Brain Station-23 PLC</strong> with a B.Sc. in Computer Science
        and Engineering from <strong>Pabna University of Science and Technology ( PUST )</strong>. I thrive on solving complex
        problems and building scalable systems, currently contributing to
        digital payment solutions for <strong>Grameenphone</strong>. My
        expertise spans backend development, RESTful APIs, and full-stack web
        applications, and I am passionate about competitive programming, having
        participated in national and regional contests. I also enjoy working on
        machine learning projects and e-commerce platforms, always seeking to
        expand my knowledge and skills. I value adaptability, teamwork, and
        continuous learning, and I am committed to creating impactful software,
        sharing knowledge, and growing as a lifelong learner and mentor in the
        tech community.
      </p>
      <a
        href="/myself-shamim/resume.pdf"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;
