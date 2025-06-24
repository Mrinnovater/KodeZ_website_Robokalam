import React, { useState } from "react";
import "../Webinars.css";

// Use direct image URLs instead of imports
import upcomingImg from "../assets/upcoming.png";
const past1 = "https://d502jbuhuh9wk.cloudfront.net/orgData/650600bee4b093e1d23f1b00/liveSessions/KbCkSIPO-FSFi-hv6m-p8h4-esKTZjCuN56M4HWg-DEkBmYjaCKGN/cover/FtVSv/2024-11-01T11:30:35.292Z.jpg";
const past2 = "https://d502jbuhuh9wk.cloudfront.net/orgData/650600bee4b093e1d23f1b00/liveSessions/UuqfcwPv-5RLj-06Ha-VbHW-5JlucRwORlQtIJEG-JAi2Mn5eGAHn/cover/rerCF/Arduino%20(1).png";
const past3 = "https://d502jbuhuh9wk.cloudfront.net/orgData/650600bee4b093e1d23f1b00/liveSessions/UNtHchZ8-bZcj-NVih-kujk-8rwQhT3oRhrKtdm3-MrKvfIPRi2St/cover/MrGOo/Webinar%20Graphy%20Understanding%20all%20about%20Python.png";

const Webinars = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="webinars-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => window.history.back()}>
        <span className="arrow">←</span> Back
      </div>


      {/* Heading */}
      <h1 className="heading">Webinars</h1>

      {/* Tabs */}
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past(3)
        </button>
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "upcoming" && (
        <div className="section-box">
          <div className="section-title">Upcoming</div>
          <div className="webinar-card">
            <img src={upcomingImg} alt="Upcoming Webinar" />
          </div>
        </div>
      )}

      {activeTab === "past" && (
        <div className="section-box">
          <div className="section-title">Past</div>
          <div className="webinar-row">
            <img src={past1} alt="Past Webinar 1" />
            <img src={past2} alt="Past Webinar 2" />
            <img src={past3} alt="Past Webinar 3" />
          </div>
        </div>
      )}

      {activeTab === "all" && (
        <div className="section-box">
          <div className="section-title">All</div>
          <div className="webinar-row">
            <img src={past1} alt="All Webinar 1" />
            <img src={past2} alt="All Webinar 2" />
            <img src={past3} alt="All Webinar 3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Webinars;
