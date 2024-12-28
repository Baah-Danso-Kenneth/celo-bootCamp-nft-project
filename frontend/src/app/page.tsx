import BannerPage from '@/components/sections/landingPage/bannerPage'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import Faqs from '@/components/ui/faqs'
import RotationText from '@/components/ui/rotationText'
import TableParts from '@/components/ui/tableParts'
import React from 'react'
import AboutContent from '../components/sections/landingPage/aboutContent';
import BePartSection from '@/components/sections/landingPage/bePartSection'


function Home() {
  return (

    <div className='w-full'>
      <Header/>
      <BannerPage/>
      <TableParts/>
      <RotationText/>
      <Faqs/>
      <AboutContent/>
      <BePartSection/>
      <Footer/>
    </div>
  )
}

export default Home
