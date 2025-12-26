import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Let’s build something amazing together 🚀
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
