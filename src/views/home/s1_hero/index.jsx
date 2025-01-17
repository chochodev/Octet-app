import React from 'react';

const Hero = () => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';
  const join_community = 'relative flex items-center justify-center text-[.875rem] sm:text-[1.15rem] md:text-[1.25rem] w-[10rem] md:w-[15.4375rem] h-[2.5rem] sm:h-[3rem] md:h-[3.875rem] rounded-[8px] bg-secondary before:border-solid before:border-secondary before:border-[1px] before:content-[""] before:absolute before:z-[10] before:top-[4px] before:left-[4px] before:w-full before:h-full before:rounded-[8px] before:bg-none hover:bg-secondary-light hover:before:border-secondary-light active:text-background transition-all duration-250 ease-in-out ';

  return (
    <div id='home' className={`relative flex flex-col gap-[4rem] items-center pt-[8rem] sm:pt-[9rem] md:pt-[12rem] lg:pt-[15rem] w-full min-h-[50rem] ${padding_style}`}>
      <div className="relative z-[2] flex flex-col gap-[2rem] items-center xl:items-start w-full">
        <div className="flex flex-col w-full xl:max-w-[46rem] gap-[2rem]">
          <h1 className='text-[1.875rem] sm:text-[2.25rem] md:text-[3.375rem] xl:text-[3.5rem] font-bold uppercase'>We are moving around the world with the <span className='text-secondary'>OCTET</span> project at the forefront to detect malicious code.</h1>
          <p className='text-[.875rem] md:text-[1.25rem]'>Please contribute to the project by submitting malicious codes. And you can earn rewards.</p>
        </div>
        <div className="flex w-full xl:max-w-[46rem]">
          <a 
            href='https://t.me/octetproject' 
            target="_blank" 
            className={join_community}
          >
            Join Community
          </a>
          <a 
            href='https://drive.google.com/file/d/1oy1deS15Fd_Sp7D1_HaApYDG0YqYyi6E/view?usp=sharing' 
            rel="noopener noreferrer" 
            target="_blank" 
            className='relative flex items-center justify-center text-[.875rem] sm:text-[1.15rem] md:text-[1.25rem] px-[2.25rem] h-[2.5rem] sm:h-[3rem] md:h-[3.875rem] underline underline-offset-2 decoration-[2px] hover:decoration-secondary active:text-secondary transition-all duration-250 ease-in-out'
          >
            Whitepaper
            {/* BALL EFFECT */}
            <img src='./assets/svg/ball.svg' alt='BALL' className='absolute transform translate-y-[.2rem] right-0 h-[2rem] w-[2rem] object-contain' />
          </a>
        </div>
      </div>
      <img src="./assets/images/hero-image-1.png" alt="HERO" className='xl:absolute z-[1] right-[8%] h-auto xl:h-[30.25rem] w-[90%] xl:w-[30.25rem] max-w-[40rem] object-cover' />
      <div className='relative w-full h-max mt-[3.8125rem] rounded-[16px] bg-gradient-to-tr from-secondary via-secondary-light to-gradient p-[2px]'>
        <div className="flex flex-col justify-center items-center gap-[2rem] px-[15%] lg:px-[10%] w-full rounded-[16px] p-[1rem] bg-background">
          <h2 className='text-[2rem] font-semibold'>Our Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2.5rem]">
            <img src="./assets/images/partner-1.png" alt="Partner" className='h-[5rem] w-[14.2925rem] rounded-[16px] object-cover' />
            <img src="./assets/images/partner-2.png" alt="Partner" className='h-[5rem] w-[14.2925rem] rounded-[16px] object-cover' />
            <img src="./assets/images/partner-3.png" alt="Partner" className='h-[5rem] w-[14.2925rem] rounded-[16px] object-cover' />
            <img src="./assets/images/partner-4.png" alt="Partner" className='h-[5rem] w-[14.2925rem] rounded-[16px] object-cover' />
          </div>
        </div>
        {/* BALL EFFECT */}
        <img src='./assets/svg/ball.svg' alt='BALL' className='absolute z-10 bottom-[-1rem] right-[1rem] h-[2.5rem] w-[2.5rem] object-contain' />
      </div>

      {/* GRADIENT COLORS */}
      <div className='absolute top-0 left-0 flex h-full w-full'>
        <div className="flex overflow-hidden justify-between w-full h-full ">
          <div className="transform translate-y-[-45%] xl:translate-y-[-25%] translate-x-[-30%] h-auto w-[100vw] blur-3xl bg-gradient-radial from-[#2A2BB9] via-background to-background"></div>
          <div className="transform translate-y-[-45%] xl:translate-y-[-25%] translate-x-[30%] h-auto w-[100vw] bg-gradient-radial blur-3xl from-gradient/70 via-gradient/20 to-background"></div>
        </div>
      </div>

      {/* BALL EFFECTS */}
      <img src='./assets/svg/ball.svg' alt='BALL' className='absolute bottom-[70%] xl:bottom-[40%] right-[10%] xl:right-[40%] h-[4.25rem] md:h-[6.25rem] w-[4.25rem] md:w-[6.25rem] object-contain' />
      <img src='./assets/svg/ball.svg' alt='BALL' className='absolute bottom-[80%] xl:bottom-[51%] right-[20%] left-[1%] h-[2rem] md:h-[2.5rem] w-[2rem] md:w-[2.5rem] object-contain' />

      {/* STAR EFFECTS */}
      <img src='./assets/svg/star.svg' alt='STAR' className='absolute bottom-[10%] xl:bottom-[2%] left-[1%] xl:left-[1%] h-[1.5rem] w-[1.5rem] object-contain' />
      <img src='./assets/svg/star.svg' alt='STAR' className='absolute z-[2] bottom-[30%] xl:bottom-[40%] left-[75%] h-[1.5rem] w-[1.5rem] object-contain' />

    </div>
  )
}

export default Hero;