import React from 'react'
import FrequentQuestionCard from '../frequentQuestionCard'
import { ArrowBottomLeftIcon, ArrowBottomRightIcon } from '@radix-ui/react-icons'
import { Anybody } from 'next/font/google'
import Anyquestion from '../anyquestion'
function  Faqs() {

  return (
    <div>
      <div className='text-[6rem] flex justify-center '>
       <h1 className='font-nunito uppercase font-extrabold'><span className='font-allura font-light mr-5'>(</span>faqs <span className='font-allura'>)</span></h1>
      </div>

      <div className='relative '>
         <Anyquestion/>
      </div>

    </div>
  )
}

export default  Faqs