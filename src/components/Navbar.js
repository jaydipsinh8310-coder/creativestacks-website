import React from "react";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Creative Stack</div>

      <ul className="nav-links">
         <li><a href="#Home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
      </div>
    </nav>
  );
}
