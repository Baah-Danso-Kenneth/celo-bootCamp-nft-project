import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Book, Brush, BugPlay, Clock, Eye, Heart, Menu, Send, ShoppingCart } from 'lucide-react'
import { Love_Ya_Like_A_Sister } from 'next/font/google'
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
          <div className='w-[60%]'>
            <div className='text-start font-nunito text-[15px] text-nowrap'>
              <h1>Lady in the glass dress</h1>
            </div>

            <div className='text-start font-nunito text-[2rem] font-extrabold text-nowrap'>
              <h1>Lady in the glass dress #0001</h1>
            </div>

            <div className='text-start font-nunito text-[15px] text-nowrap'>
              <p className='text-[1.8rem]'>Owned by <span className='text-[16px] '>sticky.eth</span></p>
            </div>

            <div className="flex space-x-5 items-center mb-7" >
              <div className='flex space-x-3'>
                <Eye/>
                <h1>1.2k view</h1>
              </div>
              <div className='flex space-x-3'>
                <Heart/>
                <h1>Likes</h1>
              </div>
              <div className='flex space-x-3'>
                <Brush/>
                <h1>view</h1>
              </div>
            </div>

            <div className='w-full rounded-2xl h-[30vh] border border-[#202020]'>

              <div className='flex space-x-5 py-3 border-b border-[#202020] font-nunito'>
                <Clock className='ml-3'/>
                <p>Sales ends june 21, 2025 at 1:06pm</p>
              </div>

              <div className='ml-3 mt-2 font-nunito font-bold'>
                <h1>Current price</h1>

                <div className='flex space-x-3 items-center'>
                  <div>
                    <h1 className='text-[2rem]'>1ETH</h1>
                  </div>
                  <div>
                  <p>$362.00</p>
                  </div>
                </div>
              </div>


              <div className='flex gap-10'>

                <div className='w-[50%] h-auto bg-blue-700 rounded-md flex ml-5'>
                  <div className='w-[80%] mx-3 border-r py-3'>
                    <h1 className='text-center font-nunito text-white uppercase text-2xl'>Buy Nft</h1>
                  </div>

                  <div className='py-3'>
                    <ShoppingCart className='text-white'/>
                  </div>
                </div>

                
                <div className='w-[50%] h-auto bg-[#202020] rounded-md flex mr-5'>
                  <div className='w-[80%]  py-3 '>
                    <h1 className='text-center font-nunito text-white uppercase text-2xl'>make offer</h1>
                  </div>

                  <div className='py-3'>
                  <Send className='text-white translate-x-[-3rem]'/>
                  </div>

                </div>

              </div>


            </div>

            <div className='w-full rounded-2xl h-auto border mt-7 border-[#202020]'>

             <div className='flex  space-x-3 border-b border-[#202020] py-2 font-nunito'>
              <Menu className='ml-3'/>
              <h1>Description</h1>
             </div>

             <div className='mt-2 font-nunito border-b border-[#202020] '>
               <h1 className='ml-3 text-[20px]'>By <span className='font-bold'>lilyillo</span></h1>
               <p className='mx-3 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, tempora? Animi aspernatur excepturi modi in vitae quos? Ut recusandae debitis blanditiis natus vitae aperiam tenetur accusamus sapiente! Consequatur, quas eos?</p>
             </div>

             <div className='flex  space-x-3 border-b border-[#202020] py-2 font-nunito'>
              <Book className='ml-3'/>
              <h1>Details</h1>
             </div>

             <div className='flex justify-between mx-3 font-nunito text-[18px] mt-3  mb-3'>
              <div className='space-y-3'>
                <h1>Contract Address</h1>
                <h1>Token ID</h1>
                <h1>Token Standard</h1>
                <h1>Metadata</h1>
                <h1>Creator Earnings</h1>
              </div>

              <div className='space-y-3  flex flex-col justify-end'>
              <h1>0x498a........</h1>
              <h1>277784888823333333</h1>
              <h1>ERC-7200</h1>
              <h1>Frozen</h1>
              <h1>10%</h1>
              </div>

             </div>


            </div>

          </div>

        </div>
      <Footer/>
      </div>
  )
}

export default page