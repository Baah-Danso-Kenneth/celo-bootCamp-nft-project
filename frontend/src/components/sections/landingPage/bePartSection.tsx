import Image from 'next/image'
import React from 'react'

function BePartSection() {
  return (
    <div className='flex flex-row gap-10'>
        
        <div className=' text-[6rem] font-nunito  border border-black uppercase w-[30%]'>
          <div className='p-5 border-b border-black'><h1>be part</h1></div>
          <div className='flex flex-row font-alluram justify-between border-b border-black font-allura  '>
              <div className='border-r border-black w-[50%]'><h1>of</h1></div>
              <div className='mr-36'><h1>the</h1></div>
          </div>
          <div><h1>journey</h1></div>
        </div>

        <div className='translate-x-[20rem]'>
          <Image alt="" src="/images/space_nft.jpeg" width={600} height={800} className='object-contain '/>
          <div className='border mt-2 h-auto flex '>
              <div className=''>
                <h1>Phase 1</h1>
              </div>
              <div className=''>
                <p>Lorem, ipsum dolor.</p>
              </div>

              <div className='w-[30%]'>
                  <p className=''>Lorr adipiis</p>
              </div>
          </div>

          <div className='border mt-2 h-auto'>
            gee
          </div>
        </div>

      </div>
  )
}

export default BePartSection