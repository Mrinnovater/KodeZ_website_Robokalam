import React, { useEffect, useState } from "react";
import "./MentorCommunity.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mentors = [
  {
    name: "Anjali VermaI",
    image: "/mentorcommunity/mentor-1.png",
    quote:
      "KodeZ isn’t just another learning platform — it’s a movement. I’ve witnessed learners transform confusion into confidence through real‑world projects...",
    footer: "“It's not just about teaching. It’s about launching futures.”",
  },
  {
    name: "Raghav Bansal",
    image: "/mentorcommunity/mentor-1.png",
    quote:
      "Every challenge is a stepping stone, not a setback. KodeZ drives a culture of curiosity and bold experimentation.",
    footer: "— “KodeZ is your launchpad to success.”",
  },
  {
    name: "Sneha Kulkarni",
    image: "/mentorcommunity/mentor-1.png",
    quote:
      "Learners here solve real‑world problems. It’s amazing to see them grow into confident developers.",
    footer: "— “Confidence through coding.”",
  },
  {
    name: "Arjun Mehta",
    image: "/mentorcommunity/mentor-1.png",
    quote:
      "I’ve seen the quietest students turn into confident speakers and doers here. That’s real transformation.",
    footer: "— “From silent to standout.”",
  },
  {
    name: "Revathi",
    image: "/mentorcommunity/mentor-1.png",
    quote:
      "KodeZ is more than a school — it’s a revolution. They teach what actually matters in the real tech world.",
    footer: "— “Code that counts.”",
  },
];

const MentorCommunity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto‑rotate every 4s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % mentors.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + mentors.length) % mentors.length);
  const next = () =>
    setCurrentIndex((i) => (i + 1) % mentors.length);

  return (
    <section className="mentor-section fade-in">
      <h2 className="mentor-heading shine-text">Mentor Community</h2>

      <div className="mentor-quote floating-box">
        <p className="quote-main">“{mentors[currentIndex].quote}”</p>
        <p className="quote-footer">{mentors[currentIndex].footer}</p>
      </div>

      {/* Desktop carousel */}
      <div className="mentor-carousel">
        <button className="nav-btn bounce" onClick={prev}>
          <FaChevronLeft />
        </button>

        <div className="avatar-strip">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className={`avatar-card ${idx === currentIndex ? "active" : ""}`}
            >
              <img src={m.image} alt={m.name} className="avatar-img" />
              <p className="avatar-name">{m.name}</p>
            </div>
          ))}
        </div>

        <button className="nav-btn bounce" onClick={next}>
          <FaChevronRight />
        </button>
      </div>

      {/* Mobile carousel (single avatar between arrows) */}
      <div className="mentor-carousel-mobile">
        <button className="nav-btn" onClick={prev}>
          <FaChevronLeft />
        </button>

        <div className="mobile-avatar">
          <img
            src={mentors[currentIndex].image}
            alt={mentors[currentIndex].name}
            className="avatar-img"
          />
          <p className="avatar-name">{mentors[currentIndex].name}</p>
        </div>

        <button className="nav-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default MentorCommunity;
