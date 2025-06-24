import React, { useState } from 'react';
import './MyDiscussions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const avatar = '/dashboard/studprof.jpg';

const INITIAL_DISCUSSIONS = [
  {
    id: 1,
    title: 'Frontend Debugging Help Needed!',
    author: 'Arjun Mehta',
    course: 'Full Stack Web Development',
    snippet: 'I’m stuck with a flexbox layout issue in React. Can someone take a look at my code snippet?',
    unread: true,
    tag: 'General'
  },
  {
    id: 2,
    title: 'Cybersecurity Quiz 3 Clarification',
    author: 'Anjali Verma',
    course: 'Cybersecurity',
    snippet: 'Question 5 seems unclear to me. Has anyone confirmed the right option with the mentor?',
    unread: false,
    tag: 'General'
  },
  {
    id: 3,
    title: 'Final Project: AI Chatbot Suggestions',
    author: 'Arjun Mehta',
    course: 'Python + AI',
    snippet: 'Building a chatbot for my final project. Any suggestions for good NLP tools?',
    unread: false,
    tag: 'Project'
  }
];

export default function MyDiscussions() {
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [discussions, setDiscussions] = useState(INITIAL_DISCUSSIONS);
  const [form, setForm] = useState({ title: '', course: '', tag: 'General', snippet: '' });
  const [errors, setErrors] = useState({ title: false, course: false, snippet: false });

  const shown = discussions.filter(d =>
    filter === 'All' ? true :
    filter === 'Unread' ? d.unread :
    d.tag === filter
  );

  const addDiscussion = () => {
    const newErrors = {
      title: !form.title.trim(),
      course: !form.course.trim(),
      snippet: !form.snippet.trim()
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    const newDiscussion = {
      ...form,
      id: discussions.length + 1,
      author: 'You',
      unread: true
    };
    setDiscussions([newDiscussion, ...discussions]);
    setShowForm(false);
    setForm({ title: '', course: '', tag: 'General', snippet: '' });
    setErrors({ title: false, course: false, snippet: false });
  };

  const handleThreadClick = (id) => {
    setDiscussions(prev =>
      prev.map(d => d.id === id ? { ...d, unread: false } : d)
    );
  };

  const deleteDiscussion = (id) => {
    setDiscussions(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div className="discussions-wrapper">
      <div className="discussions-header">
        <h1>My Discussions</h1>
        <button className="new-btn" onClick={() => setShowForm(true)}>
          ＋ New Discussion
        </button>
      </div>

      <div className="filter-row">
        {['All', 'Unread', 'General'].map(b => (
          <button
            key={b}
            className={`pill ${filter === b ? 'active' : ''}`}
            onClick={() => setFilter(b)}
          >
            {b}
          </button>
        ))}
      </div>
      <hr />

      <div className="threads">
        {shown.map(d => (
          <div key={d.id} className={`thread-card ${d.unread ? 'unread' : ''}`} onClick={() => handleThreadClick(d.id)}>
            <img src={avatar} alt="avatar" />
            <div className="thread-info">
              <h3>{d.title}</h3>
              <p className="meta">
                Started by: <strong>{d.author}</strong> • Course: {d.course}
              </p>
              <p className="snippet">“{d.snippet}”</p>
            </div>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteDiscussion(d.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
        {shown.length === 0 && <p className="empty">No threads in this view 🎉</p>}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-form" onClick={e => e.stopPropagation()}>
            <h2>Start a New Discussion</h2>
            <input
              className={errors.title ? 'input-error' : ''}
              placeholder="Discussion Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              className={errors.course ? 'input-error' : ''}
              placeholder="Course Name"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
            />
            <select
              value={form.tag}
              onChange={(e) => setForm({ ...form, tag: e.target.value })}
            >
              <option value="General">General</option>
              <option value="Project">Project</option>
              <option value="Quiz">Quiz</option>
            </select>
            <textarea
              className={errors.snippet ? 'input-error' : ''}
              placeholder="Write your doubt or message..."
              value={form.snippet}
              onChange={(e) => setForm({ ...form, snippet: e.target.value })}
            />
            <button className="post-btn" onClick={addDiscussion}>Post Discussion</button>
          </div>
        </div>
      )}
    </div>
  );
}
