import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
  const [openSmallNav, setOpenSmallNav] = useState(false);

  const nav_link = 'text-[1.15rem] xl:text-[1.25rem] font-semibold w-full text-center hover:text-secondary active:text-secondary-light transition-all duration-250 ease-in-out';

  return (
    <div className='sticky z-[50] top-0 left-0 h-max w-full bg-background'>
      <div 
        className='relative z-[50] flex items-center justify-end lg:justify-center gap-[5rem] lg:gap-[20%] w-full py-[1.25rem] sm:py-[2rem] px-[5%] lg:px-[5rem] xl:px-[7.5rem]' 
        style={{
          background: 'linear-gradient(to right, #2A2BB9aa 0%, transparent 30%, transparent 70%, #852169aa 100%)'
        }}
      >
        <img src='./assets/images/logo.png' alt='LOGO' className='absolute left-[5%] xl:left-[7.5%] h-[5rem] w-[5rem] object-cover select-none' />
        <div className="hidden lg:flex justify-evenly w-[50%] min-w-[40rem] lg:min-w-[45rem] px-0 xl:px-[.5rem] py-[1rem] rounded-[6.25rem] border-solid border-white border-[1px]">
          <Link to='home' offset={-80} className={nav_link}>Home</Link>
          <Link to='joinus' offset={-80} className={nav_link}>Join Us</Link>
          <Link to='roadmap' offset={-80} className={nav_link}>Roadmap</Link>
          <Link to='tokenomic' offset={-80} className={nav_link}>Tokenomics</Link>
          <Link to='oct-app' className={nav_link}>OCT APP</Link>
        </div>
        <button onClick={()=>setOpenSmallNav(!openSmallNav)} className='lg:hidden'>
          {!openSmallNav? 
            <RiMenuLine className='bg-tertiary2/10 hover:bg-tertiary2/20 rounded-[8px] p-[.45rem] text-tertiary2 active:text-[#ffffff] text-[2.75rem] transition-all ease-in-out duration-200 ' />
            : <RiCloseFill  className='bg-tertiary2/10 hover:bg-tertiary2/20 rounded-[8px] p-[.45rem] text-tertiary2 active:text-[#ffffff] text-[2.75rem] transition-all ease-in-out duration-200 ' />
          }
        </button>
        {/* GRADIENT */}
        {/* <div className="absolute z-[1] right-0 top-0 flex h-[33rem] w-[33rem] bg-gradient-radial from-gradient via-background to-background rounded-full"></div> */}
      </div>
      <div className={`absolute ${openSmallNav? 'top-[100%] right-0 opacity-[100%] select-auto z-[50] visible' : 'top-[200%] right-[.5rem] opacity-0 select-none z-[-5] invisible'} lg:hidden flex flex-col items-center h-screen w-full gap-[2.125rem] xl:gap-[2.8125rem] pt-[12rem] bg-background px-[2rem] py-[3.5rem] transition-all ease-in-out duration-200 overflow-hidden`}>
        <Link to='home' offset={-80} className={nav_link}>Home</Link>
        <Link to='joinus' offset={-80} className={nav_link}>Join Us</Link>
        <Link to='roadmap' offset={-80} className={nav_link}>Roadmap</Link>
        <Link to='tokenomic' offset={-80} className={nav_link}>Tokenomics</Link>
        <Link to='oct-app' className={nav_link}>OCT APP</Link>
        <div className='absolute z-[-1] top-0 left-0 flex h-full w-full'>
          <div className="relative w-full h-full ">
            <div className="absolute left-[-5rem] top-[-8rem] flex h-[15rem] w-[15rem] blur-3xl bg-gradient-radial from-[#2A2BB9] via-background to-background rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar