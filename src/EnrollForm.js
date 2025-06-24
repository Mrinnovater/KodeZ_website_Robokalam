import React, { useState } from 'react';
import './EnrollForm.css';
import { FaPhoneAlt, FaArrowLeft } from 'react-icons/fa';

const EnrollForm = ({ onClose }) => {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBack = () => {
    if (onClose) onClose();
  };

  const digitsOnly = (v, len) => v.replace(/\D/g, '').slice(0, len);

  const handleGetOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      setOtp('');
      setIsOtpVerified(false);
      setOtpError('');
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid 10-digit phone number');
    }
  };

  const handleVerify = () => {
    if (otp.length !== 6) {
      setOtpError('Please enter a 6-digit OTP to verify');
    } else {
      setOtpError('');
      setIsOtpVerified(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email check
    if (!email.endsWith('@gmail.com')) {
      setEmailError('Please enter a valid email ending with @gmail.com');
      return;
    } else {
      setEmailError('');
    }

    // Phone number and OTP check
    if (phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    if (!otpSent || !isOtpVerified) {
      setOtpError('Please verify your OTP before submitting');
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose?.();
    }, 3000);
  };

  return (
    <div
      className="enroll-overlay"
      onClick={(e) => {
        if (e.target.classList.contains('enroll-overlay')) onClose?.();
      }}
    >
      <div className="enroll-form-wrapper">
        <div className="enroll-form">
          <div className="back-arrow" onClick={handleBack}>
            <FaArrowLeft /> Back
          </div>

          <h2>Enroll Now</h2>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="input-box" required />

            <label>Gender</label>
            <select className="input-box" required>
              <option value="">--Select--</option>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to disclose</option>
            </select>

            <label>Study/Qualification</label>
            <select className="input-box" required>
              <option value="">--Select--</option>
              <option>12th / Intermediate</option>
              <option>Diploma</option>
              <option>UG - Ongoing</option>
              <option>UG - Completed</option>
              <option>PG - Ongoing</option>
              <option>PG - Completed</option>
            </select>

            <label>Contact Number</label>
            <div className="contact-field">
              <span className="icon"><FaPhoneAlt /></span>
              <span className="country-code">+91</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(digitsOnly(e.target.value, 10))}
                placeholder="XXXXXXXXXX"
                className="contact-input"
                maxLength={10}
                required
              />
              <button
                type="button"
                className="otp-btn"
                disabled={phone.length !== 10}
                onClick={handleGetOtp}
              >
                Get OTP
              </button>
            </div>
            {phoneError && (
              <div style={{ color: 'red', fontSize: '0.9rem', marginTop: '4px' }}>
                {phoneError}
              </div>
            )}

            {otpSent && (
              <div className="otp-field">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(digitsOnly(e.target.value, 6))}
                  placeholder="Enter OTP"
                  className="otp-input"
                  maxLength={6}
                />
                {isOtpVerified ? (
                  <button type="button" className="verify-btn verified" disabled>
                    Verified ✅
                  </button>
                ) : (
                  <button
                    type="button"
                    className="verify-btn"
                    disabled={otp.length !== 6}
                    onClick={handleVerify}
                  >
                    Verify
                  </button>
                )}
                {otpError && (
                  <div style={{ color: 'red', fontSize: '0.9rem', marginTop: '4px' }}>
                    {otpError}
                  </div>
                )}
              </div>
            )}

            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              className="input-box"
              required
            />
            {emailError && (
              <div style={{ color: 'red', fontSize: '0.9rem', marginBottom: '8px' }}>
                {emailError}
              </div>
            )}

            <div className="terms">
              <input type="checkbox" id="agree" required />
              <label htmlFor="agree">
                By proceeding further, I agree to the&nbsp;
                <a href="#terms">Terms &amp; Conditions</a> and&nbsp;
                <a href="#privacy">Privacy Policy</a> of KodeZ
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="success-popup">
          🎉 You have successfully submitted the form!
        </div>
      )}
    </div>
  );
};

export default EnrollForm;
