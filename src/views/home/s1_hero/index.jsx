import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='relative flex w-full'>
      <div className="flex flex-col">
        <h1>We are moving around the world with the OCTET project at the forefront to detect malicious code.</h1>
        <p>Please contribute to the project by submitting malicious codes. And you can earn rewards.</p>
        <div className="flex">
          <Link to='joinus' className=''>Join Community</Link>
          <Link to='whitepaper' className=''>Whitepaper</Link>
        </div>
      </div>
      <img src="./assets/images/hero-image-1.png" alt="HERO" className='' />
    </div>
  )
}

export default Hero