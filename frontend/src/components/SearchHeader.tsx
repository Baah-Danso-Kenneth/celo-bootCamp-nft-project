import Link from 'next/link'
import Image from 'next/image'
import SearchInput from './pages/marketplace/SearchInput'
import Category from './pages/marketplace/Category'

function SearchHeader() {
  return (
    <div className='flex items-center justify-between border-b border-black '>
      <Link href="/" className="flex justify-center border-b border-black md:border-b-0 lg:border-b-0">
        <Image
          src="/images/sticky.png"
          alt="obri"
          className=" mx-5 object-contain md:w-24 h-12"
          width={100}
          height={200}
        />
      </Link>

        <div className='flex font-nunito uppercase'>
           <Category/>
            <SearchInput/>
            <div className='py-5 px-3'>
              <h1>Connect Wallet</h1>
            </div>

        </div>

      </div>
  )
}

export default SearchHeader