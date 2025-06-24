import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import '../AdminDashboard.css';
import {
  FaHome, FaUserGraduate, FaChalkboardTeacher, FaEye, FaShieldAlt,
  FaChartBar, FaFlag, FaLifeRing, FaCog, FaEllipsisH
} from 'react-icons/fa';

const navItems = [
  { icon: FaHome,              label: 'DashBoard',          route: '/dashboard/admin' },
  { icon: FaChartBar,          label: 'Reports & Analytics',route: '/admin/reports-analytics' },
  { icon: FaFlag,              label: 'Feedback & Flags',   route: '/admin/feedback-flags' },
  { icon: FaUserGraduate,      label: 'Manage Students',    route: null },
  { icon: FaChalkboardTeacher, label: 'Manage Mentors',     route: null },
  { icon: FaEye,               label: 'Session Monitor',    route: null },
  { icon: FaShieldAlt,         label: 'Content Control',    route: null },
  { icon: FaLifeRing,          label: 'User Support',       route: null },
  { icon: FaCog,               label: 'Settings',           route: null }
];

const primary = navItems.slice(0, 3);
const secondary = navItems.slice(3);

export default function AdminLayout() {
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