import React from 'react';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Hero from './s1_hero';
import JoinUs from './s2_joinus';

const Home = () => {
  return (
    <>
    <Navbar />
    <div>
      <Hero />
      <JoinUs />
    </div>
    <Footer />
    </>
  )
}

export default Home