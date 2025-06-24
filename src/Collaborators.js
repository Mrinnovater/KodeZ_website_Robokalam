// Collaborators.js
import React from "react";
import "./Collaborators.css";

const collaborators = [
  { src: "/logos/nvidia.jpg", alt: "NVIDIA" },
  { src: "/logos/microsoft.jpg", alt: "Microsoft" },
  { src: "/logos/dell.jpg", alt: "Dell" },
  { src: "/logos/rubrix.jpg", alt: "Rubrix" },
  { src: "/logos/thub.jpg", alt: "T‑Hub" },
  { src: "/logos/dpiit.jpg", alt: "DPIIT" },
];

const alumni = [
  { src: "/logos/utd.jpg", alt: "UTD" },
  { src: "/logos/capgemini.jpg", alt: "Capgemini" },
  { src: "/logos/techmahindra.png", alt: "Tech Mahindra" },
  { src: "/logos/fom.jpg", alt: "FOM" },
  { src: "/logos/liverpool.jpg", alt: "Liverpool" },
  { src: "/logos/kalwings.jpg", alt: "Kalwings" },
];

const associated = [
  "/logos/startupindia.png", "/logos/govt.jpg", "/logos/thub.jpg",
  "/logos/wen.jpg", "/logos/aic_raise.jpg", "/logos/dpiit.jpg",
  "/logos/ashaer.jpg", "/logos/kalwings.jpg", "/logos/tsic.jpg",
  "/logos/niti.jpg", "/logos/atalinnovation.jpg", "/logos/samaritans.jpg",
  "/logos/learncbse.jpg", "/logos/aicte.jpg", "/logos/commerce.jpg",
  "/logos/it.jpg", "/logos/virtual.png", "/logos/iot.jpg",
  "/logos/code_to_change.jpg", "/logos/gradrise.jpg",
];

/* Duplicate list so the marquee loops seamlessly */
const loopLogos = [...associated, ...associated];

const Collaborators = () => (
  <section className="collaborators-section">
    {/* ---------- Our Collaborators ---------- */}
    <h2 className="collab-heading">Our Collaborators</h2>
    <div className="collab-grid">
      {collaborators.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} />
      ))}
    </div>

    {/* ---------- We Associated With (1 marquee row) ---------- */}
    <h2 className="collab-heading">We Associated With</h2>
    <div className="scroll-container scroll-right">
      <div className="scroll-track">
        {loopLogos.map((src, i) => (
          <img key={i} src={src} alt={`logo-${i}`} />
        ))}
      </div>
    </div>

    {/* ---------- Alumni ---------- */}
    <h2 className="collab-heading">
      Learn from the best Alumni of Global Organizations
    </h2>
    <div className="collab-grid">
      {alumni.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} />
      ))}
    </div>
  </section>
);

export default Collaborators;
