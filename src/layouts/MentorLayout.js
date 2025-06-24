import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import '../MentorshipDashboard.css';
import {
  FaHome, FaUserFriends, FaComments, FaBook,
  FaChartBar, FaBell, FaUserPlus, FaEnvelope, FaEllipsisH
} from 'react-icons/fa';

const navItems = [
  { icon: FaHome,        label: 'Dashboard',             route: '/dashboard/mentor' },
  { icon: FaBook,        label: 'Course Resources',      route: '/mentor/courses-resources' },
  { icon: FaUserFriends, label: 'My Mentees',            route: '/mentor/my-mentees' },
  { icon: FaChartBar,    label: 'Feedback & Reports',    route: '/mentor/feedback-reports' },
  
  { icon: FaBook,        label: 'Discussion Threads',    route: '/mentor/discussion-threads' },
  { icon: FaComments,    label: 'Session Requests',      route: null },
  { icon: FaBell,        label: 'Notifications',         route: null },
  { icon: FaUserPlus,    label: 'Invite Fellow Mentors', route: null },
  { icon: FaEnvelope,    label: 'Contact Admin',         route: null }
];

// Show only first 3 in bottom nav, rest in More
const primary = navItems.slice(0, 3);
const secondary = navItems.slice(3);

export default function MentorLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const handleNav = (route) => {
    setShowMore(false);
    if (route) navigate(route);
  };

  return (
    <>
      <Outlet />

      {location.pathname !== '/' && (
        <div className="sidebar sidebar-mobile">
          {primary.map((item) => (
            <div
              key={item.label}
              className={`sidebar-item ${location.pathname === item.route ? 'active' : ''}`}
              onClick={() => handleNav(item.route)}
            >
              {item.icon && <item.icon />}
              <span>{item.label}</span>
            </div>
          ))}

          <div className="sidebar-item" onClick={() => setShowMore(true)}>
            <FaEllipsisH /><span>More</span>
          </div>
        </div>
      )}

      {showMore && (
        <div className="more-overlay" onClick={() => setShowMore(false)}>
          <div className="more-sheet" onClick={(e) => e.stopPropagation()}>
            {secondary.map((item) => (
              <button key={item.label} onClick={() => handleNav(item.route)}>
                {item.icon && <item.icon className="sheet-icon" />}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}