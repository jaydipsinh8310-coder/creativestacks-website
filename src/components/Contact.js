import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import "./Contact.css";

function FloatingCore({ scale }) {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          emissive="#38bdf8"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function VirtualContact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="virtual-contact">
      {/* 3D Section */}
      <div className="visual-zone">
        <Canvas camera={{ position: [0, 0, isMobile ? 4.5 : 3.5] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingCore scale={isMobile ? 0.7 : 1} />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Section */}
      <div className="ui-zone">
        <div className="ui-card animate-card">
          <span className="tag">CONTACT</span>
          <h1>Connect With Our IT Team</h1>
          <p>
            We design scalable software, secure cloud solutions,
            and future-ready digital systems.
          </p>

          <form className="modern-form" autoComplete="off">
            <div className="field">
              <input type="text" required />
              <span className="line"></span>
              <label>Full Name</label>
            </div>

            <div className="field">
              <input type="email" required />
              <span className="line"></span>
              <label>Email Address</label>
            </div>

            <div className="field">
              <textarea rows="4" required></textarea>
              <span className="line"></span>
              <label>Project Details</label>
            </div>

            <button className="primary-btn" type="submit">
              Send Request
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
