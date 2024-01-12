import React from 'react';

const HowToGet = (props) => {
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
    <div className={`relative flex flex-col gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] ${padding_style} `}>
      <div className="flex">
        <h2 className='relative z-[2] text-[2rem] md:text-[3rem] font-bold'>{props.title}</h2>
        <div className="grid lg:grid-cols-2 justify-evenly gap-y-[2rem] gap-[5%] w-full">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col justify-self-center gap-[1.5rem] max-w-[32.8125rem] p-[2.5rem] ">
                <h2 className='text-[1.5rem] text-background sm:text-[1.875rem] xl:text-[2rem] font-bold rounded-[99rem] bg-white '>{item.title}</h2>
                <p className="text-[1.05rem] xl:text-[1.5rem] " >{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

HowToGet.defaultProps = {
  title: 'HowToGet',
  style: ''
};

export default HowToGet;