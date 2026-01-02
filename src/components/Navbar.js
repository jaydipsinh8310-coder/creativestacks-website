import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
     <nav className="navbar">
      {/* WEBSITE NAME */}
      <div className="logo">Creative Stacks</div>
      {/* NAVIGATION LINKS */}
       <ul className="nav-links">
         <li><a href="#hero fade-down">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
