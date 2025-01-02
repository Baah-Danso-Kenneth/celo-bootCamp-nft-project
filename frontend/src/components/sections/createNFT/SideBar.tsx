"use client"
import React from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import navLinks from '../../shared/data/NavLinks';
import Link from 'next/link';


function SideBar() {
  const pathname = usePathname();
  return (
    <div className='border'>
        <div className='m-3'>
          <Link href="/" className=''><h1 className='mb-5 font-allura text-[2rem] uppercase'>Sticky</h1></Link>

            <div>
              {navLinks.map(({name, icon, href})=>{
                return(
                  <Link href={href}
                  key={name}
                  className={clsx(
                    'flex flex-row mb-3',
                    {
                      'px-3 bg-gray border-1-4 ':pathname === href
                    }
                  )}
                  >
                    {icon}
                    <h1 className='font-nunito font-semibold ml-3'>{name}</h1>
                  </Link>
                )
              })}
            </div>

        </div>
      </div>
  )
}

export default SideBar