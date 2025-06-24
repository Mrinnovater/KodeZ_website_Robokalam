import React, { useState, useEffect } from "react";
import "./SuccessStories.css";

const SuccessStories = () => {
  const beforeBullets = [
    "Struggled to connect college theory to industry reality.",
    "Lacked portfolio‑worthy, hands‑on project experience.",
    "Nervous in interviews and technical discussions.",
    "Confused about which tools, languages, or roles to pursue.",
  ];

  const afterBullets = [
    "Built and deployed real‑world apps with AI, web, and cloud integration.",
    "Confidently presents work, handles peer code reviews, and leads demos.",
    "Mastered tech stacks via guided sprints and mentor‑backed challenges.",
    "Lands interviews with a job‑ready portfolio and clarity in career goals.",
  ];

  const companyLogos = [
    { src: "/successstories/sp1.png", alt: "Infosys" },
    { src: "/successstories/cb1.png", alt: "Microsoft" },
    { src: "/successstories/Al1.png", alt: "Tech Mahindra" },
    { src: "/successstories/accenture.png", alt: "Accenture" },
    { src: "/successstories/cognizant.png", alt: "Cognizant" },
    { src: "/successstories/capgemini.png", alt: "capgemini" },
    { src: "/successstories/citizens-bank.jpg", alt: "citizens-bank" },
    { src: "/media/deloitte.png", alt: "deloitte" },
    { src: "/successstories/devdolphins.png", alt: "devdolphins" },
    { src: "/successstories/genpact.jpg", alt: "genpact" },
    { src: "/successstories/hcltech.png", alt: "hcltech" },
    { src: "/successstories/hexaware.png", alt: "hexaware" },
    { src: "/successstories/wipro.png", alt: "wipro" },
    { src: "/successstories/netcracker.png", alt: "netcracker" },
  ];

  const testimonials = [
    {
      src: "/successstories/I3GvDsnapedit1725291560218.jpg",
      name: "Abhinaya V, Cognizant",
      text: "“KodeZ made me job-ready, not just certificate-ready — I walked into interviews with solutions, not questions.”",
    },
    {
      src: "/successstories/vwBcYuntitleddesign.png",
      name: "Vikram A, Accenture",
      text: "“From debugging code to pitching ideas, I transformed from a learner to a leader.”",
    },
    {
      src: "/successstories/nVMWvsnapedit1724834926932.png",
      name: "Samhitha Y, Infosys",
      text: "KodeZ challenged my limits — now, solving real-world tech problems is my morning routine.",
    },
    {
      src: "/successstories/A7DpYcrct.png",
      name: "Nikhila S, Cognizant",
      text: "KodeZ turned my GitHub into a hiring magnet — every project tells a story recruiters want to hear.",
    },
    {
      src: "/successstories/30xf9snapedit1724834616447.jpg",
      name: "Shruthi G, Hexaware",
      text: "Before KodeZ, I Googled answers. After KodeZ, I started answering on Stack Overflow.",
    },
  ];

  const [logoIndex, setLogoIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTestIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const getSlice = (arr, idx, type = "") => {
    const isTabletOrMobile = window.innerWidth <= 1024;

    if (type === "testimonial" && isTabletOrMobile) {
      return [arr[idx % arr.length]];
    }

    return isTabletOrMobile
      ? [arr[idx % arr.length]]
      : [
          arr[idx % arr.length],
          arr[(idx + 1) % arr.length],
          arr[(idx + 2) % arr.length],
        ];
  };

  return (
    <section className="stories-section" id="success">
      <p className="stories-pill">Success Stories (Alumni Highlights)</p>

      <div className="panel">
        <h3 className="panel-heading">🌟 From Curious to Career‑Ready</h3>
        <p className="panel-sub">
          How KodeZ by Robokalam Technologies transforms ambitious learners into top‑tier tech professionals.
        </p>

        <div className="before-after-wrapper">
          <div className="before-card">
            <ul>
              {beforeBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="arrow-wrapper">
            <span className="arrow arrow-desktop">➡️</span>
            <span className="arrow arrow-mobile">⬇️</span>
          </div>

          <div className="after-card">
            <ul>
              {afterBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="panel">
        <h3 className="panel-heading">🔥 Where KodeZ Talent Ignites Impact</h3>
        <div className="carousel">
          <button
            className="nav-arrow"
            onClick={() => setLogoIndex((logoIndex - 1 + companyLogos.length) % companyLogos.length)}
          >
            ‹
          </button>

          {getSlice(companyLogos, logoIndex).map(({ src, alt }, i) => (
            <img key={i} src={src} alt={alt} className="logo-slide" />
          ))}

          <button
            className="nav-arrow"
            onClick={() => setLogoIndex((logoIndex + 1) % companyLogos.length)}
          >
            ›
          </button>
        </div>
      </div>

      <div className="panel">
        <h3 className="panel-heading">🧠 What They Say When No One’s Watching</h3>
        <div className="carousel testimonial-carousel">
          <button
            className="nav-arrow"
            onClick={() =>
              setTestIndex((testIndex - 1 + testimonials.length) % testimonials.length)
            }
          >
            ‹
          </button>

          {getSlice(testimonials, testIndex, "testimonial").map(({ src, name, text }, i) => (
            <div key={i} className="test-card">
              <img src={src} alt={name} />
              <p className="test-text">“{text}”</p>
              <span className="test-name">— {name}</span>
            </div>
          ))}

          <button
            className="nav-arrow"
            onClick={() => setTestIndex((testIndex + 1) % testimonials.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;