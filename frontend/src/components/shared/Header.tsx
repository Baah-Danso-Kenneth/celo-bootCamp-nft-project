import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='md:border-b h-auto border-black'>
    <div className=' md:mx-10 md:flex flex-row justify-between items-center '>
        <Link href="/" className='cursor-pointer'>
          <h1 className='md:font-play italic  text-[16px] font-bold uppercase'>sticky</h1>
        </Link>

          <div className='flex uppercase font-nunito'>
            <Link href="/about" className='py-3 hover:bg-black px-3 border-black border-l border-r'>[market]</Link>
            <div className='py-3 px-3  border-black border-r'>[collections]</div>
            <div className='py-3  px-3 border-r border-black'>[about]</div>
            <div className='py-3  px-3  border-black border-r'>[connect wallet]</div>
          </div>

      </div>
      </div>
  )
}

export default Header
