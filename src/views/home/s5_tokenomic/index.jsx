import React from 'react';

const Tokenomic = () => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';

  const items = [
    {
      name: 'Rewards',
      text: '31% [665,719,930]'
    },
    {
      name: 'Lockedup',
      text: '29%[622,770,257]'
    },
    {
      name: 'Marketing',
      text: '11% [236,223,201]'
    },
    {
      name: 'Initial distribution',
      text: '10% [214,748,364]'
    },
    {
      name: 'liquidity',
      text: '9% [193,273,528]'
    },
    {
      name: 'Team',
      text: '5% [107,374,182]'
    },
    {
      name: 'Event',
      text: '5% [107,374,182]'
    },
  ]

  return (
    <div className={`relative flex flex-col gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] ${padding_style} `}>
      <h2 className='relative z-[2] text-[2rem] md:text-[3rem] font-bold'>Tokenomics</h2>
      <div className="flex w-full flex-col xl:flex-row items-center">
        <img src="./assets/images/chart.png" alt="TOKENOMIC CHART" className='min-w-[50%] object-contain' />
        <div className="flex flex-col items-center gap-[1.5rem] max-w-[55rem] w-full xl:w-[50%]">
          <div className='flex flex-col gap-[0.75rem] w-full max-w-[36.75rem] rounded-[16px] p-[1rem] border-solid border-[2px] border-secondary'>
            <div className='grid grid-cols-2 items-center'>
              <h2 className='text-[1rem] sm:text-[1.5rem] xl:text-[2rem]'>Token Name:</h2>
              <p className='text-[.875rem] sm:text-[1rem] xl:text-[1.5rem]'>Octet</p>
            </div>
            <div className='grid grid-cols-2 items-center'>
              <h2 className='text-[1rem] sm:text-[1.5rem] xl:text-[2rem]'>Token Symbol:</h2>
              <p className='text-[.875rem] sm:text-[1rem] xl:text-[1.5rem]'>OCT</p>
            </div>
          </div>
          <div className='flex flex-col gap-[0.75rem] w-full max-w-[36.75rem] rounded-[16px] p-[1rem] border-solid border-[2px] border-secondary'>
            <div className='grid grid-cols-2 items-center'>
              <h2 className='text-[1rem] sm:text-[1.5rem] xl:text-[2rem]'>Chain:</h2>
              <p className='text-[.875rem] sm:text-[1rem] xl:text-[1.5rem]'>Ethereum request for comment 20.</p>
            </div>
            <div className='grid grid-cols-2 items-center'>
              <h2 className='text-[1rem] sm:text-[1.5rem] xl:text-[2rem]'>Coin issued:</h2>
              <p className='text-[.875rem] sm:text-[1rem] xl:text-[1.5rem]'>2,147,483,647</p>
            </div>
          </div>

          
          <div className='flex flex-col gap-[0.75rem] w-full max-w-[36.75rem] rounded-[16px] p-[1rem] border-solid border-[2px] border-secondary'>
            {items.map((item, index) => (
            <div className='grid grid-cols-2 items-center'>
              <h2 className='text-[1rem] sm:text-[1.5rem] xl:text-[2rem]'>{item.name}:</h2>
              <p className='text-[.875rem] sm:text-[1rem] xl:text-[1.5rem]'>{item.text}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomic;