import React from 'react';

const OctetApp = () => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';

  return (
    <div id='oct-app' className={`relative flex flex-col lg:flex-row gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] ${padding_style} `}>
      <div className="relative z-[2] flex flex-col gap-[4rem] w-full max-w-[36.875rem]">
        <div>
          <h2 className='text-[2.25rem] md:text-[2.875rem] lg:text-[3.375rem] font-bold text-secondary'>OCTET APP</h2>
          <p className="text-[2.25rem] md:text-[2.875rem] lg:text-[3.375rem] ">Join the upcoming octet App to enjoy future amazing offers.</p>
          <p className="text-[.875rem] sm:text-[1.25rem] mt-[1.5rem]">Octet tokens can be sent, swapped, and stored freely in the app. Don't miss the golden event where you can use Octet tokens. It's going to be released soon.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-[2rem] justify-evenly w-full">
          <a href="#" target="_blank" className="flex flex-col text-center">
            <img
          </a>
        </div>
      </div>
      {/* SECTION IMAGE */}
      <img src="./assets/images/phone_1.png" alt="PHONE" className='relative z-[2] w-[80%] md:w-[50%] object-contain' />
      
      {/* GRADIENT COLORS */}
      <div className='absolute top-0 left-0 flex h-full w-full'>
        <div className="flex justify-between w-full h-full ">
          <div className="transform translate-y-[35%] translate-x-[-35%] h-auto w-[100vw] blur-3xl bg-gradient-radial from-[#2A2BB9] via-background to-background"></div>
        </div>
      </div>
      <div className='absolute top-0 left-0 flex h-full w-full'>
        <div className="flex justify-between w-full h-full ">
          <div className="transform translate-y-[25%] xl:translate-y-[15%] translate-x-[25%] h-[60%] xl:h-[80%] w-[100vw] bg-gradient-radial blur-3xl from-gradient/70 via-gradient/20 to-background"></div>
        </div>
      </div>

      {/* STAR EFFECT */}
      <img src='./assets/svg/star.svg' alt='STAR' className='absolute z-[3] bottom-[30%] lg:bottom-[10%] right-[15%] h-[1.5rem] w-[1.5rem] object-contain' />
    </div>
  )
}

export default OctetApp;