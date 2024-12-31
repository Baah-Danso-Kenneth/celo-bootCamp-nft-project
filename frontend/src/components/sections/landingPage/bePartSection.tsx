import Anyquestion from '@/components/ui/anyquestion'
import Image from 'next/image'
import React from 'react'

function BePartSection() {
  return (
    <div className='grid grid-cols-2 text-[6rem]'>
        <div className='w-full border-t h-[70%] uppercase  border-black'>
            <div className='flex  font-nunito border-b border-black'>
              <div className='ml-10 w-full text-center  border-r border-black'>
                <h1>Be part</h1>
              </div>
            </div>

            <div className='flex font-allura'>
              <div className='w-[30%] ml-10 border-r border-black'><h1>of</h1></div>
              <div className='ml-10 w-full border-r border-black'><h1>the</h1></div>
            </div>
            <div className='border-t border-b border-r text-center border-black'>journey</div>
        </div>
      
       <div className='relative translate-x-60'>
          <div>
            <Image src="/images/ftsss.jpeg" alt="img" width={300} height={10} className='object-contain w-[55%] h-[30%]'/>
          </div>
     

       <div className='absolute md:top-[-30] flex '>
         <div className='md:translate-x-4'>
         <Image src="/images/save-instagram.png" alt="img" width={50} height={50} />
         </div>
         <div className='md:translate-x-72'>
         <Image src="/images/save-instagram.png" alt="img" width={50} height={50} />
         </div>
       </div>
       </div>

      </div>
  )
}

export default BePartSection