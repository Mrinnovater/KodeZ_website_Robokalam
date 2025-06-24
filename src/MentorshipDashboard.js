// import React, { useState } from 'react';
// import './MentorshipDashboard.css';
// import {
//   FaUserFriends, FaComments, FaBook, FaChartBar,
//   FaBell, FaUserPlus, FaEnvelope, FaSignOutAlt, FaEllipsisH
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// function MentorshipDashboard() {
//   const navigate = useNavigate();
//   const [showMore, setShowMore] = useState(false);
//   const [showLogout, setShowLogout] = useState(false);

//   const navItems = [
//     { icon: null,          label: 'DashBoard',             active: true,  route: '/dashboard/mentor' },
//     { icon: FaUserFriends, label: 'My Mentees',            route: '/dashboard/mentor#mentees' },
//     { icon: FaComments,    label: 'Session Requests',      route: '/dashboard/mentor#sessions' },
//     { icon: FaBook,        label: 'Discussion Threads',    route: '/discussions' },
//     { icon: FaBook,        label: 'Course Resources',      route: '/courses' },
//     { icon: FaChartBar,    label: 'Feedback & Reports',    route: '/dashboard/mentor#reports' },
//     { icon: FaBell,        label: 'Notifications',         route: '/dashboard/mentor#notifications' },
//     { icon: FaUserPlus,    label: 'Invite Fellow Mentors', route: '/dashboard/mentor#invite' },
//     { icon: FaEnvelope,    label: 'Contact Admin',         route: '/contact' }
//   ];

//   const primary   = navItems.slice(0, 3);
//   const secondary = navItems.slice(3);

//   const handleNav = (label, route) => {
//     setShowMore(false);
//     if (label === 'Log Out') {
//       setShowLogout(true);
//       return;
//     }
//     if (route) navigate(route);
//   };

//   return (
//     <>
//       <div className="dashboard-container">
//         <div className="sidebar sidebar-desktop">
//           {navItems.map((item, idx) => (
//             <div
//               key={item.label}
//               className={`sidebar-item ${item.active ? 'active' : ''}`}
//               onClick={() => handleNav(item.label, item.route)}
//             >
//               {idx !== 0 && item.icon && <item.icon />}
//               <span>{item.label}</span>
//             </div>
//           ))}

//           <div className="sidebar-item logout" onClick={() => handleNav('Log Out')}>
//             <FaSignOutAlt /><span>Log Out</span>
//           </div>
//         </div>

//         <div className="sidebar sidebar-mobile">
//           {primary.map((item, idx) => (
//             <div
//               key={item.label}
//               className={`sidebar-item ${item.active ? 'active' : ''}`}
//               onClick={() => handleNav(item.label, item.route)}
//             >
//               {idx !== 0 && item.icon && <item.icon />}
//               <span>{item.label}</span>
//             </div>
//           ))}

//           <div className="sidebar-item" onClick={() => setShowMore(true)}>
//             <FaEllipsisH /><span>More</span>
//           </div>
//         </div>

//         <div className="main-content">
//           <div className="header">
//             <h2>Welcome “Mentor_Name” 👋</h2>
//             <div className="profile"><img src="/dashboard/studprof.jpg" alt="Profile" /></div>
//           </div>

//           <div className="section my-mentees">
//             <h4>My Mentees</h4>
//             <div className="mentees-images">
//               {[1, 2, 3].map((n) => (
//                 <div key={n} className="mentee-card">
//                   <img src="/mentorcommunity/mentor-1.png" alt="Mentee" />
//                   <div className="mentee-name">Math lane</div>
//                 </div>
//               ))}
//               <span className="more">And many more....</span>
//             </div>
//           </div>

//           <div className="section analytics">
//             <h4>Analytics of your impact</h4>
//             <div className="analytics-box">
//               <p>Sessions Completed</p><p><strong>: 32</strong></p>
//               <p>Avg Rating</p><p><strong>: 4.9</strong></p>
//               <p>Feedback Received</p><p><strong>: 18</strong></p>
//               <p>Time Spent Mentoring This Week</p><p><strong>: 5h 40m</strong></p>
//             </div>
//           </div>

//           <div className="section latest-updates">
//             <h4>Latest Updates</h4>
//             <ul>
//               <li>🆕 New content creation tools added</li>
//               <li>📢 Community event this Friday</li>
//               <li>📊 Performance report released</li>
//             </ul>
//           </div>

