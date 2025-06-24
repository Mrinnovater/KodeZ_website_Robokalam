// src/PublicHeader.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function PublicHeader({ setIsLoginOpen, setIsSignupOpen }) {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setStep(p => (p + 1) % 5), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  const menu = ['Home', 'Courses', 'Webinars', 'Certifications', 'Mentorship'];
  const handle = txt => {
    setOpen(false);
    const go = path => nav(path);
    switch (txt) {
      case 'Home': go('/'); break;
      case 'Courses': go('/courses'); break;
      case 'Webinars': go('/webinars'); break;
      case 'Certifications': go('/certifications'); break;
      case 'Mentorship': go('/aboutmentor'); break;
      default: break;
    }
  };

  return (
    <>
      <header className="navbar-container">
        <div className="top-row">
          <div className="logo" onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBrdf1FLVPDes9YkFD81fq0QDwSbVkf8hBg&s" alt="KodeZ" />
          </div>

          <nav className="menu">{menu.map(m => <button key={m} onClick={() => handle(m)}>{m}</button>)}</nav>
          <div className="hamburger" onClick={() => setOpen(true)}>☰</div>
        </div>

        <div className="bottom-row">
          <h1 className="title">KodeZ – {step >= 1 && <span className="animated-word">Learn.</span>}{step >= 2 && <span className="animated-word">Launch.</span>}{step >= 3 && <span className="animated-word">Lead.</span>}</h1>

          <div className="actions-inline">
            <button className="login-btn" onClick={() => setIsLoginOpen(true)}>Login →</button>
            <button className="signup-btn" onClick={() => setIsSignupOpen(true)}>Sign up →</button>
          </div>
        </div>
      </header>

      {open && (
        <div className="side-popup-overlay">
          <div className="side-popup" ref={ref}>
            {menu.map(m => <button key={m} onClick={() => handle(m)}>{m}</button>)}
            <button onClick={() => { setIsLoginOpen(true); setOpen(false); }}>Login</button>
            <button onClick={() => { setIsSignupOpen(true); setOpen(false); }}>Sign up</button>
          </div>
        </div>
      )}
    </>
  );
}
