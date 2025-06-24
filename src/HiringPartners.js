// HiringPartners.js
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HiringPartners.css";
import bgImage from './assets/hiring-partners-bg.png';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  "/media/accenture.png",
  "/media/aic_raise.jpg",
  "/media/aicte.jpg",
  "/media/ashaer.jpg",
  "/media/atalinnovation.jpg",
  "/media/capgemini.png",
  "/media/citizens-bank.jpg",
  "/media/code_to_change.jpg",
  "/media/cognizant.png",
  "/media/commerce.jpg",
  "/media/dell.jpg",
  "/media/deloitte.png",
  "/media/devdolphins.png",
  "/media/dpiit.jpg",
  "/media/fom.jpg",
  "/media/genpact.jpg",
  "/media/global.jpg",
  "/media/govt.jpg",
  "/media/gradrise.jpg",
  "/media/hcltech.png",
  "/media/hexaware.png",
  "/media/infosys.png",
  "/media/innova.webp",
  "/media/iot.jpg",
  "/media/it.jpg",
  "/media/kalwings.jpg",
  "/media/kritikal.jpg",
  "/media/learncbse.jpg",
  "/media/liverpool.jpg",
  "/media/ltimindtree.jpg",
  "/media/microsoft.jpg",
  "/media/mu-sigma.png",
  "/media/nelsis.jpg",
  "/media/netcracker.jpg",
  "/media/niti.jpg",
  "/media/nvidia.jpg",
  "/media/rubrix.jpg",
  "/media/samaritans.jpg",
  "/media/startupindia.png",
  "/media/tcs.png",
  "/media/techmahindra.png",
  "/media/thub.jpg",
  "/media/tsic.jpg",
  "/media/utd.jpg",
  "/media/virtual.png",
  "/media/wen.jpg",
  "/media/wipro.png",
  "/media/zf.jpg"
];

const HiringPartners = ({ setIsEnrollOpen }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });

    gsap.from(".logo-img", {
      scrollTrigger: {
        trigger: ".logo-grid",
        start: "top 80%",
        toggleActions: "play none none reset"
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <section
      className="partners-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      data-aos="fade-up"
    >
      <h2>Trusted by 500+ Hiring Partners</h2>
      <div className="logo-grid">
        {logos.map((logo, idx) => (
          <img
            src={logo}
            alt={`Partner logo ${idx + 1}`}
            key={idx}
            className="logo-img"
          />
        ))}
      </div>

      {/* ✅ Button triggers enroll modal */}
      <button className="enroll-btn" onClick={() => setIsEnrollOpen(true)}>
        Enroll Now →
      </button>
    </section>
  );
};

export default HiringPartners;
