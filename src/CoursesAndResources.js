import React, { useState } from 'react';
import './CoursesAndResources.css';

export default function CoursesAndResources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [newResource, setNewResource] = useState({ title: '', description: '', icon: '' });

  const [resources, setResources] = useState([
    {
      title: 'Understanding Python Basics',
      description: 'Introduction to Python Programming',
      icon: '🧠',
    },
    {
      title: 'Debugging Techniques & Tips',
      description: 'Best practices for debugging code',
      icon: '🛠️',
    },
    {
      title: 'HTML & CSS Essentials',
      description: 'Fundamentals of web development',
      icon: '📄',
    },
    {
      title: 'Mentorship Ebooks',
      description: 'Downloadable guides on mentoring',
      icon: '💬',
    },
    {
      title: 'Creative Project Ideas',
      description: 'Ideas to engage and challenge students',
      icon: '🎯',
    },
    {
      title: 'Handling Difficult Questions',
      description: 'Guidance on managing tricky topics',
      icon: '❓',
    },
  ]);

  const filteredResources = resources.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddResource = () => {
    if (newResource.title && newResource.description && newResource.icon) {
      setResources([...resources, newResource]);
      setNewResource({ title: '', description: '', icon: '' });
      setShowPopup(false);
    }
  };

  return (
    <div className="course-resources-container">
      <div className="course-resources-header">
        <div className="header-title-profile">
          <h1>Course Resources</h1>
          <img src="/dashboard/studprof.jpg" alt="Profile" className="profile-img" />
        </div>

        <div className="header-search-actions">
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-btn" onClick={() => setShowPopup(true)}>
            + Add Resources
          </button>
        </div>
      </div>

      <div className="resources-grid">
        {filteredResources.map((res, index) => (
          <div className="resource-card" key={index}>
            <div className="icon">{res.icon}</div>
            <h3>{res.title}</h3>
            <p>{res.description}</p>
          </div>
        ))}
      </div>

      <div className="more-btn-wrapper">
        <button className="more-btn">Many more......</button>
      </div>

      {showPopup && (
        <div
          className="popup-overlay"
          onClick={(e) => e.target.classList.contains('popup-overlay') && setShowPopup(false)}
        >
          <div className="popup-form">
            <h2>Add New Resource</h2>
            <input
              type="text"
              placeholder="Title"
              value={newResource.title}
              onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newResource.description}
              onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Icon (Emoji)"
              value={newResource.icon}
              onChange={(e) => setNewResource({ ...newResource, icon: e.target.value })}
            />
            <button onClick={handleAddResource}>Add Resource</button>
          </div>
        </div>
      )}
    </div>
  );
}
