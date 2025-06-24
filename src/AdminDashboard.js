import React, { useState } from 'react';
import './AdminDashboard.css';
import {
  FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaEye,
  FaShieldAlt, FaChartBar, FaFlag, FaLifeRing, FaCog, FaSignOutAlt,
  FaRegCircle, FaArrowRight, FaExclamationTriangle,
  FaCheckCircle, FaCheckSquare, FaSearch, FaEllipsisH
} from 'react-icons/fa';

function AdminDashboard() {
  const [showMore, setShowMore] = useState(false);

  /* full sidebar list */
  const sidebarItems = [
    { icon: FaTachometerAlt,   label: 'DashBoard',          active: true },
    { icon: FaUserGraduate,    label: 'Manage Students' },
    { icon: FaChalkboardTeacher, label: 'Manage Mentors' },
    { icon: FaEye,             label: 'Session Monitor' },
    { icon: FaShieldAlt,       label: 'Content Control' },
    { icon: FaChartBar,        label: 'Reports & Analytics' },
    { icon: FaFlag,            label: 'Feedback & Flags' },
    { icon: FaLifeRing,        label: 'User Support' },
    { icon: FaCog,             label: 'Settings' }
  ];

  /* what shows in bottom bar vs. sheet */
  const primaryMobile = sidebarItems.slice(0, 3);
  const extraMobile   = sidebarItems.slice(3);

  const handleNav = (label) => {
  if (label === 'DashBoard') window.location.href = '/dashboard/admin';
  else if (label === 'Reports & Analytics') window.location.href = '/admin/reports-analytics';
  else if (label === 'Feedback & Flags') window.location.href = '/admin/feedback-flags';
  else console.log('Navigate to', label);
  setShowMore(false);
};

  return (
    <>
      <div className="admin-dashboard-container">
        {/* ------------ DESKTOP SIDEBAR ------------ */}
        <div className="sidebar sidebar-desktop">
          {sidebarItems.map((item, i) => (
            <div
              key={item.label}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => handleNav(item.label)}
            >
              {/* keep icon off first item */}
              {i !== 0 && <item.icon />}
              <span>{item.label}</span>
            </div>
          ))}

          
        </div>

        {/* ------------ MOBILE / TABLET BOTTOM BAR ------------ */}
        <div className="sidebar-mobile">
          {primaryMobile.map((item, i) => (
            <div
              key={item.label}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => handleNav(item.label)}
            >
              {i !== 0 && <item.icon />}
              <span>{item.label}</span>
            </div>
          ))}

          <div className="sidebar-item" onClick={() => setShowMore(true)}>
            <FaEllipsisH /><span>More</span>
          </div>
        </div>

        {/* ------------ MAIN CONTENT (unchanged) ------------ */}
        <div className="main-content">
          <div className="header">
            <h2>Welcome “Admin_Name” 👋</h2>
            <div className="profile">
              <img src="/dashboard/studprof.jpg" alt="Profile"/>
            </div>
          </div>

          <div className="platform-overview">
            {[
              ['Total Students','2500+'],
              ['Total Mentors','50+'],
              ['Active Courses','4+'],
              ['Sessions Today','70+']
            ].map(([txt,val])=>(
              <div key={txt} className="stat-card">
                <p>{txt}</p><h3>{val}</h3>
              </div>
            ))}
          </div>

          <div className="section">
            <h4>User Activity Monitor</h4>
            <ul className="bullet-list activity">
              <li><FaRegCircle className="list-icon"/>12 new student sign‑ups today.</li>
              <li><FaRegCircle className="list-icon"/>Mentor “Karan” hosted 2 group sessions.</li>
              <li><FaRegCircle className="list-icon"/>3 content reports under review.</li>
            </ul>
          </div>

          <div className="section">
            <h4>Latest Updates</h4>
            <ul className="bullet-list updates">
              <li><FaArrowRight className="list-icon"/>New moderation tools released.</li>
              <li><FaArrowRight className="list-icon"/>Updated terms of service rolled out.</li>
              <li><FaArrowRight className="list-icon"/>Mentor onboarding flow improved.</li>
            </ul>
          </div>

          <div className="section">
            <h4>System Health & Flags</h4>
            <ul className="bullet-list critical">
              <li><FaExclamationTriangle className="list-icon"/>Platform latency spike detected</li>
              <li><FaExclamationTriangle className="list-icon"/>Mentee flagged inappropriate content</li>
              <li><FaExclamationTriangle className="list-icon"/>Scheduled maintenance tonight at 11 :30 PM</li>
            </ul>
          </div>

          <div className="section">
            <h4>Admin Action Center</h4>
            <ul className="bullet-list action">
              <li><FaCheckCircle className="list-icon success"/>Approved Course A0: “Intro to AI Prompting”</li>
              <li><FaCheckSquare className="list-icon success"/>Resolved mentor‑payout issue for Ananya</li>
              <li><FaSearch className="list-icon investigate"/>Investigating flagged session chat by Shiva</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------ MOBILE MORE SHEET ------------ */}
      {showMore && (
        <div className="more-overlay" onClick={()=>setShowMore(false)}>
          <div className="more-sheet" onClick={e=>e.stopPropagation()}>
            {extraMobile.map(item=>(
              <button key={item.label} onClick={()=>handleNav(item.label)}>
                <item.icon className="sheet-icon"/>{item.label}
              </button>
            ))}
            <button onClick={()=>handleNav('Log Out')}>
              <FaSignOutAlt className="sheet-icon"/>Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default AdminDashboard;
