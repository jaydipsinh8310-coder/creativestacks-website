import React, { useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    requestAnimationFrame(() => {
      const rotateX = (centerY - y) / 18;
      const rotateY = (x - centerX) / 18;

      card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
      `;
    });
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="contact-3d">
      <div
        className="contact-card"
        ref={cardRef}
        onPointerMove={handleMove}
        onPointerLeave={resetTilt}
      >
        <div className="contact-left">
          <h1>Let’s Connect</h1>
          <p>
            Transform your ideas into digital experiences.
            Let’s build something amazing together.
          </p>

          <div className="contact-meta">
            <span>📍 India</span>
            <span>📧 creativestack@gmail.com</span>
            <span>📞 +91 9XXXXXXXXX</span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5" />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="floating-shape shape1" />
      <div className="floating-shape shape2" />
      <div className="floating-shape shape3" />
    </section>
  );
}
