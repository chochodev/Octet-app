import React from 'react';

const OctetApp = () => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';

  return (
    <div className={`relative flex flex-col lg:flex-row gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] ${padding_style} `}>
      <div className="flex flex-col gap-[4rem] w-full max-w-[36.875rem]">
        <div>
          <h2 className='text-[3.375rem] font-bold text-secondary'>OCTET APP</h2>
          <p className="text-[3.375rem] ">Join the upcoming octet App to enjoy future amazing offers.</p>
          <p className="text-[1.25rem]">Octet tokens can be sent, swapped, and stored freely in the app. Don't miss the golden event where you can use Octet tokens. It's going to be released soon.</p>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col text-center">
            <h2 className='text-[2rem]'>87%</h2>
            <p className="text-[1.5rem]">current status until release</p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className='text-[2rem]'>25k</h2>
            <p className="text-[1.5rem]">our App pre-bookers</p>
          </div>
        </div>
      </div>
      <img src="./assets/images/phone.png" alt="PHONE" className='w-[50%] object-contain' />
    </div>
  )
}

export default OctetApp;