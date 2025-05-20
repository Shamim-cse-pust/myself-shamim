import React from "react";

const Education = () => {
  return (
    <section id="education" className="education common">
      <h2>Education</h2>
      <div className="education-grid">
        <div className="edu-card">
          <h3>B.Sc. Eng. in Computer Science and Engineering</h3>
          <p className="edu-institute">
            <strong>Pabna University of Science and Technology</strong>, Pabna,
            Bangladesh
          </p>
          <ul className="edu-details">
            <li>
              <strong>Session:</strong> 2023 (Held in 2021)
            </li>
            <li>
              <strong>CGPA:</strong> 3.79 out of 4.00
            </li>
            <li>
              <strong>Thesis:</strong> Skin Disease Classification Using CNN
              with Transfer Learning
            </li>
          </ul>
        </div>
        <div className="edu-card">
          <h3>Higher Secondary Certificate (HSC)</h3>
          <p className="edu-institute">
            <strong>Govt. Debendra College</strong>, Manikganj
          </p>
          <ul className="edu-details">
            <li>
              <strong>Passing Year:</strong> 2017
            </li>
            <li>
              <strong>Group:</strong> Science
            </li>
            <li>
              <strong>Board:</strong> Dhaka
            </li>
          </ul>
        </div>
        <div className="edu-card">
          <h3>Secondary School Certificate (SSC)</h3>
          <p className="edu-institute">
            <strong>Barangail Gopal Chandra High School</strong>, Shibaloy,
            Manikganj
          </p>
          <ul className="edu-details">
            <li>
              <strong>Passing Year:</strong> 2015
            </li>
            <li>
              <strong>Group:</strong> Science
            </li>
            <li>
              <strong>Board:</strong> Dhaka
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
