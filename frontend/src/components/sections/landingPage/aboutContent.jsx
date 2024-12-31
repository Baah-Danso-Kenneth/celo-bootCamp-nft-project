import React from 'react'
import About from '../../shared/about';
import Image from 'next/image';
import CircleWithText from '@/components/shared/circle_rotate';
import Dawg from '../../../../public/images/base_nft.png'

function AboutContent() {
  return (
    <div className=' mx-20 flex flex-row justify-between pt-32 pb-32'>

    <About text='about' subtext='Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Officiis, officia!
           Accusamus ad provident, eaque pariatur 
           alias ea quibusdam modi quod! consectetur
           adipisicing elit. Officiis, officia!
           Accusamus ad provident, eaque pariatur 
           alias ea quibusdam modi quod!'/>


    <div className="relative w-96 h-96 rounded-full border-2 border-gray-800 flex items-center justify-center overflow-hidden">
      {/* SVG for bent text */}
      <div className="absolute w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
        >
          <path
            id="circlePath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
          <text className="fill-gray-800 uppercase text-[10px] md:text-[10px] font-bold ">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              est 1957 &copy; Arts and design culture lifestyle
            </textPath>
          </text>
        </svg>
      </div>

      {/* Image in the center */}
      <Image
        src="/images/base_nft.png"
        alt=""
        className="z-10 scale-90"
        width={300}
        height={300}
      />
    </div>

    <About text='about' subtext='Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Officiis, officia!
           Accusamus ad provident, eaque pariatur 
           alias ea quibusdam modi quod! consectetur
           adipisicing elit. Officiis, officia!
           Accusamus ad provident, eaque pariatur 
           alias ea quibusdam modi quod!'/>

    </div>
  )
}

export default AboutContent