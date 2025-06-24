// ForgotPassword.js
import React from 'react';
import './LoginForm.css'; // reuse styles

const ForgotPassword = () => (
  <div className="login-wrapper">
    <div className="login-box">
      <h2>Forgot Password</h2>
      <p>Enter your registered email to receive a reset link.</p>

      <form>
        <div className="input-group">
          <label>Email ID</label>
          <div className="input-icon">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Enter your email" required />
          </div>
        </div>

        <button type="submit" className="login-btn">Send Reset Link</button>
      </form>
    </div>
  </div>
);

export default ForgotPassword;
