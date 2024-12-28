import React from 'react'

function TableParts() {
  return (
    <div className='flex flex-col w-full border-t border-b border-black text-[6rem]'>
       <div className='grid grid-cols-3 border-b border-black'>
         <div className='font-nunito uppercase font-bold pl-10'>
           <h1>faces</h1>
          </div> 

          <div className='border-l border-black pl-5'>
           <h1 className='font-allura uppercase'>that</h1>
          </div> 

          <div className='border-l  border-black '>
           <h1 className='font-bold font-nunito uppercase pl-10'>paint</h1>
          </div> 
       </div>

       <div className='flex flex-row '>
         <div className='flex-shrink-0 w-50 border-r border-black'>
          <h1 className=' text-center md:uppercase font-allura px-10 '>a</h1>
         </div>

         <div className='border-r border-black flex-grow'>
          <h1 className='pl-10 font-nunito uppercase font-bold'>thousand</h1>
         </div>

         <div className='flex-grow'>
          <h1 className='font-allura  uppercase pl-10' >words!</h1>
         </div>
       </div>
    </div>
  )
}

export default TableParts