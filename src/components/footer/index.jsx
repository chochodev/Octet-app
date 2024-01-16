import React from 'react'
import { Link } from 'react-scroll';
// import { RiGithubLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='relative z-[2] flex flex-col md:flex-row gap-y-[2rem] justify-center md:justify-evenly items-center min-h-[10.5rem] w-full p-[6%]'>
      <div className='flex flex-1 items-center gap-[2%] md:gap-[5%] justify-center w-full'>
        <Link to='home' className='text-[.75rem] md:text-[1rem] hover:text-secondary active:text-secondary-dim transition-all duration-200 ease-in-out'>Home</Link>
        <Link to='joinus' offset={-80} className='text-[.75rem] md:text-[1rem] hover:text-secondary active:text-secondary-dim transition-all duration-200 ease-in-out'>Join Us</Link>
        <Link to='roadmap' offset={-80} className='text-[.75rem] md:text-[1rem] hover:text-secondary active:text-secondary-dim transition-all duration-200 ease-in-out'>Roadmap</Link>
        <Link to='tokenomic' offset={-80} className='text-[.75rem] md:text-[1rem] hover:text-secondary active:text-secondary-dim transition-all duration-200 ease-in-out'>Tokenomics</Link>
        <Link to='oct-app' className='text-[.75rem] md:text-[1rem] hover:text-secondary active:text-secondary-dim transition-all duration-200 ease-in-out uppercase'>Oct App</Link>
      </div>
      <div className='flex gap-[15%] justify-center min-w-[30%]'>
        <a href='https://github.com/octetproject' target="_blank" rel='noopener noreferrer'>
          <img src="./assets/svg/github.svg" alt="TELEGRAM" className='w-[3rem] h-[3rem] object-contain' />
          {/* <RiGithubLine className='w-[3rem] h-[3rem]' /> */}
        </a>
        <a href='https://discord.gg/c3Jnn3QGB4' target="_blank" rel='noopener noreferrer'>
          <img src="./assets/svg/discord.svg" alt="DISCORD" className='w-[3rem] h-[3rem] object-contain' />
        </a>
        <a href='https://twitter.com/Official_Octet' target="_blank" rel='noopener noreferrer'>
          <img src="./assets/svg/x.svg" alt="X" className='w-[3rem] h-[3rem] object-contain' />
        </a>
      </div>
    </div>
  )
}

export default Footer