import React from 'react';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import AboutUs from '../components/about/AboutUs';
import MeetTruAI from '../components/meet-ai/Meet-AI';
import WhyChooseLens from '../components/whychooselens/WhyChooseLens';
import LandingPage from './LandingPage';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Services />
      <MeetTruAI/>
      <WhyChooseLens/>
      <LandingPage/>

    </div>
  );
};

export default Home;
