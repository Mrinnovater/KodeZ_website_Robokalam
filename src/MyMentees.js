import React, { useState } from 'react';
import './MyMentees.css';

const initialMentees = [
  {
    id: 1,
    name: 'Sarah Scott',
    email: 'sarah.scott@example.co',
    joined: 'March 2023',
    lesson: 'Module 3',
    sessions: 20,
    status: 'Active',
    nextSession: 'Apr 2, 2024',
    completion: 75,
    image: '/dashboard/studprof.jpg',
  },
  {
    id: 2,
    name: 'Math Lane',
    email: 'math.lane@example.com',
    joined: 'Login Pending',
    lesson: 'Module 3',
    sessions: 15,
    status: 'Paused',
    nextSession: 'Apr 4, 2024',
    completion: 75,
    image: '/dashboard/studprof.jpg',
  },
  {
    id: 3,
    name: 'Emily White',
    email: 'emily.white@example.co',
    joined: 'Jan 2023',
    lesson: 'Module 3',
    sessions: 18,
    status: 'Active',
    nextSession: 'Completed',
    completion: 75,
    image: '/dashboard/studprof.jpg',
  },
];

export default function MyMentees() {
  const [mentees] = useState(initialMentees);
  const [search, setSearch] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [scheduleText, setScheduleText] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [scheduleSent, setScheduleSent] = useState(false);

  const filtered = mentees.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setSelectedMessage(null);
      setMessageText('');
    }, 3000);
  };

  const handleSendSchedule = () => {
    setScheduleSent(true);
    setTimeout(() => {
      setScheduleSent(false);
      setSelectedSchedule(null);
      setScheduleText('');
    }, 3000);
  };

  return (
    <div className="mentees-container">
      <h2>My Mentees</h2>
      <input
        type="text"
        placeholder="Search"
        className="mentees-search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="mentees-list">
        {filtered.map(m => (
          <div className="mentee-card" key={m.id}>
            <img src={m.image} alt={m.name} className="mentee-img" />
            <h3>{m.name}</h3>
            <p>{m.email}</p>
            <p>Joined: {m.joined}</p>
            <p>Current Lesson: {m.lesson}</p>
            <p>Total Sessions: {m.sessions}</p>
            <p>Status: <span className={`status ${m.status.toLowerCase()}`}>{m.status}</span></p>
            <p>Next Session: {m.nextSession}</p>
            <p>Completion: {m.completion}%</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${m.completion}%` }}></div>
            </div>
            <div className="mentee-actions">
              <button onClick={() => setSelectedProfile(m)}>View Profile</button>
              <button onClick={() => setSelectedMessage(m)}>Message</button>
              <button onClick={() => setSelectedSchedule(m)}>Schedule Session</button>
            </div>
          </div>
        ))}
      </div>

      {/* View Profile Popup */}
      {selectedProfile && (
        <div className="popup-overlay" onClick={() => setSelectedProfile(null)}>
          <div className="popup-card" onClick={e => e.stopPropagation()}>
            <h3>{selectedProfile.name}'s Profile</h3>
            <p><strong>Email:</strong> {selectedProfile.email}</p>
            <p><strong>Joined:</strong> {selectedProfile.joined}</p>
            <p><strong>Lesson:</strong> {selectedProfile.lesson}</p>
            <p><strong>Sessions:</strong> {selectedProfile.sessions}</p>
            <p><strong>Status:</strong> {selectedProfile.status}</p>
            <p><strong>Next Session:</strong> {selectedProfile.nextSession}</p>
            <button onClick={() => setSelectedProfile(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Message Popup */}
      {selectedMessage && (
        <div className="popup-overlay" onClick={() => setSelectedMessage(null)}>
          <div className="popup-card" onClick={e => e.stopPropagation()}>
            <h3>Send Message to {selectedMessage.name}</h3>
            <textarea
              rows="4"
              placeholder="Enter your message..."
              value={messageText}
              onChange={e => setMessageText(e.target.value)}
            ></textarea>
            {messageSent ? (
              <p style={{ color: 'green', marginTop: '10px' }}>✅ Message Sent!</p>
            ) : (
              <button onClick={handleSendMessage}>Send</button>
            )}
          </div>
        </div>
      )}

      {/* Schedule Popup */}
      {selectedSchedule && (
        <div className="popup-overlay" onClick={() => setSelectedSchedule(null)}>
          <div className="popup-card" onClick={e => e.stopPropagation()}>
            <h3>Schedule Session with {selectedSchedule.name}</h3>
            <textarea
              rows="3"
              placeholder="Session description..."
              value={scheduleText}
              onChange={e => setScheduleText(e.target.value)}
            ></textarea>
            {scheduleSent ? (
              <p style={{ color: 'green', marginTop: '10px' }}>✅ Invitation Sent!</p>
            ) : (
              <button onClick={handleSendSchedule}>Send Invitation</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
