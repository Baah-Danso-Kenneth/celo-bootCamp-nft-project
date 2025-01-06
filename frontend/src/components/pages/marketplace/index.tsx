import SearchHeader from '@/components/SearchHeader'
import React from 'react'
import CarouselWrapper from './CarouselWrapper'
import NftCard from './NftCard'
import NftCarouselHolder from './NftCarouselHolder'
import Footer from '@/components/Footer'

function Marketplace() {
  return (
    <div>
      <SearchHeader/>
      <CarouselWrapper/>
      <NftCarouselHolder/>
    <Footer/>
    </div>
    )
}

export default Marketplace