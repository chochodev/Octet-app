import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  const join_community = 'relative flex items-center justify-center text-[1rem] md:text-[1.25rem] w-[10rem] md:w-[15.4375rem] h-[3rem] md:h-[3.875rem] rounded-[8px] bg-secondary before:border-solid before:border-secondary before:border-[1px] before:content-[""] before:absolute before:z-[10] before:top-[4px] before:left-[4px] before:w-full before:h-full before:rounded-[8px] before:bg-none hover:bg-secondary-light hover:before:border-secondary-light active:text-background transition-all duration-250 ease-in-out '
  return (
    <div className='relative flex flex-col gap-[4rem] items-center pt-[4rem] sm:pt-[8rem] md:pt-[10rem] w-full min-h-[50rem]'>
      <div className="relative z-[2] flex flex-col gap-[2rem] items-center xl:items-start w-full">
        <div className="flex flex-col w-full xl:max-w-[46rem] gap-[2rem]">
          <h1 className='text-[2.375rem] sm:text-[2.875rem] md:text-[3.375rem] font-bold uppercase'>We are moving around the world with the <span className='text-secondary'>OCTET</span> project at the forefront to detect malicious code.</h1>
          <p className='text-[.875rem] md:text-[1.25rem]'>Please contribute to the project by submitting malicious codes. And you can earn rewards.</p>
        </div>
        <div className="flex w-full xl:max-w-[46rem]">
          <Link to='joinus' className={join_community}>Join Community</Link>
          <Link to='whitepaper' className='relative flex items-center justify-center text-[1.15rem] md:text-[1.25rem] px-[2.25rem] h-[3rem] md:h-[3.875rem] underline underline-offset-2 decoration-[2px] hover:decoration-secondary active:text-secondary transition-all duration-250 ease-in-out'>Whitepaper</Link>
        </div>
      </div>
      <img src="./assets/images/hero-image-1.png" alt="HERO" className='xl:absolute z-[1] right-0 h-auto xl:h-[30.25rem] w-[90%] xl:w-[30.25rem] max-w-[40rem] object-cover' />
    </div>
  )
}

export default Hero