import Image from 'next/image'
import React from 'react'
import CircleWithText from './shared/circle_rotate'
import age from '../../public/images/base2_nft.png'

function Loader() {
  return (
    <div className='flex justify-between mx-10 mt-28 font-nunito'>
      <div className='w-[30%] text-[3rem] uppercase'>

        <div className='border mb-20 border-black font-bold'>
          <div className='border-b border-black'><h1 className='ml-3'>sticky</h1></div>
          <div className='border-b border-black'><h1 className='ml-3'>in</h1></div>
          <div className='border-b border-black'><h1 className='ml-3'>the</h1></div>
          <div><h1 className='ml-3'>world</h1></div>
        </div>

        <div className='flex border border-black'>
           <div className='border-r border-black w-[45%] text-nowrap'><h1 className='ml-3 font-allura'>Site is</h1></div>
           <div><h1 className='ml-3'>loading</h1></div>
        </div>

        <div className="absolute translate-x-80 top-10">
          <Image src="/images/sticky_sticker.png"  className="object-cover transform -rotate-45" width={250} height={100} alt="hulio"/>
        </div>   

      </div>

      <div>
        <CircleWithText text='sticky nft- sticky-nft sticky-nft sticky nft' image={age}/>
      </div>

      </div>
  )
}

export default Loader