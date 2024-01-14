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
    <div className='relative'>
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

      <div className='absolute top-0 left-0 flex h-full w-full'>
        <div className="relative w-full h-full ">
          <div className="absolute right-[-25rem] top-[-15rem] flex h-[55rem] w-[55rem] bg-gradient-radial blur-3xl from-gradient/70 via-gradient/20 to-background rounded-full"></div>
          <div className="absolute right-[-25rem] top-[-15rem] flex h-[55rem] w-[55rem] bg-[#2A2BB9]-radial blur-3xl from-[#2A2BB9]/70 via-[#2A2BB9]/20 to-background rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Home