import React from 'react';

const HowToGet = () => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';

  const items = [
    {
      title: '1',
      text: 'When we receive malicious code-related data from users who inspect malicious codes, we automatically inspect whether the normal malicious code data is correct.'
    },
    {
      title: '2',
      text: 'When normal data is confirmed, Octet compensation tokens are provided to inspection users.'
    },
    {
      title: '3',
      text: 'Once the data is inspected and collected, organize the data We sell this data to companies that want to build security services. When selling, it is applied in a structure that allows payment with Octet tokens only.'
    },
    {
      title: '4',
      text: 'It is formed in an automatic circulation structure because companies can only collect malware-related data by purchasing Octet tokens from inspectors.'
    }
  ]

  return (
    <div id='howtoget' className={`relative pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] ${padding_style} `}>
      <div className="flex flex-col items-center gap-[4rem] md:gap-[6.25rem] w-full rounded-[32px] border-solid border-[1px] border-secondary-dim py-[4rem] px-[5%] md:px-[15%] ">
        <h2 className='relative z-[2] text-[1.5rem] sm:text-[2rem] md:text-[3rem] text-center font-bold'>Here is how to <span className='text-secondary-dim'>OCTET</span> circulates</h2>
        <div className="grid lg:grid-cols-2 lg:justify-evenly gap-y-[3rem] gap-[5%] w-full">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col justify-self-center gap-[1.5rem] max-w-[32.8125rem] ">
                <div className="flex items-center justify-center py-[.5rem] px-[1rem] rounded-[99rem] bg-white w-[3rem] h-[3rem] ">
                  <h2 className='text-[1.5rem] text-background sm:text-[1.875rem] xl:text-[2rem] '>{item.title}</h2>
                </div>
                <p className="text-[1.05rem] xl:text-[1.5rem] " dangerouslySetInnerHTML={{ __html: item.text}} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HowToGet;