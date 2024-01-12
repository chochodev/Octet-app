import React from 'react';

const Roadmap = (props) => {
  const padding_style = 'px-[1.25rem] sm:px-[2.5rem] md:px-[3.5rem] lg:px-[3.5rem] xl:px-[5rem] 2xl:px-[7.5rem]';

  const items = [
    {
      title: 'Open and Transparent Governance',
      text: 'Octet adopts an open and transparent governance model, allowing users to actively participate in decision-making processes. <br/>This democratic approach ensures that the community has a voice in shaping the future direction of the platform, fostering a sense of ownership and collaboration.'
    },
    {
      title: 'Token Economy and Reward Mechanisms',
      text: 'The OCT token, native to the Octet ecosystem, plays a central role in incentivizing user participation. Users are rewarded with OCT tokens for contributing to threat analysis,      sharing intelligence, and actively engaging with the platform. <br/>This token economy ensures a mutually beneficial relationship between users and the Octet ecosystem.'
    },
    {
      title: 'Global Expansion',
      text: 'Octet’s road map includes global expansion and strategic business partnerships. This commitment to reaching a global audience and collaborating with industry leaders cyber security positions Octet as a key player in the international landscape of decentralized cyber security solutions.'
    },
    {
      title: 'Incentivized User Participation',
      text: 'Octet’s innovative approach to user acquisition involves incentivizing active user participation. By recognizing the value of user data and rewarding contributions to the platform, Octet creates a collaborative environment where users actively contribute to the security ecosystem.'
    },
    {
      title: 'Continuous Innovation and Adaptability',
      text: 'Octet’s dedication to continuous development and innovation ensures that the platform remains at the forefront of technological advancements. Regular updates, enhancements, and the integration of cutting-edge technologies demonstrate Octet’s commitment to adapting to the evolving challenges of the cyber security landscape.'
    }
  ]

  return (
    <div className={`relative flex flex-col gap-[4rem] items-center pt-[3rem] sm:pt-[4rem] md:pt-[5rem] w-full min-h-[50rem] ${padding_style} `}>
      <h2 className='relative z-[2] text-[2rem] md:text-[3rem] font-bold'>{props.title}</h2>
      <div className="grid lg:grid-cols-2 justify-evenly gap-y-[2rem] gap-[5%] w-full">
        <div className="relative flex flex-col justify-self-center gap-[1.5rem] bg-white/10 max-w-[32.8125rem] p-[1.25rem] md:p-[2.5rem] rounded-[2rem] ">
          <h2 className='text-[1.5rem] sm:text-[1.875rem] xl:text-[2rem] font-bold '>Decentralized Security Backbone</h2>
          <p className="text-[1.05rem] xl:text-[1.5rem] ">The OCT chain serves as the decentralized backbone of the OCTET ecosystem, reducing reliance on centralized entities. This commitment to decentralization enhances security by minimizing the risk of single points of failure and fostering a distributed and resilient cyber security infrastructure.</p>
          <img src="./assets/images/ring-2.png" alt="RING" className='absolute top-[-1.25rem] left-[-1.25rem] h-[4rem] w-[4rem] object-contain opacity-[50%] ' />
          <img src="./assets/images/ring.png" alt="RING" className='absolute top-[-1.25rem] left-[-1.25rem] h-[4rem] w-[4rem] object-contain opacity-[50%] ' />
        </div>

        {items.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-self-center gap-[1.5rem] bg-white/10 max-w-[32.8125rem] p-[2.5rem] rounded-[2rem] ">
              <h2 className='text-[1.5rem] sm:text-[1.875rem] xl:text-[2rem] font-bold '>{item.title}</h2>
              <p className="text-[1.05rem] xl:text-[1.5rem] " dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Roadmap.defaultProps = {
  title: 'Roadmap',
  style: ''
};

export default Roadmap;