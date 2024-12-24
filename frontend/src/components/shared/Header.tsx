import React from 'react'

function Header() {
  return (
    <div className='md:border-b h-auto '>
    <div className=' md:mx-10 md:flex flex-row justify-between items-center '>
        <div>
          <h1 className='md:font-play italic text-3xl'>sticky</h1>
        </div>

        <div className='md:flex items-center md:relative font-nunito text-2xl'>
        <div className='h-16 border-b border-r ' />
           <div className='px-5'><h1>about</h1></div>  
           <div className='h-16 border-b border-r' />
           <div><h1 className='px-5'>[road map]</h1></div>
           <div className='h-16 border-b border-r' />
           <div><h1 className='px-5'>[collection]</h1></div>
           <div className='h-16 border-b border-r' />
           <div><h1 className='pl-3'>[connect wallet]</h1></div>

        </div>
      </div>
      </div>
  )
}

export default Header
