import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-overlay"></div>

        <div className="footer-content">
          {/* ABOUT */}
          <div className="footer-column">
            <h3>About Company</h3>
            <p>
              <strong>Address</strong><br />
              Bhavnagar -364004 ,
              Gujrat 
            </p>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3>Service</h3>
            <ul>
             <li>SAP Services</li>
              <li>Planning Solutions Services</li>
              <li>Staffing Services</li>
              <li>IT Training Courses</li>
            </ul>
          </div>

          {/* LINKS */}
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul className="nav-links">
         <li><a href="#hero fade-down">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025. All Rights Reserved | Powered by
          <span>⚡ creative stacks</span>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <a href="tel:+917043838310" className="call-btn">
        <FaPhoneAlt /> <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/917043838310"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
