import React from 'react'
import FrequentQuestionCard from '../frequentQuestionCard'
import { ArrowBottomLeftIcon, ArrowBottomRightIcon } from '@radix-ui/react-icons'
import { Anybody } from 'next/font/google'
import Anyquestion from '../anyquestion'
function  Faqs() {

  return (
    <div>
      <div className='text-[6rem] flex justify-center'>
       <h1 className='font-nunito uppercase font-extrabold'><span className='font-allura font-light mr-5'>(</span>faqs <span className='font-allura'>)</span></h1>
      </div>

      <div className='grid grid-cols-5 mx-10 relative '>
        <FrequentQuestionCard
         text='what are nfts and how do they work? ' 
         icon={<ArrowBottomRightIcon className='w-10 h-16 font-light'/>}/>

      <FrequentQuestionCard
         text='how can we ensure the authencity of an nfts' 
         icon={<ArrowBottomRightIcon className='w-10 h-16 font-light'/>}/>

<FrequentQuestionCard
         text='what is a minting place' 
         icon={<ArrowBottomRightIcon className='w-10 h-16 font-light'/>}/>

   <Anyquestion/>
<FrequentQuestionCard
         text='how can i purchase on of the nft?' 
         icon={<ArrowBottomRightIcon className='w-10 h-16 font-light'/>}/>


      </div>

    </div>
  )
}

export default  Faqs