import React from 'react';
import './CompanyShowcase.css';
import { motion } from 'framer-motion';

const CompanyShowcase = () => {
  const logos = [
  'accenture.png',
  'capgemini.png',
  'wipro.png',
  'cognizant.png',
  'infosys.png',
  'tcs.png',
  'deloitte.jpg',
  'genpact.jpg',
  'hcltech.png',
  'hexaware.png',
  'innova.webp',
  'kritikal.jpg',
  'ltimindtree.jpg',
  'devdolphins.png',
  'mu-sigma.png',
  'netcracker.png',
  'citizens-bank.jpg',
  'zf.jpg',
  'nelsis.png'
];


  return (
    <div className="company-container">
      <div className="company-bg" />

      <h2 className="company-header">Learn from the best Alumni of Global Organizations</h2>
      <p className="company-subheader">Explore the companies our alumni are placed in</p>

      <div className="logo-grid">
        {logos.map((logo, index) => {
          const isSmall =
            logo.toLowerCase().includes('nelsis') || logo.toLowerCase().includes('deloitte');

          return (
            <motion.img
              key={index}
              src={`/companyLogos/${logo}`}
              alt={`logo-${index}`}
              className={`logo-img ${isSmall ? 'small-logo' : ''}`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyShowcase;
