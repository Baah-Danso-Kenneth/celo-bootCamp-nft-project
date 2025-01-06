import { Dot, Pen, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props= {
  params: {
    nft: string
  },
  searchParams: {
    nftDetails: string
  }
}

function page({params:{nft}, searchParams:{nftDetails}}:Props) {


  return (
    <div>
        <div className='w-full h-[50vh] relative border-b-4  border-black shadow-lg'>
          <Image
           src="/images/tr-a3.jpg"
           alt="clean"
           width={1030}
           height={930}
           className='w-full h-[60vh] object-cover object-top blur-sm'
          />

          <div className='absolute top-[10rem] flex gap-5 left-10'>
            <div>
              <Image src="/images/tr-a3.jpg"
              alt="pronto"
              width={1030}
              height={500}
              className='w-40 h-40 rounded-2xl border border-black object-cover'
              />
            </div>

            <div className='space-y-5'>
              <div className='flex gap-5 '>
                <div className='flex px-3 rounded-md uppercase bg-white py-1 w-20'>
                  <Pen className='mr-2'/>
                  <h1>Art</h1>
                </div>

                <div className='flex bg-green-100 px-2  rounded-xl items-center'>
                  <Dot className='text-green-400 space-x-4  font-extrabold'/>
                  <h1 className='text-green-400 font-nunito text-[12px] uppercase font-bold py-1'>public minting</h1>
                </div>
              </div>

              <div><h1 className='text-3xl font-nunito font-bold text-white'>Protection</h1></div>

              <div className='flex items-center gap-3'>
                <User/>
                <h1 className='font-bold font-nunito'>Kuntu blankson</h1>
              </div>

            </div>
          </div>

            <div className='mx-20 mt-10'>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat 
                accusamus adipisci repudiandae inventore quasi sunt laudantium amet
                 rem. Illum eius dolorum debitis cum doloribus nihil nobis fuga 
                 repellendus vero quisquam!</p>
              </div>

              <div className='w-full h-auto border rounded -2xl'>

              </div>
        </div>
    </div>
  )
}

export default page