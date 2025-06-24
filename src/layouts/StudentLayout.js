import React, { useState } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import '../StudentDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faBook, faVideo, faEllipsisH,
  faBookmark, faComments, faStar,
  faBell, faGift, faPhone
} from '@fortawesome/free-solid-svg-icons';

const primaryItems = [
  { icon: faHome, label: 'Dashboard', path: '/dashboard' },
  { icon: faBook, label: 'My Courses', path: '/courses' },
  { icon: faVideo, label: 'Webinars', path: '/webinars' }
];

const extraItems = [
  { icon: faBookmark, label: 'My Discussions', path: '/discussions' },
  { icon: faStar, label: 'Become an Ambassador', path: '/ambassador' },
  { icon: faComments, label: 'Feedback', path: '/feedback' },
  { icon: faBell, label: 'Notifications', path: '/notifications' },
  { icon: faGift, label: 'Invite & Earn', path: '/invite' },
  { icon: faPhone, label: 'Contact Us', path: '/contact' }
];

const builtPaths = [
  '/dashboard',
  '/courses',
  '/webinars',
  '/discussions'
];

export default function StudentLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleNav = (path) => {
    setShowMore(false);
    if (builtPaths.includes(path)) {
      navigate(path);
    }
  };

  return (
    <>
      {/* Don't render header here, just outlet + student nav */}
      <Outlet />

      {location.pathname !== '/' && (
        <div className="sidebar sidebar-mobile">
          {primaryItems.map(item => (
            <div
              key={item.label}
              className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleNav(item.path)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
          <div className="sidebar-item" onClick={() => setShowMore(true)}>
            <FontAwesomeIcon icon={faEllipsisH} />
            <span>More</span>
          </div>
        </div>
      )}

      {showMore && (
        <div className="more-overlay" onClick={() => setShowMore(false)}>
          <div className="more-sheet" onClick={(e) => e.stopPropagation()}>
            {extraItems.map(item => (
              <button
                key={item.label}
                className="more-button"
                onClick={() => handleNav(item.path)}
              >
                <FontAwesomeIcon icon={item.icon} className="sheet-icon" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
