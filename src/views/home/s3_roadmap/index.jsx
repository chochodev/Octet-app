import React from 'react'

const Roadmap = (props) => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';
  return (
    <div className='relative flex flex-col gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] '>
      <h2 className='relative z-[2] text-[2rem] md:text-[3rem] font-bold'>{props.title}</h2>
      <div className="flex"></div>
    </div>
  )
}

Roadmap.defaultProps = {
  title: 'Roadmap',
  style: ''
};

export default Roadmap