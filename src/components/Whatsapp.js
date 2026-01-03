import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <>
      {/* Call Button - LEFT */}
      <a href="tel:+91XXXXXXXXXX" className="call-float heartbeat">
        <i className="fas fa-phone"></i>
      </a>

      {/* WhatsApp Button - RIGHT */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="whatsapp-float heartbeat"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Whatsapp;
