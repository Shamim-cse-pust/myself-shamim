import React from "react";

const About = () => {
  return (
    <section id="about" className="about common">
      <h2>About Me</h2>
      <p className="about-text">
        I am <strong>Md. Shamim Miah</strong>, a passionate and dedicated{" "}
        <strong>Software Engineer</strong> at{" "}
        <strong>Brain Station-23 PLC</strong>, one of Bangladesh’s leading
        software firms. I hold a{" "}
        <strong>Bachelor’s degree in Computer Science and Engineering</strong>{" "}
        from <strong>Pabna University of Science and Technology (PUST)</strong>.
        From the start of my academic journey, I have been driven by an
        unwavering curiosity for <strong>problem-solving</strong>,{" "}
        <strong>system-level thinking</strong>, and impactful technology
        solutions.
      </p>
      <p className="about-text">
        As part of the <strong>Payment Orchestration Layer (POL)</strong> team
        for <strong>Grameenphone</strong>, I design and maintain high-traffic,
        mission-critical systems that support digital payment infrastructures.
        This experience has deepened my expertise in{" "}
        <strong>backend development</strong>,{" "}
        <strong>RESTful architecture</strong>, and building systems with
        performance, scalability, and resilience at their core.
      </p>
      <p className="about-text">
        My professional toolbox includes developing modern web applications
        using clean architecture and REST APIs, working with relational
        databases, managing version control systems, and deploying services in
        Linux-based environments. I enjoy working across the stack—from crafting
        user-friendly frontends with responsive design to building reliable and
        secure backend systems.
      </p>
      <p className="about-text">
        Beyond my corporate role, I am an enthusiastic{" "}
        <strong>competitive programmer</strong>, having participated in contests
        like <strong>ICPC Asia Dhaka Regional</strong> (2019, 2022, 2023) and{" "}
        <strong>NCPC 2019</strong>. Regular practice on platforms such as
        Codeforces, UVA, and LeetCode has sharpened my analytical and
        algorithmic skills.
      </p>
      <p className="about-text">
        I am also passionate about <strong>machine learning</strong>, with
        projects like a skin disease prediction system using deep learning (CNN,
        TensorFlow, Keras, OpenCV), and <strong>Boighor</strong>, an online
        bookstore platform demonstrating my full-stack and e-commerce workflow
        capabilities.
      </p>
      <p className="about-text">
        What truly drives me is the impact technology creates. I aspire to
        contribute to <strong>teaching, mentorship, and research</strong>,
        empowering others while growing as a lifelong learner. I value{" "}
        <strong>adaptability, integrity, teamwork</strong>, and continuous
        growth. My ultimate goal is to create meaningful software solutions,
        contribute to community knowledge, and become a well-rounded engineer
        and educator.
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
