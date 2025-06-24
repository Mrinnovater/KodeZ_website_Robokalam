import React, { useState } from 'react';
import './FeedbackReports.css';

const initialFeedbacks = [
  {
    id: 1,
    name: 'Emma Taylor',
    image: '/dashboard/studprof.jpg',
    message: 'Great mentoring Session!\n"Great way to understand Java"',
    rating: 4
  },
  {
    id: 2,
    name: 'Math Lane',
    image: '/dashboard/studprof.jpg',
    message: 'I appreciated the detailed step_by_step explanations"',
    rating: 3
  },
  {
    id: 3,
    name: 'Sarah Scott',
    image: '/dashboard/studprof.jpg',
    message: 'Helpful explanations, made me to gain\nKnowledge, skills and confidence. Thank you!!',
    rating: 5
  }
];

export default function FeedbackReports() {
  const [feedbacks] = useState(initialFeedbacks);
  const [search, setSearch] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const filtered = feedbacks.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

  const handleFinalReport = () => {
    setShowPopup(true);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>Feedback & Reports</h2>
        <div className="header-actions">
          <button className="final-report" onClick={handleFinalReport}>📊 Final report</button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="feedback-list">
        {filtered.map(fb => (
          <div key={fb.id} className="feedback-card">
            <img src={fb.image} alt={fb.name} className="feedback-image" />
            <div className="feedback-message">
              <p>{fb.message}</p>
              <strong>{fb.name}</strong>
            </div>
            <div className="feedback-meta">
              <button className="session-feedback">Session Feedback</button>
              <div className="stars">
                {'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>📊 Mentor Feedback Summary</h3>
            <p>Total Feedbacks Received: {feedbacks.length}</p>
            <ul>
              {feedbacks.map((fb) => (
                <li key={fb.id}><strong>{fb.name}</strong>: {fb.message.split('\n')[0]}</li>
              ))}
            </ul>
            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
