// src/HeroSection.js
import React from "react";
import "./HeroSection.css";

/* give openEnroll a safe default in case it’s not supplied */
export default function HeroSection({ openEnroll = () => {} }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      className="hero-container"
      style={
        isMobile
          ? {
              backgroundImage: `url(${process.env.PUBLIC_URL}/img.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="hero-left">
        <h1 className="hero-title">
          <span className="kode">Kode</span>
          <span className="z">Z</span>
          <span className="tagline">: Where Skills Meet Opportunity.</span>
        </h1>

        <p className="hero-subheading">
          Hands‑on courses, personalized guidance, and guaranteed placement
          support — all in one place.
        </p>

        <div className="hero-description">
          At KodeZ, we make world‑class tech education accessible and affordable.
          Our mentor‑led programs equip aspiring developers and innovators with
          real‑world skills, hands‑on experience, and career‑focused outcomes —
          from landing top jobs to launching startups.
        </div>

        {/* IMPORTANT: explicit button type so it never submits a form */}
        <button
          type="button"
          className="enroll-btn"
          onClick={openEnroll}
        >
          Enroll Now →
        </button>
      </div>

      {!isMobile && (
        <div className="hero-right">
          <img
            src={`${process.env.PUBLIC_URL}/img.png`}
            alt="KodeZ Hero"
            className="hero-image"
          />
        </div>
      )}
    </section>
  );
}
