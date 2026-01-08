import { useRef } from "react";
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn, FaArrowRight } from "react-icons/fa";
import "./Services.css";

const ServiceCard = ({ icon, title, text, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={cardRef} 
      className="hyper-card" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--delay": `${index * 0.1}s` }}
      onClick={() => window.location.href = "#contact"} // ક્લિક કરવા પર ફોર્મ પર જશે
    >
      <div className="card-content">
        <div className="card-main-info">
          <div className="icon-wrap">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        
        {/* આ બટન હોવર કરવા પર જ દેખાશે */}
        <div className="explore-action">
          <span>Explore This Service</span>
          <FaArrowRight className="small-arrow" />
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="services-master">
      <div className="cyber-grid-bg" />
      <div className="services-header">
        <span className="pre-title">Expertise</span>
        <h2 className="services-main-title">Our <span className="highlight">Capabilities</span></h2>
      </div>

      <div className="hyper-grid">
        <ServiceCard index={1} icon={<FaCode />} title="Engineered Systems" text="High-performance architectures built for ultimate scale." />
        <ServiceCard index={2} icon={<FaPaintBrush />} title="Visual Strategy" text="Interfaces that convert users through high-end design." />
        <ServiceCard index={3} icon={<FaVideo />} title="Motion Narrative" text="Cinematic digital media and immersive animations." />
        <ServiceCard index={4} icon={<FaBullhorn />} title="Growth Mechanics" text="Algorithmic precision in scaling your digital reach." />
      </div>
    </section>
  );
}