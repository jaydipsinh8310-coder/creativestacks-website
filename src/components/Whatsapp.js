import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  const phoneNumber = "917043838310";

  const whatsappMessage =
    "Hello 👋, I visited your website and would like to know more about your services.";

  const openWhatsApp = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Call Button - LEFT */}
      <a href="tel:+917043838310" className="call-float heartbeat">
        <i className="fas fa-phone"></i>
      </a>

      {/* WhatsApp Button - RIGHT */}
      <a
        href="/"
        onClick={openWhatsApp}
        className="whatsapp-float heartbeat"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Whatsapp;
