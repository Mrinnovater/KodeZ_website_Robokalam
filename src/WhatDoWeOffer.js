// src/WhatDoWeOffer.js
import React from "react";
import "./WhatDoWeOffer.css";

const FEATURES = [
  {
    icon: "fa-solid fa-video",
    title: "Live learning",
    text: "Learn live with top educators, chat with teachers and other attendees, and get your doubts cleared.",
  },
  {
    icon: "fa-solid fa-book",
    title: "Structured learning",
    text: "Our curriculum is designed by experts to make sure you get the best learning experience.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Community & Networking",
    text: "Interact and network with like‑minded folks from various backgrounds in exclusive chat groups.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Learn with the best",
    text: "Stuck on something? Discuss it with your peers and the instructors in the inbuilt chat groups.",
  },
  {
    icon: "fa-solid fa-list-check",
    title: "Practice tests",
    text: "With quizzes and live tests, practice what you learned and track your class performance.",
  },
  {
    icon: "fa-solid fa-medal",
    title: "Get certified",
    text: "Flaunt your skills with course certificates. Showcase them on LinkedIn with one click.",
  },
];

const WhatDoWeOffer = () => (
  <section className="offer-section">
    <h2 className="offer-heading">What do we offer</h2>

    <div className="offer-grid">
      {FEATURES.map((f) => (
        <div key={f.title} className="offer-card">
          <i className={`offer-icon ${f.icon}`}></i>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatDoWeOffer;
