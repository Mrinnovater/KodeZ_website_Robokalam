import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => (
  <footer className="footer">
    {/* ---------- Top Grid ---------- */}
    <div className="footer-main">
      {/* Contact */}
      <div className="footer-section">
        <img src="/footer/rklogo.png" alt="Robokalam Logo" className="footer-logo" />
        <h4>Reach Us</h4>

        {/* WhatsApp block */}
        <div className="contact-row">
          <FaWhatsapp className="icon whatsapp" />
          <div className="multi-lines">
            <p>+91 966628 7717</p>
            <p>+91 966628 7747</p>
          </div>
        </div>

        {/* Email block */}
        <div className="contact-row">
          <FaEnvelope className="icon" />
          <a href="mailto:info@robokalam.in" className="plain-link">
            info@robokalam.in
          </a>
        </div>

        <p className="copyright">
          © 2025 Robokalam Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h4>Quick Links</h4>
        <div className="quick-links">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/hire">Hire With Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/about">About Us</a>
          <a href="/reviews">Reviews</a>
          <a href="/community">Community</a>
          <a href="/mentorship">Mentorship</a>
        </div>
      </div>

      {/* Location */}
      <div className="footer-section">
        <h4>Location</h4>
        <div className="contact-row">
          <FaMapMarkerAlt className="icon" />
          <p>
            Room 24, Floor 3, Dr. B. R. Ambedkar Telangana Secretariat,
            Secretariat Rd, Khairatabad, Hyderabad, Telangana 500022
          </p>
        </div>
      </div>
    </div>

    <hr />

    {/* ---------- Bottom Row ---------- */}
    <div className="footer-bottom">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/company/robokalam"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/robokalam"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/robokalam"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/robokalam"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.youtube.com/@robokalam"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="youtube"
        >
          <FaYoutube />
        </a>
      </div>

      <div className="footer-policies">
        <a href="/privacy">Privacy Policy</a>
        <a href="/cookies">Cookie Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/grievance">Grievance Redressal</a>
        <a href="/corporate">Corporate Information</a>
        <a href="/vision">Vision & Values</a>
      </div>
    </div>
  </footer>
);

export default Footer;
