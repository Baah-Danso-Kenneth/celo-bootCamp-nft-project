import React from 'react'
import { trendingNft, poppingNft, popularNft} from '../../../../data'
import NftCarousel from './NftCarousel'

function NftCarouselHolder() {
  const trending = trendingNft
  const popping = poppingNft
  const popular = popularNft

  return (
    <div className='space-y-5'>
      <NftCarousel nft={trending}/>
      <NftCarousel nft={popping}/>
      <NftCarousel nft={popular}/>
    </div>
  )
}

export default NftCarouselHolder