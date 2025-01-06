import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <div className="md:flex h-auto justify-between border-b border-black">
      {/* Logo */}
      <Link href="/" className="flex justify-center border-b border-black md:border-b-0 lg:border-b-0">
        <Image
          src="/images/sticky.png"
          alt="obri"
          className="py-3 mx-5 object-contain md:w-24 h-12"
          width={100}
          height={200}
        />
      </Link>

      {/* Navigation Links */}
      <div className="text-[10px] md:text-[18px] flex justify-between md:whitespace-nowrap uppercase font-nunito">
        <Link href="/market" className="py-3 hover:bg-black hover:text-white px-3 border-black border-l border-r">
          [market]
        </Link>
        <Link href="/collections" className="hidden md:py-3 md:px-3 md:hover:bg-black md:block hover:text-white border-black border-r">
          [collections]
        </Link>
        <Link href="/about" className="py-3 px-10 md:px-3 hover:bg-black hover:text-white border-r border-black">
          [about]
        </Link>
        <Link href="/connect-wallet" className="py-3 px-3 hover:bg-black hover:text-white border-black border-r">
          [connect wallet]
        </Link>
      </div>
    </div>
  );
}

export default Header;
