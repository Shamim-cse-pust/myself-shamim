import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" required></textarea>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
