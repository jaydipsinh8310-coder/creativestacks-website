import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  /* ===== 3D PARALLAX ===== */
  useEffect(() => {
    const hero = heroRef.current;
    const move = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;
      hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ===== PARTICLES ===== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    const dots = Array.from({ length: 220 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d, i) => {
        d.x += d.dx;
        d.y += d.dy;

        if (d.x < 0 || d.x > w) d.dx *= -1;
        if (d.y < 0 || d.y > h) d.dy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.85)";
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const dx = d.x - dots[j].x;
          const dy = d.y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(56,189,248,${1 - dist / 110})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  /* ===== SPLIT TEXT ===== */
  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char" style={{ '--i': i }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-spotlight" />

      <div className="hero-inner" ref={heroRef}>
        <h1 className="hero-title">
          <span className="line">{splitText("We Build")}</span>
          <span className="line-tech">{splitText("Technology")}</span>
          <span className="line">{splitText("That Drives Growth")}</span>
        </h1>

        <p className="hero-sub">
          High-performance digital solutions crafted for scale & impact
        </p>

        <div className="hero-cta">
          <a href="#services" className="btn primary">Our Services</a>
          <a href="#contact" className="btn ghost">Contact Us</a>
        </div>
      </div>
    </section>
  );
}