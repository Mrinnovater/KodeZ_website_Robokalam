// MeetOurTeam.js
import React from 'react';
import './MeetOurTeam.css';

const teamMembers = [
  {
    name: "Akkiraju Hari Kishore",
    role: "Program Chief Advisor",
    image: "/meetourteam/akkiraju.png"
  },
  {
    name: "Raja Sekhar Thota",
    role: "Program Instructor",
    image: "/meetourteam/rajasekhar.png"
  },
  {
    name: "Shamini",
    role: "Program Instructor",
    image: "/meetourteam/shamini.png"
  },
  {
    name: "Mohammed Sajeed",
    role: "Program Instructor",
    image: "/meetourteam/sajeed.png"
  }
];

const MeetOurTeam = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
