import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AwardsRecognization.css";

const AwardsRecognization = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const logos = [
    { src: "/awardsandrecognization/QB8mg12l_400x400.jpg", alt: "Cert 1" },
    { src: "/awardsandrecognization/6759bf1bee427e4263466c6e_Thumbnail 2.png", alt: "Cert 2" },
    { src: "/awardsandrecognization/Screenshot 2025-06-14 143939.png", alt: "Cert 3" },
    { src: "/awardsandrecognization/images.png", alt: "Cert 4" },
    { src: "/awardsandrecognization/Screenshot 2025-06-14 004409.png", alt: "Cert 5" },
    { src: "/awardsandrecognization/Screenshot 2025-06-14 144033.png", alt: "Cert 6" },
  ];

  const awardGallery = [
    {
      src: "/awardsandrecognization/qfftEscreenshot20240902194711.png",
      cap: 'Robokalam receiving "Tech For Good" award at T‑Hub',
    },
    {
      src: "/awardsandrecognization/CEJOkscreenshot20240902194751.png",
      cap: "Support for Robothon by Ministry of Education, TS",
    },
    {
      src: "/awardsandrecognization/OBOLjscreenshot20240902194609.png",
      cap: "National Runner‑up for IoT solutions",
    },
  ];

  const achievements = [
    { value: "66+", labelTop: "Students Placements", labelBottom: "in 2023" },
    { value: "83+", labelTop: "Students Placements", labelBottom: "in 2024" },
    { value: "1200+", labelTop: "And Internships for", labelBottom: "Students Globally" },
  ];

  return (
    <section className="awards-section" id="awards">
      <h2 className="awards-heading" data-aos="fade-down">Awarded & Certified By</h2>
      <img
        src="/awardsandrecognization/award-design-line-desktop-2x.png"
        alt=""
        className="divider-img"
        data-aos="zoom-in"
      />

      {/* Logos */}
      <div className="awards-logo-grid">
        {logos.map(({ src, alt }, i) => (
          <div className="awards-logo-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <img src={src} alt={alt} className="awards-logo-img" />
          </div>
        ))}
      </div>

      {/* Awards */}
      <h2 className="awards-heading" data-aos="fade-right">Awards</h2>
      <div className="awards-gallery">
        {awardGallery.map(({ src, cap }, i) => (
          <figure key={i} className="award-card" data-aos="flip-left" data-aos-delay={i * 150}>
            <img src={src} alt={cap} />
            <figcaption>{cap}</figcaption>
          </figure>
        ))}
      </div>

      {/* Achievements */}
      <h2 className="awards-heading" data-aos="fade-left">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map(({ value, labelTop, labelBottom }, i) => (
          <div key={i} className="ach-item" data-aos="zoom-in-up" data-aos-delay={i * 150}>
            <p className="top">{labelTop}</p>
            <div className="bubble bubble-animate">{value}</div>
            <p className="bottom">{labelBottom}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsRecognization;
