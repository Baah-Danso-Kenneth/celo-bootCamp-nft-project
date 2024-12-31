import React from 'react'

function FrequentQuestionCard({text,more_text, icon}:{text:string, more_text?:string, icon?:React.ReactNode}) {
  return (
    <div className='h-64 bg-beige w-52 font-nunito text-[18px]'>
      <div className=''>
      <p className='p-2 text-wrap uppercase text-start'>{text}</p>
      <div className=' translate-x-32 translate-y-20 font-light'>
        {icon}
        </div>
      </div>
      </div>
  )
}

export default FrequentQuestionCard