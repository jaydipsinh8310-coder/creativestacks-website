import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      ["hero", "services", "contact","about",].forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  /* Desktop mouse-follow 3D tilt */
  const handleMouseMove = (e) => {
    if (isTouchDevice) return;

    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    el.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(25px)
    `;
  };

  const resetTilt = (e) => {
    if (isTouchDevice) return;
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO */}
      <div className="logo" onClick={() => scrollTo("hero")}>
        Creative<span>Stacks</span>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {[
          { id: "hero", label: "Home" },
          { id: "services", label: "Services" },
          { id: "contact", label: "Contact" },
          { id: "about", label: "About" },
        ].map((item) => (
          <li
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => scrollTo(item.id)}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
          >
            <span className="nav-text">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
