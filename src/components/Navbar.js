import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div
        className="logo"
        onClick={() =>
          document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Creative Stacks
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
