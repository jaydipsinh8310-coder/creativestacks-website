import React from "react";
import { FaCode, FaPaintBrush, FaCamera, FaVideo } from "react-icons/fa";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        <div className="service-card">
          <FaCode />
          <h3>Web Development</h3>
        </div>

        <div className="service-card">
          <FaPaintBrush />
          <h3>UI / UX Design</h3>
        </div>

        <div className="service-card">
          <FaCamera />
          <h3>Photography</h3>
        </div>

        <div className="service-card">
          <FaVideo />
          <h3>Video Editing</h3>
        </div>
      </div>
    </section>
  );
}
