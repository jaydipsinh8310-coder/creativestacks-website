import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./DarkMode.css";

const DarkMode = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className="dark-toggle"
      onClick={() => setDark(!dark)}
      aria-label="Toggle Dark Mode"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkMode;
