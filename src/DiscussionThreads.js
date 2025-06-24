// src/DiscussionThreads.js
import React, { useState, useEffect } from 'react';
import './DiscussionThreads.css';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'; // ✅ FontAwesome icons

const allThreads = [
  {
    id: 1,
    name: 'Math Lane',
    title: 'Issues with Oops Concept',
    created: '3 days ago',
    tags: ['Doubt', 'Java'],
    comments: 5,
    saved: false,
    image: '/dashboard/studprof.jpg',
  },
  {
    id: 2,
    name: 'Soniya',
    title: 'Weekly Session Feedback',
    created: '6 days ago',
    tags: ['Feedback'],
    comments: 2,
    saved: false,
    image: '/dashboard/studprof.jpg',
  },
  {
    id: 3,
    name: 'Emily Brown',
    title: 'Need help with the project',
    created: '5 days ago',
    tags: ['Project Help', 'Doubt'],
    comments: 4,
    saved: false,
    image: '/dashboard/studprof.jpg',
  },
  {
    id: 4,
    name: 'Monalisa',
    title: 'Resources For Python',
    created: 'Yesterday',
    tags: ['resources'],
    comments: 1,
    saved: false,
    image: '/dashboard/studprof.jpg',
  }
];

export default function DiscussionThreads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [threads, setThreads] = useState(allThreads);

  useEffect(() => {
    const updated = allThreads.filter(t => {
      const matchesName = t.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'All' || t.tags.includes(filter);
      return matchesName && matchesFilter;
    });
    setThreads(updated);
  }, [searchTerm, filter]);

  const toggleSave = (id) => {
    const updated = threads.map(t => t.id === id ? { ...t, saved: !t.saved } : t);
    setThreads(updated);
  };

  return (
    <div className="discussion-wrapper">
      <div className="discussion-header">
        <h2>Discussion Threads</h2>
        <div className="discussion-actions">
          <input
            type="text"
            placeholder="Search by student name"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Doubt">Doubt</option>
            <option value="Java">Java</option>
            <option value="Feedback">Feedback</option>
            <option value="Project Help">Project Help</option>
            <option value="resources">Resources</option>
          </select>
        </div>
      </div>

      <div className="discussion-list">
        {threads.map(thread => (
          <div className="discussion-card" key={thread.id}>
            <div className="discussion-left">
              <img src={thread.image} alt={thread.name} className="student-avatar" />
            </div>
            <div className="discussion-right">
              <h3>{thread.title}</h3>
              <div className="meta-row">
                <span className="author">{thread.name}</span>
                <span className="created">Created {thread.created}</span>
              </div>
              <div className="tags-row">
                {thread.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="icons-row">
                <span>💬 {thread.comments}</span>
                <button
                  onClick={() => toggleSave(thread.id)}
                  className={`bookmark ${thread.saved ? 'saved' : ''}`}
                  title="Save"
                >
                  {thread.saved ? <FaBookmark className="filled" /> : <FaRegBookmark />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
