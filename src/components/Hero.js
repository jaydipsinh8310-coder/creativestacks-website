import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);
  const transitionRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      const particleCount = Math.min(Math.floor(w * 0.15), 150);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.history = [];
        this.maxLength = Math.floor(Math.random() * 15 + 10);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) this.history.shift();
      }
      draw() {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
        ctx.lineWidth = 1;
        for (let i = 0; i < this.history.length - 1; i++) {
          ctx.moveTo(this.history[i].x, this.history[i].y);
          ctx.lineTo(this.history[i+1].x, this.history[i+1].y);
        }
        ctx.stroke();
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.15)";
      ctx.fillRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    init();
    animate();
    return () => window.removeEventListener("resize", init);
  }, []);

  const handleExplore = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    // Logic for smooth scroll after the liquid animation finishes
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 800);
  };

  return (
    <section className={`flux-hero ${isTransitioning ? "exit-scale" : ""}`}>
      {/* Liquid Wipe Layer */}
      <div className={`liquid-layer ${isTransitioning ? "active" : ""}`} />
      
      <canvas ref={canvasRef} className="flux-canvas" />
      
      <div className="flux-content">
        <div className="hero-tagline">
          <span className="dot"></span> Pioneering the Digital Frontier
        </div>
        
        <h1 className="kinetic-text">
          <span className="word">WE BUILD</span>
          <span className="word outline">FUTURE</span>
          <span className="word gradient">SYSTEMS</span>
        </h1>

        <p className="flux-subtext">
          We bridge the gap between abstract imagination and high-performance reality. 
        </p>

        <div className="flux-button-group">
          <button className="flux-btn primary" onClick={handleExplore}>
            Explore Services
            <div className="btn-ray"></div>
          </button>
          <button className="flux-btn ghost" onClick={() => window.location.href='#contact'}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="geometric-blur"></div>
    </section>
  );
}