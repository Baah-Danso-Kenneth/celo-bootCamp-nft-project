import Footer from '@/components/Footer'
import Header from '@/components/Header'
import  Image  from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
        <div className='mx-10 py-10 flex gap-10'>

          <div className='w-[40%]'>
            <div className="h-14 rounded-tl-2xl rounded-tr-2xl bg-[#202020] w-full" />
            <Image
              src="/images/tr-a7.jpg"
              alt="check"
              width={1080}
              height={250}
              className='w-full h-[80vh] object-cover rounded-bl-2xl rounded-br-2xl'
            />
          </div>
          <div className='w-[60%] border'>
            <div className='text-start font-nunito text-[15px] text-nowrap'>
              <h1>Lady in the glass dress</h1>
            </div>

            <div className='text-start font-nunito text-[2rem] font-extrabold text-nowrap'>
              <h1>Lady in the glass dress #0001</h1>
            </div>

            <div className='text-start font-nunito text-[15px] text-nowrap'>
              <p className='text-[1.8rem]'>Owned by <span className='text-[16px] '>sticky.eth</span></p>
            </div>

            <div>
              
            </div>

          </div>

        </div>
      <Footer/>
      </div>
  )
}

export default page