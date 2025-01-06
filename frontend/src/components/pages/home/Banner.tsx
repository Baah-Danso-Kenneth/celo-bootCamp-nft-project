import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="mx-10 relative">
        <div className="md:mt-[-7rem]">
          <h1 className=" font-nunito text-[5rem] text-center md:text-[13rem] md:mt-16 lg:text-[18rem] w-full  uppercase  font-extrabold">
            sticky
          </h1>
        </div>

        <div className="absolute top-0 right-10 md:right-[-1rem] md:top-20 lg:left-[58rem]">
          <Image src="/images/sticky_sticker.png"  className="object-cover w-16 -rotate-45 md:w-32  md:transform md:rotate-45" width={250} height={100} alt="hulio"/>
        </div>

      </div>

      <div className="flex">
        <div className=" hidden md:w-[30%] font-nunito ml-20 font-bold lg:block">
          <p>Lorem ipsum dollar 
            sit amet consectetur adipisicing elit. Debitis delectus alias voluptates beatae, perferendis odio.</p>
        </div>

        <div className=" w-64 h-64 md:w-screen md:h-screen">
              <Image 
               src="/images/base2_nft.png" 
                alt="hulio" 
                layout="fill" 
                 objectFit="cover" 
                className=""
           />
      </div>


        <div className="hidden md:mr-4 w-80 md:translate-y-[25rem] lg:block font-nunito font-bold">
          <p>Lorem ipsum dollar 
            sit amet consectetur adipisicing elit. Debitis delectus alias voluptates beatae, perferendis odio.</p>
        </div>

      </div>

      <div className="absolute md:top-[70rem] md:left-10">
        {/* <CircleWithText text="sticky nft * sticky nft * sticky nft * sticky nft" image={age}/> */}
      </div>

    </div>
  );
}

export default Banner


