import React from 'react'
import About from '../../shared/about';
import Image from 'next/image';

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


<div 
  id="circle-text" 
  className="rounded-full border-4 border-black w-[350px] h-[350px] flex items-center justify-center overflow-hidden"
>
  <Image 
    id="circle-image"
    width={600} 
    height={600} 
    className="object-contain scale-[2]" 
    src="/images/base2_nft.png" 
    alt="" 
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