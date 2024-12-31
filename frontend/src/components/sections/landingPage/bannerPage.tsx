import CircleWithText from "@/components/shared/circle_rotate";
import Image from "next/image";
import age from '../../../../public/images/base2_nft.png'

function BannerPage() {
  return (
    <div className="relative">
      <div className="mx-10 relative">
        <div className="md:mt-[-7rem]">
          <h1 className="text-[25rem] w-full font-nunito uppercase text-center font-extrabold">
            sticky
          </h1>
        </div>

        <div className="absolute right-[120] top-28">
          <Image src="/images/sticky_sticker.png"  className="object-cover transform rotate-45" width={250} height={100} alt="hulio"/>
        </div>

      </div>

      <div className="flex">
        <div className="w-80 font-nunito ml-20">
          <p>Lorem ipsum dollar 
            sit amet consectetur adipisicing elit. Debitis delectus alias voluptates beatae, perferendis odio.</p>
        </div>

        <div className=" w-screen h-screen">
              <Image 
               src="/images/base2_nft.png" 
                alt="hulio" 
                layout="fill" 
                 objectFit="cover" 
                className=""
           />
      </div>


        <div className="mr-4 w-80 md:translate-y-[25rem] font-nunito">
          <p>Lorem ipsum dollar 
            sit amet consectetur adipisicing elit. Debitis delectus alias voluptates beatae, perferendis odio.</p>
        </div>

      </div>

      <div className="absolute md:top-[70rem] md:left-10">
        <CircleWithText text="sticky nft * sticky nft * sticky nft * sticky nft" image={age}/>
      </div>

    </div>
  );
}

export default BannerPage;
