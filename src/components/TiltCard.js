import { useRef } from "react";
import "./TiltCard.css";

export default function TiltCard({ icon, title, text }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = -(y - midY) / 18;
    const rotateY = (x - midX) / 18;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(12px)
    `;

    card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
  };

  const reset = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={cardRef}
      className="tilt-card"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="tilt-glare"></div>

      <div className="tilt-content">
        <div className="tilt-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
