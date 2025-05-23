// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "../App.css";

const navLinks = [
  { href: "#", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#experience", label: "Job", id: "experience" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  {
    href: "#competitive-programming",
    label: "Programming",
    id: "competitive-programming",
  },
  { href: "#awards", label: "Awards", id: "awards" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#personal-details", label: "Personal", id: "personal-details" },
  { href: "#references", label: "References", id: "references" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Slightly larger offset for sticky navbar
      let current = "hero";
      for (const link of navLinks) {
        if (link.id === "hero") {
          if (window.scrollY < 100) {
            current = "hero";
            break;
          }
        }
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            current = link.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    setOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
    }
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
      </button>
      <ul className={`nav-links${open ? " nav-open" : ""}`}>
        {open && (
          <button
            className="navbar-close"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            &times;
          </button>
        )}
        {navLinks.map((link) => (
          <li key={link.label} className={active === link.id ? "active" : ""}>
            <a href={link.href} onClick={(e) => handleNavClick(e, link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
