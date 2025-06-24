// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// export default function AdminHeader({
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
//       case 'DashBoard':          navigate('/dashboard/admin'); break;
//       case 'Manage Students':    navigate('/dashboard/admin#students'); break;
//       case 'Manage Mentors':     navigate('/dashboard/admin#mentors'); break;
//       case 'Session Monitor':    navigate('/dashboard/admin#monitor'); break;
//       case 'Content Control':    navigate('/dashboard/admin#content'); break;
//       case 'Reports & Analytics':navigate('/dashboard/admin#reports'); break;
//       case 'Feedback & Flags':   navigate('/dashboard/admin#flags'); break;
//       case 'User Support':       navigate('/dashboard/admin#support'); break;
//       case 'Settings':           navigate('/dashboard/admin#settings'); break;
//       default: navigate('/');
//     }
//   };

//   const menuAdmin = [
//     'DashBoard','Manage Students','Manage Mentors','Session Monitor',
//     'Content Control','Reports & Analytics','Feedback & Flags',
//     'User Support','Settings'
//   ];

//   const visible = userRole==='admin' ? menuAdmin : [];

//   const logoClick = ()=>window.location.href='/';

//   return (
//     <>
//       <header className="navbar-container">
//         <div className="top-row">
//           <div className="logo" onClick={logoClick} style={{cursor:'pointer'}}>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBrdf1FLVPDes9YkFD81fq0QDwSbVkf8hBg&s" alt="KodeZ"/>
//           </div>
//           <nav className="menu">{visible.map(txt=> <button key={txt} onClick={()=>go(txt)}>{txt}</button>)}</nav>
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
//             {visible.map(txt=> <button key={txt} onClick={()=>go(txt)}>{txt}</button>)}
//             {!userRole
//               ? <button onClick={()=>{setIsLoginOpen(true);setOpen(false);}}>Login</button>
//               : <button onClick={()=>{logout();setOpen(false);}}>Logout</button>}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// ✅ Updated AdminHeader.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function AdminHeader({ logout }) {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep(p => (p + 1) % 5), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const menu = ['Home', 'Reports & Analytics', 'Feedback & Flags', 'DashBoard'];
  const go = (item) => {
    setOpen(false);
    if (item === 'Home') nav('/admin-home');
    else if (item === 'DashBoard') nav('/dashboard/admin');
    else if (item === 'Reports & Analytics') nav('/admin/reports-analytics');
    else if (item === 'Feedback & Flags') nav('/admin/feedback-flags');
  };

  return (
    <>
      <header className="navbar-container">
        <div className="top-row">
          <div
            className="logo"
            style={{ cursor: 'pointer' }}
            onClick={() => (window.location.href = '/admin-home')}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBrdf1FLVPDes9YkFD81fq0QDwSbVkf8hBg&s"
              alt="KodeZ"
            />
          </div>
          <nav className="menu">
            {menu.map((m) => (
              <button key={m} onClick={() => go(m)}>
                {m}
              </button>
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
            <button className="login-btn" onClick={logout}>Logout →</button>
          </div>
        </div>
      </header>

      {open && (
        <div className="side-popup-overlay">
          <div className="side-popup" ref={popupRef}>
            {menu.map((m) => (
              <button key={m} onClick={() => go(m)}>{m}</button>
            ))}
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </>
  );
}