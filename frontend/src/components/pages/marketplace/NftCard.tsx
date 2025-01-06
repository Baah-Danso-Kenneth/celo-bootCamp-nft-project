import { NftCarouselProp } from '../../../../types/types'
import Image from 'next/image'


function NftCard({nft}:{nft:NftCarouselProp}) {
  return (
    <>
    <div className='w-80'>
         <Image
          alt={nft.title}
          src={nft.image}
          width={1920}
          height={1080}
          className='h-80 w-80 object-cover object-top '
          />

          <div className='border border-black grid grid-cols-3 font-nunito uppercase w-80 '>
            <div className='border-r border-black font-extrabold text-center p-2'>{nft.price}</div>
            <div className='border-r border-black font-allura p-2 truncate '>{nft.title}</div>
            <div className='ml-3 p-2'>{nft.name}</div>
          </div>
      </div>
    </>
  )
}

export default NftCard