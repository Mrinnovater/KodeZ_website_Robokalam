// src/FeedbackFlags.js
import React, { useEffect } from 'react';
import './FeedbackFlags.css';

export default function FeedbackFlags() {
  useEffect(() => {
    localStorage.setItem('userRole', 'admin');
  }, []);

  return (
    <div className="feedback-flags-container">
      <h2>Feedback & Flags</h2>

      <div className="section-box">
        <h3>Recent Feedback</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Feedback</th>
              <th>Submitted On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shiva (Student)</td>
              <td>Course</td>
              <td>Loved the React module. Would love more projects!</td>
              <td>June 19, 2025</td>
            </tr>
            <tr>
              <td>Karan (Mentor)</td>
              <td>Platform</td>
              <td>Add analytics to mentor dashboard.</td>
              <td>June 18, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-box">
        <h3>Flagged Items</h3>
        <table>
          <thead>
            <tr>
              <th>Flag Type</th>
              <th>Submitted By</th>
              <th>Issue</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inappropriate Comment</td>
              <td>Priya (Student)</td>
              <td>Mentor was unresponsive</td>
              <td>June 17, 2025</td>
              <td>Investigating</td>
            </tr>
            <tr>
              <td>Course Bug</td>
              <td>Admin AI</td>
              <td>Broken quiz link in Python Basics</td>
              <td>June 15, 2025</td>
              <td>Resolved</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-box">
        <h3>Stats at a Glance</h3>
        <ul>
          <li>Total Feedback This Week: <strong>32</strong></li>
          <li>Resolved Flags: <strong>12</strong></li>
          <li>Pending Flags: <strong>4</strong></li>
        </ul>
      </div>

      <div className="section-box">
        <h3>Actions</h3>
        <ul className="actions-list">
          <li>✔ View All Feedback</li>
          <li>⚠ Escalate Repeated Flags</li>
          <li>☑ Export Monthly Report</li>
        </ul>
      </div>
    </div>
  );
}
