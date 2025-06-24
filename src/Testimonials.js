import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Nikhila S",
    company: "DevDolphins",
    text: `Before KodeZ, I was overwhelmed by AI. After KodeZ, I was *deploying* AI. The microservice I built during my internship wasn’t just a project—it became a real product. That’s transformation.`,
  },
  {
    name: "K Kiran Kumar",
    company: "Capgemini",
    text: `KodeZ wasn’t just a course—it was a launchpad. By the time I reached my capstone, I already had an offer. I learned to think like a builder, and recruiters noticed that fast.`,
  },
  {
    name: "Sruthi G",
    company: "Hexaware",
    text: `KodeZ taught me more than code. It taught me clarity, confidence, and communication. I now design, develop, and *defend* solutions—skills that helped me shine in interviews and beyond.`,
  },
  {
    name: "P Shiva",
    company: "DevDolphins",
    text: `From hesitant coder to confident contributor—KodeZ changed my mindset. The fast feedback loops and real‑world exposure helped me present ideas like a pro, not just push commits.`,
  },
  {
    name: "Uday Kiran",
    company: "Accenture",
    text: `KodeZ helped me move from tutorial traps to production‑ready thinking. What I built in the program wasn’t just practice—it became portfolio‑worthy. That’s what employers loved.`,
  },
  {
    name: "BYS Lakshmi",
    company: "Capgemini",
    text: `Every week at KodeZ felt like a product sprint. Clear goals, tight deadlines, and constant improvement. It prepared me not just for interviews—but for delivering value from day one.`,
  },
  {
    name: "Samhitha Y",
    company: "Infosys",
    text: `KodeZ unlocked the leader in me. I started off quietly writing code. I finished confidently pitching MVPs to industry mentors. That transformation helped me secure my role at Infosys.`,
  },
  {
    name: "Abhinaya V",
    company: "Cognizant",
    text: `At KodeZ, I built more than apps—I built confidence. It wasn’t just about writing JavaScript or Python, it was about telling a story with tech. And that story opened doors.`,
  },
  {
    name: "KVS Sidhartha",
    company: "CitizensBank",
    text: `KodeZ flipped my learning journey. I went from passive watching to active shipping. I learned how to build fast, iterate smart, and explain clearly. That made all the difference.`,
  },
  {
    name: "MD Muzaffar Ali",
    company: "Wipro",
    text: `KodeZ gave me velocity. Every week I shipped something new—no fluff, just code that mattered. That habit of building fast helped me stand out in interviews and adapt quickly in my role.`,
  },
  {
    name: "Akhila B",
    company: "TCS",
    text: `KodeZ taught me that showing is better than telling. Instead of saying “I know React,” I built and deployed a real project. That single demo impressed my interviewers at TCS.`,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  /* update layout if the user resizes the viewport */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* navigation */
  const nextSlide = () =>
    setStartIndex((i) => (i + 1) % testimonials.length);
  const prevSlide = () =>
    setStartIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  /* decide how many cards to render */
  const visibleCards = (arr, idx) =>
    isMobile
      ? [arr[idx % arr.length]]        // 1 card on phones
      : [                              // 3 cards on tablet / desktop
          arr[idx % arr.length],
          arr[(idx + 1) % arr.length],
          arr[(idx + 2) % arr.length],
        ];

  return (
    <div className="testimonials-section">
      <div className="main-heading">Testimonials</div>
      <h2 className="section-heading glow-heading floating-subheading">
        What Our Learners Say
      </h2>

      <div className="testimonials-carousel">
        <button className="nav-btn left" onClick={prevSlide}>‹</button>

        <div className="testimonials-cards">
          {visibleCards(testimonials, startIndex).map((t, i) => (
            <div key={i} className="testimonial-card pulse-card">
              <div className="testimonial-header">
                <span className="icon">🎓</span>
                <div className="name-company">
                  <div className="name">{t.name}</div>
                  <div className="company">{t.company}</div>
                </div>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default Testimonials;
