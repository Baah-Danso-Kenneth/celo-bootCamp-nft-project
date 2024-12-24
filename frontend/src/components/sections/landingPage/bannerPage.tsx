import Image from "next/image";

function BannerPage() {
  return (
    <div>
      <div className="mx-10 relative">
        <div>
          <h1 className="text-[25rem] w-full font-nunito uppercase font-extrabold">
            sticky
          </h1>
        </div>

        <div className="absolute right-[120] top-28">
          <Image src="/images/sticky_sticker.png"  className="object-cover transform rotate-45" width={200} height={100} alt="hulio"/>
        </div>

      </div>
    </div>
  );
}

export default BannerPage;
