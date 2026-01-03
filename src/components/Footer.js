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
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="tag">ABOUT US</span>

        <h1>Meet the Minds Behind Innovation</h1>

        <p>
          We are a technology-driven team building scalable,
          secure and future-ready digital products.
        </p>

        {/* TEAM */}
        <div className="team-grid">
          {[
            {
              name: "Jaydipsinh Parmar",
            },
            {
              name: "Harshdipsinh jadeja",
              
            },
            {
              //img: ui,
              name: "Jenil dave",
            },
            {
              //img: ui,
              name: "Harsh baraiya",
            },
            {
              //img: ui,
              name: "Harsh dave",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="team-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </motion.div>
            
          ))}
        </div>
      </motion.div>
    </section>
  );
}
