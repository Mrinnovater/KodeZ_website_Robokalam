// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// export default function StudentHeader({
//   userRole,               /* ← now received from App */
//   logout,                 /* ← handler */
//   setIsLoginOpen,
//   setIsSignupOpen,
// }) {
//   const [step, setStep] = useState(0);
//   const [open, setOpen] = useState(false);
//   const popupRef        = useRef(null);
//   const navigate        = useNavigate();

//   /* tagline animator */
//   useEffect(() => {
//     const id = setInterval(() => setStep(p => (p + 1) % 5), 1000);
//     return () => clearInterval(id);
//   }, []);

//   /* close mobile popup on click‑outside */
//   useEffect(() => {
//     const h = e => { if (popupRef.current && !popupRef.current.contains(e.target)) setOpen(false); };
//     if (open) document.addEventListener('mousedown', h);
//     return () => document.removeEventListener('mousedown', h);
//   }, [open]);

//   /* ---------- navigation ---------- */
//   const go = txt => {
//     setOpen(false);
//     if (txt === 'Home')          navigate('/');
//     else if (txt === 'Courses')  navigate('/courses');
//     else if (txt === 'Webinars') navigate('/webinars');
//     else if (txt === 'Certifications') navigate('/certifications');
//     else if (txt === 'Mentorship')     navigate('/aboutmentor');
//     else if (txt === 'My Discussions') navigate('/discussions');
//     else if (txt === 'Dashboard')      navigate('/dashboard');
//   };

//   /* visible menus */
//   const publicMenu     = ['Home','Courses','Webinars','Certifications','Mentorship'];
//   const privateMenuStu = ['My Discussions','Dashboard'];

//   const allMenu = userRole === 'student'
//     ? [...publicMenu, ...privateMenuStu]
//     : publicMenu;                /* hide private links when logged‑out */

//   /* logo → hard reload to home */
//   const logoClick = () => window.location.href = '/';

//   /* -------- render -------- */
//   return (
//     <>
//       <header className="navbar-container">
//         <div className="top-row">
//           <div className="logo" onClick={logoClick} style={{cursor:'pointer'}}>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBrdf1FLVPDes9YkFD81fq0QDwSbVkf8hBg&s" alt="KodeZ"/>
//           </div>

//           <nav className="menu">
//             {allMenu.map(txt => <button key={txt} onClick={()=>go(txt)}>{txt}</button>)}
//           </nav>

//           <div className="hamburger" onClick={()=>setOpen(true)}>☰</div>
//         </div>

//         <div className="bottom-row">
//           <h1 className="title">
//             KodeZ – {step>=1 && <span className="animated-word">Learn.</span>}
//             {step>=2 && <span className="animated-word">Launch.</span>}
//             {step>=3 && <span className="animated-word">Lead.</span>}
//           </h1>

//           <div className="actions-inline">
//             {!userRole && (
//               <>
//                 <button className="login-btn"  onClick={()=>setIsLoginOpen(true)}>Login →</button>
//                 <button className="signup-btn" onClick={()=>setIsSignupOpen(true)}>Sign up →</button>
//               </>
//             )}
//             {userRole && (
//               <button className="logout-btn" onClick={logout}>Logout</button>
//             )}
//           </div>
//         </div>
//       </header>

//       {open && (
//         <div className="side-popup-overlay">
//           <div className="side-popup" ref={popupRef}>
//             {allMenu.map(txt => <button key={txt} onClick={()=>go(txt)}>{txt}</button>)}
//             {!userRole
//               ? <button onClick={()=>{setIsLoginOpen(true); setOpen(false);}}>Login</button>
//               : <button onClick={()=>{logout(); setOpen(false);}}>Logout</button>}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function StudentHeader({ userRole, setIsLoginOpen, setIsSignupOpen, logout }) {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => { const id = setInterval(() => setStep(p => (p + 1) % 5), 1000); return () => clearInterval(id); }, []);
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    if (open) document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  /* ---------- MENU LISTS ---------- */
  const publicMenu = ['Home', 'Courses', 'Webinars', 'Certifications', 'Mentorship'];
  const privateMenu = [...publicMenu, 'My Discussions', 'Dashboard'];

  const handle = txt => {
    setOpen(false);
    const go = path => nav(path);
    switch (txt) {
      case 'Home':
        nav('/');
        break;
      case 'Courses': go('/courses'); break;
      case 'Webinars': go('/webinars'); break;
      case 'Certifications': go('/certifications'); break;
      case 'Mentorship': go('/aboutmentor'); break;
      case 'My Discussions': go('/discussions'); break;
      case 'Dashboard': go('/dashboard'); break;
      default: break;
    }
  };

  const menu = userRole ? privateMenu : publicMenu;

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
            {!userRole && (
              <>
                <button className="login-btn" onClick={() => setIsLoginOpen(true)}>Login →</button>
                <button className="signup-btn" onClick={() => setIsSignupOpen(true)}>Sign up →</button>
              </>
            )}
            {userRole && (
              <button className="login-btn" onClick={logout}>Logout →</button>
            )}
          </div>
        </div>
      </header>

      {open && (
        <div className="side-popup-overlay">
          <div className="side-popup" ref={ref}>
            {menu.map(m => <button key={m} onClick={() => handle(m)}>{m}</button>)}
            {userRole
              ? <button onClick={logout}>Logout</button>
              : <>
                <button onClick={() => { setIsLoginOpen(true); setOpen(false); }}>Login</button>
                <button onClick={() => { setIsSignupOpen(true); setOpen(false); }}>Sign up</button>
              </>}
          </div>
        </div>
      )}
    </>
  );
}
