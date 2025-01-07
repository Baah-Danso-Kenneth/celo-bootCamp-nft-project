"use client"

import Footer from '@/components/Footer'
import NftCard from '@/components/pages/marketplace/NftCard'
import { ArrowUpToLine, Dot, Ellipsis, Pen, Settings, User, Wallet } from 'lucide-react'
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
        <div className='w-full h-[50vh] relative   border-black shadow-lg'>
          <Image
           src="/patterns/carbon-fibre-big.png"
           alt="clean"
           width={1030}
           height={930}
           className='w-full h-[50vh] object-cover object-top'
          />
          
           <div className='absolute top-[5rem] flex gap-[55rem] left-10'>

              <div className='flex gap-5'>
                
                <div>
                <Image src="/images/tr-a3.jpg"
                 alt="pronto"
                width={1030}
                height={500}
                className='w-40 h-40 rounded-2xl border border-black object-cover'
              />
            </div>


                <div className='space-y-8'>
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

              <div className='flex items-center gap-5 text-white'>
           
                <div className='flex space-x-2'>
                  <User/>
                  <h1 className='font-bold font-nunito text-nowrap'>Kuntu blankson</h1>
                </div>
                
                <div className='flex space-x-2'>
                  <Wallet/>
                  <h1>0xfff08000.......</h1>
                </div>

                </div>

            </div> 

              </div>

              <div className='flex space-x-3 text-white '>
                <ArrowUpToLine className=''/>
                <Ellipsis/>
              </div>

            </div>

          </div>





    <div className='flex justify-between font-nunito items-center mx-10 py-5  text-[4rem]'>

        <div className='flex  space-x-5   uppercase text-center'>
             <h1>your</h1>
             <h1 className='font-allura'>total</h1>
             <h1>collection</h1>
          </div>


          <div className='flex space-x-3 font-nunito'>
            <h1 >Rank #2183</h1> {" "}
            <h1 className='font-allura'>N0:3</h1>
          </div>

        </div>
        <div className='w-full h-3 bg-red-50 mb-5'/>
          
        <div className='flex justify-between mx-20 flex-wrap pb-10 '>
          <NftCard nft={{
          name: 'sdaeeeee',
          title: 'ddddddd',
          image: '/images/cr-1.jpeg',
          description: '',
          price: '1ETH',
          date_created: undefined,
          category: undefined,
          buzz: undefined,
          sold: undefined,
          isVertical: undefined,
          promo: undefined
        }}/>


      <NftCard nft={{
          name: 'sdaeeeee',
          title: 'ddddddd',
          image: '/images/cr-7.jpeg',
          description: '',
          price: '1ETH',
          date_created: undefined,
          category: undefined,
          buzz: undefined,
          sold: undefined,
          isVertical: undefined,
          promo: undefined
        }}/>



      <NftCard nft={{
          name: 'sdaeeeee',
          title: 'ddddddd',
          image: '/images/cr-10.jpeg',
          description: '',
          price: '1ETH',
          date_created: undefined,
          category: undefined,
          buzz: undefined,
          sold: undefined,
          isVertical: undefined,
          promo: undefined
        }}/>


    <NftCard nft={{
          name: 'sdaeeeee',
          title: 'ddddddd',
          image: '/images/cr-10.jpeg',
          description: '',
          price: '1ETH',
          date_created: undefined,
          category: undefined,
          buzz: undefined,
          sold: undefined,
          isVertical: undefined,
          promo: undefined
        }}/>

        </div>

     <Footer/>
    </div>
  )
}

export default page

function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.')
}
