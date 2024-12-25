import BannerPage from '@/components/sections/landingPage/bannerPage'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import TableParts from '@/components/ui/tableParts'
import React from 'react'


function Home() {
  return (

    <div className='w-full'>
      <Header/>
      <BannerPage/>
      <TableParts/>
      <Footer/>
    </div>
  )
}

export default Home
