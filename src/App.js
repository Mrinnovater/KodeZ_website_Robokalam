// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';
// import './App.css';

// /* ── Global pop‑ups ── */
// import LoginForm      from './LoginForm';
// import SignupForm     from './SignupForm';
// import EnrollForm     from './EnrollForm';
// import ForgotPassword from './ForgotPassword';

// /* ── Public pages ── */
// import HomePage       from './HomePage';
// import CoursesPage    from './CoursesPage';
// import Webinars       from './components/Webinars';
// import Certification  from './components/Certification';
// import AboutMentor    from './components/aboutmentor';
// import MyDiscussions  from './MyDiscussions';

// /* ── Dashboards ── */
// import StudentDashboard    from './StudentDashboard';
// import MentorshipDashboard from './MentorshipDashboard';
// import AdminDashboard      from './AdminDashboard';

// /* ── Headers ── */
// import StudentHeader from './StudentHeader';
// import MentorHeader  from './MentorHeader';
// import AdminHeader   from './AdminHeader';

// /* ─────────────────────────────────────────────────────────── */
// export default function App() {
//   const [isLoginOpen,  setIsLoginOpen]  = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [isEnrollOpen, setIsEnrollOpen] = useState(false);

//   return (
//     <Router>
//       <AppLayout
//         isLoginOpen={isLoginOpen}
//         setIsLoginOpen={setIsLoginOpen}
//         isSignupOpen={isSignupOpen}
//         setIsSignupOpen={setIsSignupOpen}
//         isEnrollOpen={isEnrollOpen}
//         setIsEnrollOpen={setIsEnrollOpen}
//       />
//     </Router>
//   );
// }

// /* ─────────────────────────────────────────────────────────── */
// function AppLayout(props) {
//   const { pathname } = useLocation();
//   const navigate     = useNavigate();

//   /* current role (null | 'student' | 'mentor' | 'admin')            */
//   const userRole = localStorage.getItem('userRole');

//   /* pick header from path                                            */
//   let HeaderCmp = StudentHeader;
//   if (pathname.startsWith('/dashboard/mentor')) HeaderCmp = MentorHeader;
//   else if (pathname.startsWith('/dashboard/admin'))  HeaderCmp = AdminHeader;

//   /* helpers to toggle pop‑ups                                        */
//   const openLogin  = () => { props.setIsSignupOpen(false); props.setIsLoginOpen(true); };
//   const openSignup = () => { props.setIsLoginOpen(false);  props.setIsSignupOpen(true); };

//   /* logout clears role + takes user to home                          */
//   const logout = () => {
//     localStorage.removeItem('userRole');
//     navigate('/');
//     window.location.reload();           // quick reset of UI
//   };

//   return (
//     <>
//       <HeaderCmp
//         userRole={userRole}      /* 👈 NEW */
//         setIsLoginOpen={openLogin}
//         setIsSignupOpen={openSignup}
//         logout={logout}          /* 👈 NEW */
//       />

//       {/* -------- ROUTES -------- */}
//       <Routes>
//         {/* public */}
//         <Route path="/"                element={<HomePage setIsEnrollOpen={props.setIsEnrollOpen} />} />
//         <Route path="/courses"         element={<CoursesPage />} />
//         <Route path="/webinars"        element={<Webinars />} />
//         <Route path="/certifications"  element={<Certification />} />
//         <Route path="/aboutmentor"     element={<AboutMentor />} />
//         <Route path="/discussions"     element={<MyDiscussions />} />

//         {/* dashboards */}
//         <Route path="/dashboard"            element={<StudentDashboard />} />
//         <Route path="/dashboard/mentor/*"   element={<MentorshipDashboard />} />
//         <Route path="/dashboard/admin/*"    element={<AdminDashboard />} />

//         {/* misc */}
//         <Route path="/forgot-password"      element={<ForgotPassword />} />
//       </Routes>

//       {/* -------- POP‑UPS -------- */}
//       {props.isLoginOpen && (
//         <div
//           className="login-overlay"
//           onClick={e=>{
//             if (e.target.classList.contains('login-overlay')) props.setIsLoginOpen(false);
//           }}
//         >
//           <LoginForm
//             close={() => props.setIsLoginOpen(false)}
//             openSignup={openSignup}
//           />
//         </div>
//       )}

//       {props.isSignupOpen && (
//         <div
//           className="login-overlay"
//           onClick={e=>{
//             if (e.target.classList.contains('login-overlay')) props.setIsSignupOpen(false);
//           }}
//         >
//           <SignupForm
//             close={() => props.setIsSignupOpen(false)}
//             openLogin={openLogin}
//           />
//         </div>
//       )}

//       {props.isEnrollOpen && (
//         <EnrollForm onClose={() => props.setIsEnrollOpen(false)} />
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.css';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import EnrollForm from './EnrollForm';
import ForgotPassword from './ForgotPassword';

import PublicLayout from './layouts/PublicLayout';
import HomePage from './HomePage';
import Webinars from './components/Webinars';
import Certification from './components/Certification';
import AboutMentor from './components/aboutmentor';
import CoursesAndResources from './CoursesAndResources';
import FeedbackReports from './FeedbackReports';
import MyMentees from './MyMentees';
import DiscussionThreads from './DiscussionThreads';
import ReportsAnalytics from './ReportsAnalytics';
import FeedbackFlags from './FeedbackFlags';

import StudentDashboard from './StudentDashboard';
import CoursesPage from './Courses';
import MyDiscussions from './MyDiscussions';
import MentorshipDashboard from './MentorshipDashboard';
import AdminDashboard from './AdminDashboard';

