import { FaCode, FaPaintBrush, FaVideo, FaBullhorn } from "react-icons/fa";
import TiltCard from "./TiltCard";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="service-grid">
        <TiltCard
          icon={<FaCode />}
          title="Web Development"
          text="High-performance websites & scalable applications."
        />

        <TiltCard
          icon={<FaPaintBrush />}
          title="UI / UX Design"
          text="Human-centric interfaces with modern aesthetics."
        />

        <TiltCard
          icon={<FaVideo />}
          title="Video & Media"
          text="Cinematic edits, motion graphics & branding."
        />

        <TiltCard
          icon={<FaBullhorn />}
          title="Digital Marketing"
          text="Growth-driven campaigns with measurable ROI."
        />
      </div>
    </section>
  );
}
