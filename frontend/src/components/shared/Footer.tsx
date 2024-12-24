import React from 'react'
import {FaceIcon} from '@radix-ui/react-icons'

function Footer() {
  return (
     <div className='border-t mt-20 flex flex-col '>

         <div className='grid grid-cols-3 '>

             <div className='border-r'>

               <div className='flex flex-row ml-10'>
                 <div className='flex-1'>
                   <h1 className='md:font-play italic text-[15px] uppercase py-3'>sticky</h1>
                  </div>

                 <div className=' border-l '>
                 </div>
                  <FaceIcon className='text-3xl w-28 h-28 py-3'/>

               </div>
             </div>

             <div className='border-r'>
                <div>
                 <ul className='grid grid-cols-3 gap-y-10 py-3  h-auto px-3 '>
                    <li>hulio</li>
                    <li>hulio</li>
                    <li>hulio</li>
                     <li>hulio</li>
                    <li>hulio</li>
                    <li>hulio</li>
                   </ul>
                 </div>
             </div>

             <div className='py-3 '>
              <ul className='space-y-3 divide-y relative'>
               <li className=''>hulio</li>
                <li className=''>hulio</li>
                <li className=''>hulio</li>
              </ul>
          </div> 

         </div>

         <div className='flex justify-center border-t'>
           <h1 className='font-nunito'>&copy;2024 akata-developer</h1>
         </div>

     </div>
  )
}

export default Footer