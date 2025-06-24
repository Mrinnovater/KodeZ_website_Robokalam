// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// export default function MentorHeader({
//   userRole,
//   logout,
//   setIsLoginOpen,
//   setIsSignupOpen,
// }) {
//   const navigate = useNavigate();
//   const [step,setStep] = useState(0);
//   const [open,setOpen] = useState(false);
//   const ref            = useRef(null);

//   useEffect(()=>{const id=setInterval(()=>setStep(p=>(p+1)%5),1000);return()=>clearInterval(id);},[]);
//   useEffect(()=>{
//     const h=e=>{if(ref.current&&!ref.current.contains(e.target))setOpen(false);};
//     if(open)document.addEventListener('mousedown',h);
//     return()=>document.removeEventListener('mousedown',h);
//   },[open]);

//   const go = txt => {
//     setOpen(false);
//     switch(txt){
//       case 'DashBoard':            navigate('/dashboard/mentor'); break;
//       case 'My Mentees':           navigate('/dashboard/mentor#mentees'); break;
//       case 'Session Requests':     navigate('/dashboard/mentor#sessions'); break;
//       case 'Discussion Threads':   navigate('/discussions'); break;
//       case 'Course Resources':     navigate('/courses'); break;
//       case 'Feedback & Reports':   navigate('/dashboard/mentor#reports'); break;
//       case 'Notifications':        navigate('/dashboard/mentor#notifications'); break;
//       case 'Invite Fellow Mentors':navigate('/dashboard/mentor#invite'); break;
//       case 'Contact Admin':        navigate('/contact'); break;
//       default: navigate('/');
//     }
//   };

//   const menuMentor = [
//     'DashBoard','My Mentees','Session Requests','Discussion Threads',
//     'Course Resources','Feedback & Reports','Notifications',
//     'Invite Fellow Mentors','Contact Admin'
//   ];

//   const visibleMenu = userRole==='mentor' ? menuMentor : [];  // hide all if not mentor

//   const logoClick = ()=>window.location.href='/';

//   return (
//     <>
//       <header className="navbar-container">
//         <div className="top-row">
//           <div className="logo" onClick={logoClick} style={{cursor:'pointer'}}>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBrdf1FLVPDes9YkFD81fq0QDwSbVkf8hBg&s" alt="KodeZ"/>
//           </div>
//           <nav className="menu">{visibleMenu.map(txt=> <button key={txt} onClick={()=>go(txt)}>{txt}</button>)}</nav>
//           <div className="hamburger" onClick={()=>setOpen(true)}>☰</div>
//         </div>

//         <div className="bottom-row">
//           <h1 className="title">KodeZ – {step>=1&&<span className="animated-word">Learn.</span>}{step>=2&&<span className="animated-word">Launch.</span>}{step>=3&&<span className="animated-word">Lead.</span>}</h1>
//           <div className="actions-inline">
//             {!userRole && (
//               <>
//                 <button className="login-btn"  onClick={()=>setIsLoginOpen(true)}>Login →</button>
//                 <button className="signup-btn" onClick={()=>setIsSignupOpen(true)}>Sign up →</button>
//               </>
//             )}
//             {userRole && <button className="logout-btn" onClick={logout}>Logout</button>}
//           </div>
//         </div>
//       </header>

//       {open && (
//         <div className="side-popup-overlay">
//           <div className="side-popup" ref={ref}>
//             {visibleMenu.map(txt=> <button key={txt} onClick={()=>go(txt)}>{txt}</button>)}
//             {!userRole
//               ? <button onClick={()=>{setIsLoginOpen(true);setOpen(false);}}>Login</button>
//               : <button onClick={()=>{logout();setOpen(false);}}>Logout</button>}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// src/MentorHeader.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function MentorHeader({ userRole, setIsLoginOpen, setIsSignupOpen, logout }) {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep(p => (p + 1) % 5), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    if (open) document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  const menu = ['Home', 'Course Resources', 'Feedback & Reports', 'My Mentees', 'Discussion Threads', 'DashBoard'];

  const go = (m) => {
    setOpen(false);
    if (m === 'Home') nav('/mentor-home');
    else if (m === 'DashBoard') nav('/dashboard/mentor');
    else if (m === 'Course Resources') nav('/mentor/courses-resources');
    else if (m === 'Feedback & Reports') nav('/mentor/feedback-reports');
    else if (m === 'My Mentees') nav('/mentor/my-mentees');
    else if (m === 'Discussion Threads') nav('/mentor/discussion-threads');
  };

  return (
    <>
      <header className="navbar-container">
        <div className="top-row">
          <div className="logo" onClick={() => nav('/mentor-home')} style={{ cursor: 'pointer' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBrdf1FLVPDes9YkFD81fq0QDwSbVkf8hBg&s" alt="KodeZ" />
          </div>
          <nav className="menu">
            {menu.map((m) => (
              <button key={m} onClick={() => go(m)}>{m}</button>
            ))}
          </nav>
          <div className="hamburger" onClick={() => setOpen(true)}>☰</div>
        </div>

        <div className="bottom-row">
          <h1 className="title">KodeZ – 
            {step >= 1 && <span className="animated-word">Learn.</span>}
            {step >= 2 && <span className="animated-word">Launch.</span>}
            {step >= 3 && <span className="animated-word">Lead.</span>}
          </h1>

          <div className="actions-inline">
            {!userRole ? (
              <>
                <button className="login-btn" onClick={() => setIsLoginOpen(true)}>Login →</button>
                <button className="signup-btn" onClick={() => setIsSignupOpen(true)}>Sign up →</button>
              </>
            ) : (
              <button className="login-btn" onClick={logout}>Logout →</button>
            )}
          </div>
        </div>
      </header>

      {open && (
        <div className="side-popup-overlay">
          <div className="side-popup" ref={ref}>
            {menu.map((m) => (
              <button key={m} onClick={() => go(m)}>{m}</button>
            ))}
            {userRole
              ? <button onClick={logout}>Logout</button>
              : <>
                  <button onClick={() => { setIsLoginOpen(true); setOpen(false); }}>Login</button>
                  <button onClick={() => { setIsSignupOpen(true); setOpen(false); }}>Sign up</button>
                </>
            }
          </div>
        </div>
      )}
    </>
  );
}
