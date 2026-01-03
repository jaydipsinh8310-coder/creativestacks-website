import React, { Suspense, useEffect, useState, useRef } from "react";
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
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFormSubmit = () => {
    setIsSubmitting(true); // Mark that we are waiting for the iframe to load
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSuccess(true);
      setIsSubmitting(false);

      // 🔹 5 second pachi pacho form batava mate (Reset auto)
      setTimeout(() => {
        setSuccess(false);
      }, 5000); // 5000 ms = 5 seconds
    }
 
  };

  return (
    <section className="virtual-contact">
      {/* 🔹 HIDDEN IFRAME */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        ref={iframeRef}
        onLoad={handleIframeLoad}
      />

      {/* 🔹 LEFT SIDE → CONTACT FORM */}
      <div className="ui-zone">
        <div className="ui-card animate-card">
          <span className="tag">CONTACT</span>
          <h1>Connect With Our IT Team</h1>
          <p>
            We design scalable software, secure cloud solutions,
            and future-ready digital systems.
          </p>

          {!success ? (
            <form
              className="modern-form"
              autoComplete="off"
              // IMPORTANT: Change '/dev' to '/exec' after deploying as Web App
              action="https://script.google.com/macros/s/AKfycbwCTnk3YEZOheZ5ghHbN-WM7bUmQI4lVxKRd-roP5jXGym4fLAYhbXiqDFsBcS15WUwxQ/exec"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleFormSubmit}
            >
              <div className="field">
                <input type="text" name="fullname" required />
                <span className="line"></span>
                <label>Full Name</label>
              </div>

              <div className="field">
                <input type="email" name="email" required />
                <span className="line"></span>
                <label>Email Address</label>
              </div>

              <div className="field">
                <textarea rows="4" name="project" required></textarea>
                <span className="line"></span>
                <label>Project Details</label>
              </div>

              <button className="primary-btn" type="submit">
                {isSubmitting ? "Sending..." : "Send Request"}
                <span className="btn-arrow">→</span>
              </button>
            </form>
          ) : (
            <div className="success-box">
              ✅ Thank you! Your request has been sent successfully.
            </div>
          )}
        </div>
      </div>

      {/* 🔹 RIGHT SIDE → ANIMATED 3D */}
      <div className="visual-zone">
        <Canvas camera={{ position: [0, 0, isMobile ? 4.5 : 3.5] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingCore scale={isMobile ? 0.9 : 1.2} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}