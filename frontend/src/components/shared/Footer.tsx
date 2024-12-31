import React from 'react'
import {FaceIcon} from '@radix-ui/react-icons'

function Footer() {
  return (
     <div className='border-t border-black mt-20 flex flex-col '>

         <div className='grid grid-cols-3 '>

             <div className='border-r border-black'>

               <div className='flex flex-row ml-10'>
                 <div className='flex-1'>
                   <h1 className='md:font-play italic text-[15px] uppercase py-3'>sticky</h1>
                  </div>

                 <div className=' border-l border-black'>
                 </div>
                  <FaceIcon className='text-3xl w-28 h-28 py-3'/>

               </div>
             </div>

             <div className='border-r border-black'>
                <div>
                 <ul className='grid grid-cols-3 gap-y-10 py-3  h-auto px-3 font-nunito uppercase'>
                    <li>Home</li>
                    <li>about</li>
                    <li>roadmap</li>
                     <li>team</li>
                    <li>faqs</li>
                    <li>collection</li>
                   </ul>
                 </div>
             </div>

             <div>
              <ul className='space-y-2 divide-y divide-black relative uppercase'>
                <div className='pl-3 pt-2'>
                 <li className=''>discord</li>
                </div>

                <div className='pl-3 pt-2'>
                  <li className=''>instagram</li>
                </div>

                <div className='pl-3 pt-2'>
                <li className=''>twitter</li>
                </div>
              </ul>
          </div> 

         </div>

         <div className='flex justify-center border-t border-black'>
           <h1 className='font-nunito'>&copy;2024 akata-developer</h1>
         </div>

     </div>
  )
}

export default Footer