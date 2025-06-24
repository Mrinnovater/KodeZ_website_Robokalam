// src/aboutmentor.js
import React, { useState } from 'react';
import './aboutmentor.css';

import mentor1 from '../assets/mentor-1.png';
import mentor2 from '../assets/mentor-1.png';
import mentor3 from '../assets/mentor-1.png';
import mentor4 from '../assets/mentor-1.png';

const mentors = [
  {
    image: mentor1,
    title: 'Cybersecurity',
    name:  'Anjali Verma 🇮',
    rating: '4.8 (15 reviews)',
    subtitle:
      'Ex‑Cisco | SOC Analyst | Threat Hunter | Cybersecurity Mentor at Cisco\n10y Exp | Top Cyber Mentor | Network Security Expert | Blue Team Specialist',
    description:
      'With a solid background in securing enterprise networks and handling real‑world threat scenarios, Anjali helps learners build a strong career foundation in cybersecurity with hands‑on tools and red/blue team practice.',
    skills: ['Network Security','Ethical Hacking','Incident Response','Linux Forensics'],
  },
  {
    image: mentor2,
    title: 'Python + AI/ML',
    name:  'Raghav Bansal',
    rating: '4.6 (18 reviews)',
    subtitle:
      'Ex‑Infosys | ML Engineer | Python Developer | AI Coach at Infosys\n8y Exp | AI Mentor | NLP & Vision Expert | Python Core Trainer',
    description:
      'Raghav blends academic clarity with real‑world Python and AI skills — from model building to deployment. His mentoring focuses on hands‑on projects like chatbots, image classification, and automation.',
    skills: ['Python','Machine Learning','Pandas','TensorFlow','Flask','AI Deployment'],
  },
  {
    image: mentor3,
    title: 'Full Stack Java Development',
    name:  'Sneha Kulkarni',
    rating: '4.9 (22 reviews)',
    subtitle:
      'Ex‑TCS | Java Developer | Backend Lead | Full Stack Mentor at TCS\n11y Exp | Java Spring Expert | Placement‑Oriented Mentor | Project Coach',
    description:
      'Sneha transforms Java learners into full‑stack professionals with strong backend expertise, real‑time project building, and end‑to‑end development from Spring Boot to frontend integration.',
    skills: ['Java','Spring Boot','Hibernate','REST APIs','MySQL','Maven'],
  },
  {
    image: mentor4,
    title: 'Full Stack Web Development',
    name:  'Arjun Mehta',
    rating: '4.7 (19 reviews)',
    subtitle:
      'Ex‑Wipro | Frontend Engineer | UI/UX Mentor | MERN Developer at Wipro\n9y Exp | React Pro | Live Project Mentor | Design‑to‑Code Expert',
    description:
      'Arjun teaches students to build beautiful, fully responsive websites using the MERN stack and popular UI frameworks. From wireframes to deployment — all in one place.',
    skills: ['HTML/CSS','JavaScript','React.js','MongoDB','Node.js','Bootstrap'],
  },
];

export default function Mentorship() {
  const [selected, setSelected] = useState(null);   // modal state

  return (
    <>
      <div className="mentorship-container">
        <div className="back-arrow" onClick={() => window.history.back()}>← Back</div>

        <div className="heading-box">
          Mentorship is a relationship between two individuals where knowledge, skills,
          and experience are shared.
        </div>

        {mentors.map((m, i) => (
          <div className="mentor-card" key={i}>
            {/* ─── Left column ─── */}
            <div className="mentor-image">
              <img src={m.image} alt={m.name} />

              {/* 🔥 NEW: show real name under photo */}
              <div className="mentor-caption">{m.name}</div>

              <div className="mentor-buttons below-image">
                <button className="profile-btn" onClick={() => setSelected(m)}>View Profile</button>
              </div>
            </div>

            {/* ─── Right column ─── */}
            <div className="mentor-info">
              <h2>{m.title}</h2>
              {/* name is now under photo → we drop the duplicate line */}
              <p className="mentor-rating">🌟 {m.rating}</p>
              <p className="mentor-subtitle">{m.subtitle}</p>
              <p className="mentor-description">{m.description}</p>

              <div className="skills">
                <strong>Skills:</strong>
                <div className="skill-tags">
                  {m.skills.map((s, idx) => (
                    <span key={idx} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Modal pop‑up on “View Profile” ─── */}
      {selected && (
        <div className="mentor-modal-overlay" onClick={() => setSelected(null)}>
          <div className="mentor-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>✖</button>
            <img src={selected.image} alt={selected.name} />
            <h2>{selected.title}</h2>
            <p className="modal-name">{selected.name}</p>
            <p className="modal-rating">🌟 {selected.rating}</p>
            <p>{selected.subtitle}</p>
            <p>{selected.description}</p>
            <div className="skill-tags">
              {selected.skills.map((s, idx) => (
                <span key={idx} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
