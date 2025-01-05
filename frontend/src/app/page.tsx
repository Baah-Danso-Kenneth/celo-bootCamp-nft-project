import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>Home
      <Link href="/">
       <Image src="/images/sticky.png" alt="obri" width={100} height={200}/>
      </Link>
    </div>
  )
}

export default Home