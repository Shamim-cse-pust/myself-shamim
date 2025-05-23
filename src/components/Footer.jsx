import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Md. Shamim Miah
        <span className="heart" title="Made with love">
          ♥
        </span>
      </p>
    </footer>
  );
};

export default Footer;
