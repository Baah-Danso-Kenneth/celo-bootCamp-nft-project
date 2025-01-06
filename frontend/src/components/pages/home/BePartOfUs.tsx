import Image from "next/image"

function BePartOfUs() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 md:text-[6rem] mr-20 md:py-10'>

        <div className='w-[350px] mb-10 md:w-full border-t md:h-[70%] uppercase  border-black'>
            <div className='flex  font-nunito border-b border-black'>
              <div className='ml-10 w-full text-center  border-r border-black'>
                <h1>Be part</h1>
              </div>
            </div>

            <div className='flex font-allura'>
              <div className='w-[30%] ml-10 border-r border-black'><h1>of</h1></div>
              <div className='ml-10 w-full border-r border-black'><h1>the</h1></div>
            </div>
            <div className=' border-t border-b border-r text-center border-black'>journey</div>
        </div>
      
       <div className='relative md:translate-x-60'>

       <div className="relative translate-x-[-1rem] w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
         <Image  
          src="/images/ftsss.jpeg" 
          alt="img" 
         fill 
        className=" object-cover "
        />
      </div>

     
       <div className='absolute top-[-1rem] md:top-[-30] flex mb-20 '>
         <div className='translate-x-16 md:translate-x-4'>
         <Image src="/images/save-instagram.png" alt="img" width={50} height={50} />
         </div>

         <div className='translate-x-52 md:translate-x-96'>
         <Image src="/images/save-instagram.png" alt="img" width={50} height={50} />
         </div>
       </div>
       </div>

      </div>
  )
}

export default BePartOfUs