import StudentHeader from './StudentHeader';
import MentorHeader from './MentorHeader';
import AdminHeader from './AdminHeader';

import StudentLayout from './layouts/StudentLayout';
import MentorLayout from './layouts/MentorLayout';
import AdminLayout from './layouts/AdminLayout';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <Router>
      <AppLayout
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        isSignupOpen={isSignupOpen}
        setIsSignupOpen={setIsSignupOpen}
        isEnrollOpen={isEnrollOpen}
        setIsEnrollOpen={setIsEnrollOpen}
      />
    </Router>
  );
}

function AppLayout(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  // Only assign header if user is logged in (has a role)
  let HeaderCmp = null;

  if (
    pathname.startsWith('/dashboard/admin') ||
    pathname === '/admin-home' ||
    pathname.startsWith('/admin/')
  ) {
    HeaderCmp = AdminHeader;
  } else if (
    pathname.startsWith('/dashboard/mentor') ||
    pathname === '/mentor-home' ||
    pathname.startsWith('/mentor/')
  ) {
    HeaderCmp = MentorHeader;
  } else if (
    userRole === 'student' &&
    (
      pathname === '/' ||
      pathname === '/courses' ||
      pathname === '/webinars' ||
      pathname === '/certifications' ||
      pathname === '/aboutmentor' ||
      pathname === '/discussions' ||
      pathname === '/dashboard'
    )
  ) {
    HeaderCmp = StudentHeader;
  }

  const openLogin = () => {
    props.setIsSignupOpen(false);
    props.setIsLoginOpen(true);
  };

  const openSignup = () => {
    props.setIsLoginOpen(false);
    props.setIsSignupOpen(true);
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
    window.location.reload();
  };

  const Gate = ({ need, children }) =>
    userRole === need ? children : <Navigate to="/" replace />;

  return (
    <>
      {/* Only show header if it's defined */}
      {HeaderCmp && (
        <HeaderCmp
          userRole={userRole}
          setIsLoginOpen={openLogin}
          setIsSignupOpen={openSignup}
          logout={logout}
        />
      )}

      <Routes>
        {/* ✅ Public Routes with PublicHeader inside PublicLayout */}
        <Route
  element={
    userRole === 'student'
      ? <StudentLayout />
      : <PublicLayout
          setIsLoginOpen={props.setIsLoginOpen}
          setIsSignupOpen={props.setIsSignupOpen}
        />
  }
>
  <Route path="/" element={<HomePage setIsEnrollOpen={props.setIsEnrollOpen} />} />
  <Route path="/courses" element={<CoursesPage openEnroll={() => props.setIsEnrollOpen(true)} />} />
  <Route path="/webinars" element={<Webinars />} />
  <Route path="/certifications" element={<Certification setIsEnrollOpen={props.setIsEnrollOpen} />} />
  <Route path="/aboutmentor" element={<AboutMentor />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
</Route>


        {/* ✅ Student Routes */}
        <Route
          element={
            <Gate need="student">
              <StudentLayout />
            </Gate>
          }
        >
          {/* ⬇️ Keep all these inside ⬇️ */}
          <Route path="/dashboard/*" element={<StudentDashboard />} />
          <Route path="/discussions" element={<MyDiscussions />} />
          <Route path="/courses" element={<CoursesPage openEnroll={() => props.setIsEnrollOpen(true)} />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/certifications" element={<Certification setIsEnrollOpen={props.setIsEnrollOpen} />} />
          <Route path="/aboutmentor" element={<AboutMentor />} />
        </Route>

        {/* ✅ Mentor Routes */}
        <Route
          element={
            <Gate need="mentor">
              <MentorLayout />
            </Gate>
          }
        >
          <Route path="/mentor-home" element={<HomePage setIsEnrollOpen={props.setIsEnrollOpen} />} />
          <Route path="/mentor/courses-resources" element={<CoursesAndResources />} />
          <Route path="/mentor/feedback-reports" element={<FeedbackReports />} />
          <Route path="/mentor/my-mentees" element={<MyMentees />} />
          <Route path="/mentor/discussion-threads" element={<DiscussionThreads />} />
          <Route path="/dashboard/mentor/*" element={<MentorshipDashboard />} />
        </Route>

        {/* ✅ Admin Routes */}
        <Route
          element={
            <Gate need="admin">
              <AdminLayout />
            </Gate>
          }
        >
          <Route path="/admin-home" element={<HomePage setIsEnrollOpen={props.setIsEnrollOpen} />} />
          <Route path="/admin/reports-analytics" element={<ReportsAnalytics />} />
          <Route path="/admin/feedback-flags" element={<FeedbackFlags />} />
          <Route path="/dashboard/admin/*" element={<AdminDashboard />} />
        </Route>
      </Routes>

      {/* ✅ Auth Popups */}
      {props.isLoginOpen && (
        <div
          className="login-overlay"
          onClick={e => e.target.classList.contains('login-overlay') && props.setIsLoginOpen(false)}
        >
          <LoginForm close={() => props.setIsLoginOpen(false)} openSignup={openSignup} />
        </div>
      )}

      {props.isSignupOpen && (
        <div
          className="login-overlay"
          onClick={e => e.target.classList.contains('login-overlay') && props.setIsSignupOpen(false)}
        >
          <SignupForm close={() => props.setIsSignupOpen(false)} openLogin={openLogin} />
        </div>
      )}

      {props.isEnrollOpen && (
        <EnrollForm onClose={() => props.setIsEnrollOpen(false)} />
      )}
    </>
  );
}
