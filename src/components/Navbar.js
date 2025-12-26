import React from "react";
import "./Navbar.css";

export default function Navbar({ toggleDark }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Creative Stack</h2>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="dark-btn" onClick={toggleDark}>🌙</button>
    </nav>
  );
}
