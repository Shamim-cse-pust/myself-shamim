import React from "react";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications common">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        <li className="certificate-card">
          <div className="certificate-title">
            Gen AI E1: Fundamentals - Unlocking the Future
          </div>
          <div className="certificate-date">Issued: September 17, 2024</div>
          <a
            href="myself-shamim/certificate/Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View Certificate
          </a>
        </li>
        <li className="certificate-card">
          <div className="certificate-title">
            Prompt Engineering Foundations: Start Talking to AI Efficiently
          </div>
          <div className="certificate-date">Issued: April 9, 2025</div>
          <a
            href="myself-shamim/certificate/Certificate2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View Certificate
          </a>
        </li>
        <li className="certificate-card">
          <div className="certificate-title">
            Digital Assets Security and Privacy
          </div>
          <div className="certificate-date">Issued: April 9, 2025</div>
          <a
            href="myself-shamim/certificate/Certificate%203.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View Certificate
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
