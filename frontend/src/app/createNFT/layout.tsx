import SideBar from '@/components/sections/createNFT/SideBar'
import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-row h-100vh gap-10'>
        <div className='w-[20%]'><SideBar/></div>
        <div className='w-[80%] border'>{children}</div>
    </div>
  )
}

export default Layout