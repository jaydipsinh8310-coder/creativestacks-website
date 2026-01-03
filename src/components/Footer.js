import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import "./Footer.css";

/* 3D Core */
function AboutCore() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={1.2}>
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          emissive="#38bdf8"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function About() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about-section">
      {/* 3D */}
      <div className="about-3d">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <AboutCore />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* CONTENT */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="tag">ABOUT US</span>
        <h1>Building Digital Systems That Scale</h1>

        <p>
          We are a technology-driven IT company focused on building
          scalable, secure, and high-performance digital solutions
          for modern businesses.
        </p>

        {/* WHAT WE DO */}
        <div className="about-lines">
          {[
            "Custom Web & Application Development",
            "Enterprise SAP Consulting & Support",
            "Cloud-Ready & Secure Architecture",
            "UI/UX Design with Performance Focus",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="line-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="dot" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>

        {/* QUICK LINKS */}
        <div className="about-links">
          <span onClick={() => scrollTo("services")}>
            → Explore Our Services
          </span>
          <span onClick={() => scrollTo("contact")}>
            → Start a Project
          </span>
        </div>

        {/* ADDRESS */}
        <div className="about-address">
          <h3>Office Address</h3>
          <p>
            Bhavnagar – 364004 <br />
            Gujarat, India
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="about-footer">
          © {new Date().getFullYear()} Creative Stacks. All Rights Reserved.  for more info.~mail on creativestack0@gmail.com
        </div>
      </motion.div>
    </section>
  );
}
