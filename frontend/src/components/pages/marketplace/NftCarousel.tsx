import { NftCarouselProp} from '../../../../types/types';
import NftCard from './NftCard';


function NftCarousel({nft}:{nft:NftCarouselProp[]}) {
  return (
    <div>
      {nft.map(data=>(
        <h1 className='text-3xl px-3  font-nunito uppercase scrollbar-hide overflow-y-hidden'>{data.buzz}</h1>
      ))}
      <div className='flex space-x-4 overflow-scroll px-5 last:pb-20'>
        {nft.map(data=>(
          <div >
            <NftCard nft={data}/>
            
          </div>
        ))}
      </div>
      
      </div>
  )
}

export default NftCarousel