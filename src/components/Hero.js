import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);

  /* ===== TYPING EFFECT ===== */
  const words = ["WEB Development", "IT Solutions", "SAP Services", "DIGITAL Marketing"];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!del && j <= words[i].length) {
        setText(words[i].substring(0, j));
        setJ(j + 1);
      } else if (del && j > 0) {
        setText(words[i].substring(0, j));
        setJ(j - 1);
      } else if (!del) {
        setDel(true);
      } else {
        setDel(false);
        setI((i + 1) % words.length);
      }
    }, del ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [j, del, i, words]);

  /* ===== GALAXY CANVAS ===== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = [];
    const STAR_COUNT = 350;
    let mx = 0,
      my = 0;

    window.addEventListener("mousemove", (e) => {
      mx = (e.clientX / w - 0.5) * 2;
      my = (e.clientY / h - 0.5) * 2;
    });

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = (Math.random() - 0.5) * w;
        this.y = (Math.random() - 0.5) * h;
        this.z = Math.random() * 2000;
        this.size = Math.random() * 1.8 + 0.3;
        this.speed = Math.random() * 6 + 2;
      }
      update() {
        this.z -= this.speed;
        if (this.z < 1) this.reset();
      }
      draw() {
        const scale = 800 / this.z;
        const x = this.x * scale + w / 2 + mx * 80;
        const y = this.y * scale + h / 2 + my * 80;
        const r = this.size * scale;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173,216,255,${Math.min(1, scale)})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < STAR_COUNT; i++) stars.push(new Star());

    function animate() {
      ctx.fillStyle = "rgba(2,6,23,0.4)";
      ctx.fillRect(0, 0, w, h);
      stars.forEach((s) => {
        s.update();
        s.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="particle-canvas" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          <span className="plain">Creative</span>{" "}
          <span className="typing">{text}</span>
          <span className="cursor">|</span>
        </h1>

        <p>Where technology meets infinite possibilities</p>

        <button className="btn primary" onClick={scrollToServices}>
          Explore Services
        </button>
      </div>
    </section>
  );
}
