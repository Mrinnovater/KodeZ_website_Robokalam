import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

import googleLogo   from './assets/google.png';
import facebookLogo from './assets/Facebook.png';
import humanIcon    from './assets/human-icon.png';

export default function LoginForm({ close, openSignup }) {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole]         = useState('student');
  const [emailError, setEmailError] = useState('');

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const handleLogin = e => {
    e.preventDefault();
    const isValid = emailPattern.test(email);
    setEmailError(isValid ? '' : 'Please enter a valid Gmail address');

    if (!isValid || !password) return;

    localStorage.setItem('userRole', role);

    if (close) close();
    if (role === 'mentor') navigate('/dashboard/mentor');
    else if (role === 'admin') navigate('/dashboard/admin');
    else navigate('/dashboard');
  };

  const handleBackClick = () => {
    if (close) close();
    else navigate(-1);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="back-button" onClick={handleBackClick}>
          <span className="arrow">←</span> Back
        </div>

        <div className="profile-icon">
          <img src={humanIcon} alt="user" className="profile-icon-img" />
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <div className={`input-icon ${emailError ? 'input-error' : ''}`}>
              <i className="fa fa-envelope" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setEmailError(emailPattern.test(email) ? '' : 'Please enter a valid Gmail address')}
                required
              />
            </div>
            {emailError && <p className="error-text">{emailError}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-icon">
              <i className="fa fa-key" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Login as</label>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot password</a>
          </div>

          <button type="submit" className="login-btn">LOGIN</button>

          <div className="separator">or</div>

          <button type="button" className="social-btn">
            <img src={googleLogo} alt="Google" /> Login with Google
          </button>

          <button type="button" className="social-btn">
            <img src={facebookLogo} alt="Facebook" /> Login with Facebook
          </button>

          <p className="bottom-text">
            Don’t have an account?{' '}
            <span onClick={openSignup} className="signup-link">Sign up</span>
            <br />
            By continuing you agree to our&nbsp;
            <a href="/terms">Terms of Service</a> and&nbsp;
            <a href="/privacy">Privacy Policy</a>
          </p>

          <p className="support-text">
            Need help? <a href="mailto:team@robokalam.com">team@robokalam.com</a>
          </p>
        </form>
      </div>
    </div>
  );
}
