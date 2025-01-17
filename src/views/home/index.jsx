import React from 'react';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Hero from './s1_hero';
import JoinUs from './s2_joinus';
import Roadmap from './s3_roadmap';
import HowToGet from './s4_howtoget';
import Tokenomic from './s5_tokenomic';
import OctetApp from './s6_octetapp';

const Home = () => {
  return (
    <div className='relative h-full overflow-hidden'>
      <Navbar />
      <div className='w-full '>
        <Hero />
        <JoinUs />
        <Roadmap />
        <HowToGet />
        <Tokenomic />
        <OctetApp />
      </div>
      <Footer />
    </div>
  )
}

export default Home