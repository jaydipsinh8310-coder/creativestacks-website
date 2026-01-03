import {
  FaCode,
  FaPaintBrush,
  FaCamera,
  FaVideo,
  FaBullhorn,
  FaCogs,
  FaMobileAlt,
  FaShoppingCart,
} from "react-icons/fa";

import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="service-grid">
        <div className="service-card">
          <FaCode />
          <h3>Web Development</h3>
          <p>
            High-performance websites and web apps using modern technologies.
          </p>
        </div>

        <div className="service-card">
          <FaPaintBrush />
          <h3>UI / UX Design</h3>
          <p>
            User-focused designs with clean layouts and smooth experiences.
          </p>
        </div>

        <div className="service-card">
          <FaCamera />
          <h3>Photography</h3>
          <p>
            Professional photography for brands, products, and promotions.
          </p>
        </div>

        <div className="service-card">
          <FaVideo />
          <h3>Video Editing</h3>
          <p>
            Creative video editing, reels, promos, and brand storytelling.
          </p>
        </div>

        <div className="service-card">
          <FaBullhorn />
          <h3>Digital Marketing</h3>
          <p>
            SEO, social media marketing, and performance-driven campaigns.
          </p>
        </div>

        <div className="service-card">
          <FaCogs />
          <h3>SAP Services</h3>
          <p>
            SAP implementation, support, and enterprise business solutions.
          </p>
        </div>

        {/* New Service */}
        <div className="service-card">
          <FaMobileAlt />
          <h3>App Development</h3>
          <p>
            Native and cross-platform mobile apps tailored to your business needs.
          </p>
        </div>

        {/* New Service */}
        <div className="service-card">
          <FaShoppingCart />
          <h3>Shopify Store Setup</h3>
          <p>
            Complete Shopify store setup, theme customization, and e-commerce solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