//           <div className="section certificates">
//             <h4>My Certificates And Badges</h4>
//             <div className="cert-grid">
//               <div className="cert-box"><img src="/dashboard/certificate.png" alt="Top Mentor" /><p>“Top Mentor - May 2025” 🏆</p></div>
//               <div className="cert-box"><img src="/dashboard/certificate.png" alt="Contributor" /><p>“Content Contributor” badge</p></div>
//               <div className="cert-box"><img src="/dashboard/certificate.png" alt="Contributor" /><p>“Content Contributor” badge, sessions scheduled May 2025</p></div>
//             </div>
//           </div>

//           <div className="section session-schedule">
//             <h4>🗓️ Sessions Scheduled</h4>
//             <div className="calendar-box">
//               <div className="calendar-date">May 2025<br />Saturday<br />25</div>
//               <div className="session-times">
//                 <h5>Upcoming 1-on-1</h5>
//                 <div className="session-time">11:00 AM</div>
//                 <div className="session-time">06:00 PM</div>
//                 <h5>Group Mentorship</h5>
//                 <div className="session-time">Session</div>
//               </div>
//             </div>
//           </div>

//           <div className="section mentor-hub">
//             <h4>⚡ Mentor Action Hub</h4>
//             <ul>
//               <li><strong>Reviewed Shiva’s weekly progress:</strong> Noticed a dip in quiz scores, planning a quick sync tomorrow.</li>
//               <li><strong>Approved React JS study guide:</strong> Solid resource from mentee Karan; shared with the rest of the cohort.</li>
//               <li><strong>Reschedule request from Ananya:</strong> She’s asked to move Friday’s session; I’ve proposed Saturday 10 AM instead.</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {showMore && (
//         <div className="more-overlay" onClick={() => setShowMore(false)}>
//           <div className="more-sheet" onClick={(e) => e.stopPropagation()}>
//             {secondary.map(it => (
//               <button key={it.label} onClick={() => handleNav(it.label, it.route)}>
//                 {it.icon && <it.icon className="sheet-icon" />}
//                 {it.label}
//               </button>
//             ))}
//             <button onClick={() => handleNav('Log Out')}>
//               <FaSignOutAlt className="sheet-icon" />Log Out
//             </button>
//           </div>
//         </div>
//       )}

//       {showLogout && (
//         <div className="modal-overlay" onClick={() => setShowLogout(false)}>
//           <div className="modal-box" onClick={(e) => e.stopPropagation()}>
//             <h3>Logout Successful</h3>
//             <p>You have been logged out of your account.</p>
//             <button onClick={() => { setShowLogout(false); navigate('/'); }}>OK</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MentorshipDashboard;


