import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='relative flex w-full'>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className='text-[3.375rem] font-bold'>We are moving around the world with the OCTET project at the forefront to detect malicious code.</h1>
        <p>Please contribute to the project by submitting malicious codes. And you can earn rewards.</p>
        </div>
        <div className="flex">
          <Link to='joinus' className=''>Join Community</Link>
          <Link to='whitepaper' className=''>Whitepaper</Link>
        </div>
      </div>
      <img src="./assets/images/hero-image-1.png" alt="HERO" className='absolute z-[2] right-0 top-0 h-[30.25rem] w-[30.25rem] object-cover' />
    </div>
  )
}

export default Hero