import React, { useState } from 'react';
import './StudentDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faBook, faVideo, faBookmark, faComments, faStar,
  faBell, faGift, faPhone, faEllipsisH,
  faChartLine, faBookOpen, faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const items = [
    { icon: faHome, label: 'Dashboard' },
    { icon: faBook, label: 'My Courses' },
    { icon: faVideo, label: 'Webinars' },
    { icon: faBookmark, label: 'Bookmarks' },
    { icon: faComments, label: 'My Discussions' },
    { icon: faStar, label: 'Become an Ambassador' },
    { icon: faBell, label: 'Notifications' },
    { icon: faGift, label: 'Invite & Earn' },
    { icon: faPhone, label: 'Contact Us' }
  ];

  const primary = items.slice(0, 3);
  const extra = items.slice(3);

  const handleNav = (label) => {
    setShowMore(false);
    switch (label) {
      case 'Dashboard':
        navigate('/dashboard');
        break;
      case 'My Courses':
        navigate('/courses');
        break;
      case 'Webinars':
        navigate('/webinars');
        break;
      case 'My Discussions':
        navigate('/discussions');
        break;
        case 'Become an Ambassador':
    case 'Notifications':
    case 'Invite & Earn':
    case 'Contact Us':
      default:
        break;
    }
  };

  return (
    <>
      <div className="student-dashboard-container">
        {/* Sidebar (Desktop) */}
        <div className="sidebar sidebar-desktop">
          {items.map(item => (
            <div
              key={item.label}
              className={`sidebar-item ${location.pathname.includes(item.label.toLowerCase()) ? 'active' : ''}`}
              onClick={() => handleNav(item.label)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Dashboard */}
        <div className="dashboard">
          <div className="header">
            <h2>Welcome “Student_Name” 👋</h2>
            <div className="profile">
              <img src="/dashboard/studprof.jpg" alt="Profile" />
            </div>
          </div>

          {/* Courses Section */}
          <div className="card my-courses">
            <h4>My Courses</h4>
            <div className="empty-box">
              <p>You don’t have any courses</p>
              <button onClick={() => navigate('/courses')}>Go to Courses</button>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="card progress">
            <h4>Your Progress</h4>
            <div className="progress-row">
              <div>
                <p>Course 1</p>
                <div className="progress-bar"><span style={{ width: '60%' }} /></div>
              </div>
              <div className="progress-line">
                <span>Course 2</span><button>Continue</button>
              </div>
              <div className="progress-line">
                <span>Course 3</span><button>Continue</button>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="section analytics">
            <h4>Today's Schedule</h4>
            <div className="analytics-box">
              <p>📹 Webinar</p><p><strong>- 12:00</strong></p>
              <p>📄 Assignment deadline</p><p><strong>- 03:00</strong></p>
              <p>📝 Project task</p><p><strong>- 04:30</strong></p>
            </div>
          </div>

          {/* Updates */}
          <div className="card updates">
            <h4>Latest Updates</h4>
            <p>🆕 New course has been launched!</p>
          </div>

          {/* Certificates */}
          <div className="card certificates">
            <h4>My Certificates and Badges</h4>
            <div className="cert-grid">
              <div className="cert-box"><img src="/dashboard/certificate.png" alt="Certificate" /></div>
              <div className="cert-box"><img src="/dashboard/certificate.png" alt="Certificate" /></div>
              <div className="cert-box"><img src="/dashboard/certificate.png" alt="Certificate" /></div>
            </div>
          </div>

          {/* Mentor Hub */}
          <div className="card mentor-hub">
            <h4>💡 Weekly Learning Goals</h4>
            <ul>
              <li><FontAwesomeIcon icon={faChartLine} /><strong>Complete Module 2</strong></li>
              <li><FontAwesomeIcon icon={faBookOpen} /><strong>Review all quiz answers</strong></li>
              <li><FontAwesomeIcon icon={faCalendarAlt} /><strong>Watch Git tutorial video</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Nav (Mobile) - Persistent for all pages except homepage */}
      {location.pathname !== '/' && (
        <div className="sidebar sidebar-mobile">
          {primary.map(item => (
            <div
              key={item.label}
              className={`sidebar-item ${location.pathname.toLowerCase().includes(item.label.toLowerCase()) ? 'active' : ''}`}
              onClick={() => handleNav(item.label)}
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

      {/* Mobile More Sheet */}
      {showMore && (
        <div className="more-overlay" onClick={() => setShowMore(false)}>
          <div className="more-sheet" onClick={(e) => e.stopPropagation()}>
            {extra.map(it => (
              <button key={it.label} onClick={() => handleNav(it.label)}>
                <FontAwesomeIcon icon={it.icon} className="sheet-icon" />
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default StudentDashboard;
