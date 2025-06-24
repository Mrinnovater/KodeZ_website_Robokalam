// src/ReportsAnalytics.js
import React, { useState, useEffect } from 'react';
import './ReportsAnalytics.css';

export default function ReportsAnalytics() {
  const [selected, setSelected] = useState('This Week');

  useEffect(() => {
    localStorage.setItem('userRole', 'admin'); // Ensure correct header
  }, []);

  const handleFilterChange = (period) => setSelected(period);

  return (
    <div className="reports-analytics-container">
      <h2>Reports & Analytics</h2>

      <div className="filter-buttons">
        {['Today', 'This Week', 'This Month'].map(period => (
          <button
            key={period}
            className={selected === period ? 'active' : ''}
            onClick={() => handleFilterChange(period)}
          >
            {period}
          </button>
        ))}
      </div>

      <div className="section">
        <h4>User Engagement Overview</h4>
        <div className="metric-box">
          <p>Total Active Users ({selected.toLowerCase()}): <strong>1,324</strong></p>
          <ul>
            <li>Daily Active Students: 894</li>
            <li>Daily Active Mentors: 87</li>
            <li>Avg. Session Duration: 38 mins</li>
          </ul>
          <img src="/reports/g1.png" alt="User Engagement Graph" className="report-graph" />
        </div>
      </div>

      <div className="grid-2">
        <div className="section">
          <h4>Course Performance Analytics</h4>
          <ul>
            <li>Full Stack Java – 92%</li>
            <li>Cybersecurity Essentials – 88%</li>
            <li>AI/ML Bootcamp – 87%</li>
          </ul>
          <img src="/reports/g2.png" alt="Drop-off vs Completion Chart" className="report-graph" />
        </div>

        <div className="section">
          <h4>Mentor Effectiveness</h4>
          <ul>
            <li>Avg. Mentor Rating: 4.6</li>
            <li>Sessions Conducted: 2,238</li>
            <li>Feedback Flags: 30</li>
            <li>Top Mentor: Karan (5 courses completed)</li>
          </ul>
          <img src="/reports/g3.png" alt="Mentor Performance Graph" className="report-graph" />
        </div>
      </div>

      <div className="grid-2">
        <div className="section">
          <h4>Student Progress Trends</h4>
          <ul>
            <li>Avg. Quiz Score: 74%</li>
            <li>Weekly Progress Spike: +12%</li>
            <li>Avg. Completion Time: 47 days</li>
            <li>Top Student: 5 courses</li>
          </ul>
          <img src="/reports/g4.png" alt="Student Progress Heatmap" className="report-graph" />
        </div>

        <div className="section">
          <h4>Platform Quality Insights</h4>
          <ul>
            <li>Flags Raised: 15</li>
            <li>Resolved Reports: 11</li>
            <li>Content Quality: 4.3 / 5</li>
            <li>Downtime: 0.5h last 30 days</li>
          </ul>
          <img src="/reports/g5.png" alt="Monthly Downtime Bar Chart" className="report-graph" />
        </div>
      </div>
    </div>
  );
}
