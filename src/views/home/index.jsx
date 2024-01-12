import React from 'react';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Hero from './s1_hero';
import JoinUs from './s2_joinus';
import Roadmap from './s3_roadmap';
import HowToGet from './howtoget';

const Home = () => {
  return (
    <div className='relative'>
    <Navbar />
    <div className='w-full '>
      <Hero />
      <JoinUs />
      <Roadmap />
      <HowToGet />
    </div>
    <Footer />
    </div>
  )
}

export default Home