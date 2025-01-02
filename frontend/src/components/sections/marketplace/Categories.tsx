"use client"
import Link from 'next/link'
import React from 'react'
import categoriesNft from '../../shared/data/nftCategories';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Categories() {
  const pathname=usePathname();
  return (
    <div className='flex flex-row space-x-8 uppercase font-nunito'>
        {categoriesNft.map(({id, name, href})=>{
          return(
            <Link href={href} key={id} className={clsx('bg-gray-50 px-3 py-1 rounded-md',{'hover:bg-gray-100':pathname === href})}>
              <h1>{name}</h1>
            </Link>
          )
        })}
      </div>
  )
}

export default Categories