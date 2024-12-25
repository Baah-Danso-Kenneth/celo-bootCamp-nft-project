
function About({text, subtext}:{text:string, subtext:string}) {
  return (
    <div className='bg-beige w-80'>

       <div className='h-auto pt-10 pb-10 px-5'>
       <div className='font-nunito uppercase font-bold text-center mb-2'>
          <h1> <span className='font-allura '>(</span> {text}<span className='font-allura'>)</span></h1>
        </div> 

        <p className="font-nunito text-[16px]">{subtext}</p>
       </div>
    </div>
  )
}

export default About