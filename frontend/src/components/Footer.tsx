import {FaceIcon} from '@radix-ui/react-icons'
import  { sociaLinks,navLinks } from './../../data';
import Link from 'next/link';
import Image from 'next/image';



function Footer() {
  return (
         <div className='h-auto border-t border-black'>

          <div className='flex flex-col md:flex-row border-b border-black'>

            <div className='md:p-3 md:py-2 border-r border-black flex-[10%] '>
            <Link href="/" className='flex justify-center border-b border-black  md:border-b-0 lg:border-b-0'>
               <Image src="/images/sticky.png" alt="obri" className='object-contain md:transform md:translate-y-16  md:w-24 h-12' width={100} height={200}/>
           </Link>
            </div>

            <div className='py-2  md:border-r flex justify-center items-center border-black flex-[20%] border-b-0'>
              <FaceIcon className='border-b w-full border-black text-2xl md:text-3xl md:border-b-0  h-28 py-3'/>
            </div>

            <div className='py-2 border-r flex-[50%] border-black'>

            <div className='grid grid-cols-2 text-[12px] font-bold md:text-[18px]  md:grid-cols-2 lg:grid-cols-4  gap-10 ml-10 md:ml-1 pt-10 md:p-5 uppercase font-nunito mb-5'>
                {navLinks.map(nav=>(
                  <Link href={nav.href} key={nav.name}>
                    {nav.name}
                  </Link>
                ))}
             </div>

             <p className='text-center text-[7px] font-nunito md:text-[10px] lg:text-[12px] uppercase mb-3'>nft is a nonfugible token that grant the owner of arts.. etc..</p>
           </div>

             <div className='border-t border-black flex-[20%] font-nunito uppercase md:border-0'>
              {sociaLinks.map(social=>(
                <Link href={social.href} className='flex items-center border-b py-3 text-[10px] md:text-[18px] border-black hover:text-red-500 last:border-b-0'>
                  <h1 className='mr-2 ml-5 '>{social.name}</h1> 
                  {social.icon}
                </Link>
              ))}
          </div> 

          </div>

          

          <div className='uppercase font-nunito text-[13px]'>
            <p className='text-center'>&copy;2025 akatadeveloper</p>
          </div>

        </div>
  )
}

export default Footer