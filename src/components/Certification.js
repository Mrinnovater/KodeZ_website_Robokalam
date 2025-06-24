import React from "react";
import "./Certification.css";
import certificateImage from "../assets/certificate.png";

const capImage = process.env.PUBLIC_URL + "/certification/cap.jpg";
const arrowImage = process.env.PUBLIC_URL + "/certification/award-design-line-desktop-2x.png";

const CertificationSection = ({ setIsEnrollOpen }) => {
  return (
    <div className="certification-container">
      <div className="back-arrow" onClick={() => window.history.back()}>
        ← Back
      </div>

      {/* Heading Row with Cap */}
      <div className="cap-heading-wrapper">
        <img src={capImage} alt="Graduation Cap" className="cap-icon" />
        <div className="text-heading">
          <h2>
            <strong>Certified to Work.</strong>{" "}
            <span>Trained to Lead</span>
          </h2>
          <p className="subtext">
            Earn a certificate that proves more than knowledge—it proves
            you’re job-ready. With KodeZ by Robokalam, showcase real skills
            through hands-on projects and industry-grade assessments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="certification-grid">
        {/* Left Column - Certificate */}
        <div className="cert-left">
          <div className="certificate-box">
            <img
              src={certificateImage}
              alt="Certificate"
              className="certificate-image"
            />
          </div>

          <div className="divider-arrow-image">
            <img src={arrowImage} alt="Arrow Divider" />
          </div>

          <button className="enroll-btn" onClick={() => setIsEnrollOpen(true)}>
            Enroll Now →
          </button>
        </div>

        {/* Right Column - Info Sections */}
        <div className="cert-right">
          <div className="cert-section">
            <h4>🥇KodeZ Industry Certification</h4>
            <p>
              Unlike generic academic certificates, Robokalam’s KodeZ
              Certification demonstrates real job readiness in today’s tech
              landscape. Backed by industry projects and live evaluations.
            </p>
          </div>

          <div className="cert-section">
            <h4>🔗Credible, Shareable, Recognized</h4>
            <p>
              Boost your visibility! Add your KodeZ Certificate to LinkedIn,
              share it via WhatsApp, or showcase it in your portfolio. It’s
              official, verifiable, and makes your profile shine.
            </p>
          </div>

          <div className="cert-section">
            <h4>💼Let Companies Find You</h4>
            <p>
              With KodeZ certification, your readiness is industry-approved.
              Get noticed by hiring managers and recruiters, and land roles
              with better pay and position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
