import React from "react";
import "../App.css";

const references = [
  {
    name: "Dr. Md. Abdur Rahim",
    title: "Associate Professor and Chairman,",
    department: "Department of Computer Science and Engineering",
    university: "Pabna University of Science and Technology, Pabna, Bangladesh",
    cell: "+88 01728 548300",
    email: "rahim@pust.ac.bd",
  },
  {
    name: "Md. Shafiul Azam",
    title: "Associate Professor,",
    department: "Department of Computer Science and Engineering",
    university: "Pabna University of Science and Technology, Pabna, Bangladesh",
    cell: "+88 01742 777555",
    email: "msacse@pust.ac.bd",
  },
];

const References = () => (
  <section id="references" className="references-section common">
    <h2>References</h2>
    <div className="references-grid">
      {references.map((ref, idx) => (
        <div className="reference-card" key={idx}>
          <div className="reference-name">{ref.name}</div>
          <div className="reference-title">{ref.title}</div>
          <div className="reference-dept">{ref.department}</div>
          <div className="reference-univ">{ref.university}</div>
          <div className="reference-contact">
            <span className="reference-label">Cell:</span> {ref.cell}
          </div>
          <div className="reference-contact">
            <span className="reference-label">Email:</span>{" "}
            <a href={`mailto:${ref.email}`} className="reference-email">
              {ref.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default References;
