import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/917043838310"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;
