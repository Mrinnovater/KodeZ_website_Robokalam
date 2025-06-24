// HomePage.js (clean version)
import React from 'react';

import HeroSection from './HeroSection';
import WhatDoWeOffer from './WhatDoWeOffer';
import MeetOurTeam from './MeetOurTeam';
import Courses from './Courses';
import Collaborators from './Collaborators';
import CompanyShowcase from './CompanyShowcase';
import HiringPartners from './HiringPartners';
import AwardsRecognization from './AwardsRecognization';
import SuccessStories from './SuccessStories';
import Testimonials from './Testimonials';
import WhyCompaniesPrefer from './WhyCompaniesPrefer';
import MentorCommunity from './MentorCommunity';
import Footer from './Footer';

export default function HomePage({ setIsEnrollOpen }) {
  const openEnroll = () => setIsEnrollOpen(true);

  return (
    <>
      <HeroSection openEnroll={openEnroll} />
      <WhatDoWeOffer />
      <MeetOurTeam />
      <Courses openEnroll={openEnroll} />
      <Collaborators />
      <CompanyShowcase />
      <HiringPartners setIsEnrollOpen={setIsEnrollOpen} />
      <AwardsRecognization />
      <SuccessStories />
      <Testimonials />
      <WhyCompaniesPrefer />
      <MentorCommunity />
      <Footer />
    </>
  );
}
