// src/Courses.js
import React from "react";
import "./Courses.css";

const COURSES = [
  {
    title: "Cyber Security",
    image: "/images/cyber.jpg",
    mode: "Online/Offline",
    includes: "Ethical Hacking, Threat Analysis",
    buttonText: "Secure Your Future →",
  },
  {
    title: "Python / AI",
    image: "/images/python.jpg",
    mode: "Online/Offline",
    includes: "Projects, Chatbots, Deep Learning",
    buttonText: "Start Learning AI →",
  },
  {
    title: "Java Developer",
    image: "/images/java.jpg",
    mode: "Online/Offline",
    includes: "Projects, Spring Boot, API, Support",
    buttonText: "Become Real-World Pro →",
  },
  {
    title: "Web Development",
    image: "/images/web.jpg",
    mode: "Online/Offline",
    includes: "HTML, CSS, JS, React, Projects",
    buttonText: "Launch Your Dev Career →",
  },
];

export default function Courses({ openEnroll }) {
  const callEnroll = openEnroll || (() => {});

  return (
    <section className="courses-section">
      <h2 className="section-title">Courses we offer</h2>

      <div className="course-grid">
        {COURSES.map((c, idx) => (
          <div className="course-card" key={idx}>
            <img src={c.image} alt={c.title} className="course-img" />

            <h3 className="course-title">{c.title}</h3>

            <ul className="course-details">
              <li>Mode: {c.mode}</li>
              <li>Includes: {c.includes}</li>
            </ul>

            <button
              type="button"
              className="course-btn"
              onClick={(e) => {
                e.preventDefault();
                callEnroll();
              }}
            >
              {c.buttonText}
            </button>
          </div>
        ))}
      </div>

      <p className="note">*on company demand…</p>
    </section>
  );
}
