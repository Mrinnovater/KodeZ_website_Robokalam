import React, { useState } from 'react';
import './SignupForm.css';

import googleLogo   from './assets/google.png';
import facebookLogo from './assets/Facebook.png';
import humanIcon    from './assets/human-icon.png';

const SignupForm = ({ close, openLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const handleSignup = (e) => {
    e.preventDefault();

    const isValid = emailPattern.test(email);
    setEmailError(isValid ? '' : 'Please enter a valid Gmail address');
    if (!isValid || !name || !password) return;

    setShowSuccessPopup(true);

    // Cleanup after 4 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
      if (close) close();
    }, 4000);
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleBack = () => {
    if (close) close();
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <div className="back-button" onClick={handleBack}>
          <span className="arrow">←</span> Back
        </div>

        <div className="profile-icon">
          <img src={humanIcon} alt="user" className="profile-icon-img" />
        </div>

        <h2>Create your free account</h2>

        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <div className={`input-wrapper ${emailError ? 'input-error' : ''}`}>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => setEmailError(emailPattern.test(email) ? '' : 'Please enter a valid Gmail address')}
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="toggle-password" onClick={togglePassword}>
              <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>

          <input
            type="text"
            placeholder="Referral code (optional)"
            value={referral}
            onChange={e => setReferral(e.target.value)}
          />

          <button type="submit" className="signup-btn">Sign Up</button>

          <div className="separator">or</div>

          <button type="button" className="social-btn" onClick={() => alert("Google signup coming soon.")}>
            <img src={googleLogo} alt="Google" /> Sign up with Google
          </button>

          <button type="button" className="social-btn" onClick={() => alert("Facebook signup coming soon.")}>
            <img src={facebookLogo} alt="Facebook" /> Sign up with Facebook
          </button>

          <p className="bottom-text">
            Already have an account?{' '}
            <span onClick={openLogin} className="login-link">Log in</span>
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

      {/* ✅ Success Popup */}
      {showSuccessPopup && (
        <div className="popup-message">
          Signup successful! Please log in with your credentials.
        </div>
      )}
    </div>
  );
};

export default SignupForm;
