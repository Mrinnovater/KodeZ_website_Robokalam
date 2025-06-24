import React from "react";
import "./WhyCompaniesPrefer.css";

const reasons = [
  {
    title: "Curriculum Wired for Industry 5.0",
    description:
      "KodeZ doesn’t follow trends — we anticipate them. Our curriculum is co‑created with industry disruptors, embedding tomorrow’s skills into today’s learning.",
    quote:
      "KodeZ grads hit the ground running. Their skillset mirrors what we use daily.",
    author: "Lead Engineer, Infosync AI",
  },
  {
    title: "Built in the Real World, for the Real World",
    description:
      "KodeZ learners don’t just build portfolios — they architect solutions. From scalable apps to AI‑driven prototypes, they’ve already solved problems that matter.",
    quote:
      "The project quality was indistinguishable from our interns. Impressive for pre‑final‑year students.",
    author: "CTO, GridNova Solutions",
  },
  {
    title: "Human‑Centric Edge",
    description:
      "In the age of automation, soft skills are the new superpower. We train learners to pitch, persuade, and lead — not just code.",
    quote:
      "They don’t just solve problems; they collaborate, communicate, and take ownership. That’s rare.",
    author: "Hiring Manager, QuantumStack Inc.",
  },
];

const WhyCompaniesPrefer = () => (
  <section className="companies-section fade-slide">
    <div className="content-wrap">
      <div className="section-title pulse-badge">
        Why Top Companies Prefer Our Learners
      </div>

      {reasons.map((r, i) => (
        <div className="reason-block pulse-card" key={i}>
          <div className="reason-title">
            <span className="checkmark shake-icon">✅</span>
            {r.title}
          </div>

          <div className="reason-description">{r.description}</div>

          <div className="quote-box slide-in">
            <div className="quote-icon">💬</div>
            <div className="quote-text">“{r.quote}”</div>
            <div className="quote-author">— {r.author}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyCompaniesPrefer;