import React, { useState } from 'react';
import './MentorshipDashboard.css';
import {
  FaUserFriends, FaComments, FaBook, FaChartBar,
  FaBell, FaUserPlus, FaEnvelope, FaSignOutAlt, FaEllipsisH
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MentorshipDashboard() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const navItems = [
    { icon: null,          label: 'DashBoard',             active: true,  route: '/dashboard/mentor' },
    { icon: FaUserFriends, label: 'My Mentees',            route: '/mentor/my-mentees' },
    { icon: FaComments,    label: 'Session Requests',      route: null },
    { icon: FaBook,        label: 'Discussion Threads',    route: '/mentor/discussion-threads' },
    { icon: FaBook,        label: 'Course Resources',      route: '/mentor/courses-resources' },
    { icon: FaChartBar,    label: 'Feedback & Reports',    route: '/mentor/feedback-reports' },
    { icon: FaBell,        label: 'Notifications',         route: null },
    { icon: FaUserPlus,    label: 'Invite Fellow Mentors', route: null },
    { icon: FaEnvelope,    label: 'Contact Admin',         route: null }
  ];

  const primary   = navItems.slice(0, 3);
  const secondary = navItems.slice(3);

  const handleNav = (label, route) => {
    setShowMore(false);
    if (label === 'Log Out') {
      setShowLogout(true);
      return;
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar sidebar-desktop">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => handleNav(item.label, item.route)}
            >
              {idx !== 0 && item.icon && <item.icon />}
              <span>{item.label}</span>
            </div>
          ))}

          
        </div>

        <div className="sidebar sidebar-mobile">
          {primary.map((item, idx) => (
            <div
              key={item.label}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => handleNav(item.label, item.route)}
            >
              {idx !== 0 && item.icon && <item.icon />}
              <span>{item.label}</span>
            </div>
          ))}

          <div className="sidebar-item" onClick={() => setShowMore(true)}>
            <FaEllipsisH /><span>More</span>
          </div>
        </div>

        <div className="main-content">
          <div className="header">
            <h2>Welcome “Mentor_Name” 👋</h2>
            <div className="profile"><img src="/dashboard/studprof.jpg" alt="Profile" /></div>
          </div>

          <div className="section my-mentees">
            <h4>My Mentees</h4>
            <div className="mentees-images">
              {[1, 2, 3].map((n) => (
                <div key={n} className="mentee-card">
                  <img src="/mentorcommunity/mentor-1.png" alt="Mentee" />
                  <div className="mentee-name">Math lane</div>
                </div>
              ))}
              <span className="more">And many more....</span>
            </div>
          </div>

          <div className="section analytics">
            <h4>Analytics of your impact</h4>
            <div className="analytics-box">
              <p>Sessions Completed</p><p><strong>: 32</strong></p>
              <p>Avg Rating</p><p><strong>: 4.9</strong></p>
              <p>Feedback Received</p><p><strong>: 18</strong></p>
              <p>Time Spent Mentoring This Week</p><p><strong>: 5h 40m</strong></p>
            </div>
          </div>

          <div className="section latest-updates">
            <h4>Latest Updates</h4>
            <ul>
              <li>🆕 New content creation tools added</li>
              <li>📢 Community event this Friday</li>
              <li>📊 Performance report released</li>
            </ul>
          </div>

          <div className="section certificates">
            <h4>My Certificates And Badges</h4>
            <div className="cert-grid">
              <div className="cert-box"><img src="/dashboard/certificate.png" alt="Top Mentor" /><p>“Top Mentor - May 2025” 🏆</p></div>
              <div className="cert-box"><img src="/dashboard/certificate.png" alt="Contributor" /><p>“Content Contributor” badge</p></div>
              <div className="cert-box"><img src="/dashboard/certificate.png" alt="Contributor" /><p>“Content Contributor” badge, sessions scheduled May 2025</p></div>
            </div>
          </div>

          <div className="section session-schedule">
            <h4>🗓️ Sessions Scheduled</h4>
            <div className="calendar-box">
              <div className="calendar-date">May 2025<br />Saturday<br />25</div>
              <div className="session-times">
                <h5>Upcoming 1-on-1</h5>
                <div className="session-time">11:00 AM</div>
                <div className="session-time">06:00 PM</div>
                <h5>Group Mentorship</h5>
                <div className="session-time">Session</div>
              </div>
            </div>
          </div>

          <div className="section mentor-hub">
            <h4>⚡ Mentor Action Hub</h4>
            <ul>
              <li><strong>Reviewed Shiva’s weekly progress:</strong> Noticed a dip in quiz scores, planning a quick sync tomorrow.</li>
              <li><strong>Approved React JS study guide:</strong> Solid resource from mentee Karan; shared with the rest of the cohort.</li>
              <li><strong>Reschedule request from Ananya:</strong> She’s asked to move Friday’s session; I’ve proposed Saturday 10 AM instead.</li>
            </ul>
          </div>
        </div>
      </div>

      {showMore && (
        <div className="more-overlay" onClick={() => setShowMore(false)}>
          <div className="more-sheet" onClick={(e) => e.stopPropagation()}>
            {secondary.map(it => (
              <button key={it.label} onClick={() => handleNav(it.label, it.route)}>
                {it.icon && <it.icon className="sheet-icon" />}
                {it.label}
              </button>
            ))}
            <button onClick={() => handleNav('Log Out')}>
              <FaSignOutAlt className="sheet-icon" />Log Out
            </button>
          </div>
        </div>
      )}

      {showLogout && (
        <div className="modal-overlay" onClick={() => setShowLogout(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Logout Successful</h3>
            <p>You have been logged out of your account.</p>
            <button onClick={() => { setShowLogout(false); navigate('/'); }}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default MentorshipDashboard;
