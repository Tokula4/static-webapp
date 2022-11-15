import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
function Details() {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" >
    <div className="md:flex" >
        <div>
        <Image src="/img-9.jpg" width={1000} height={500} objectFit="contain" />
        </div>
        <div className="bg-[#BCE29E] text-white  p-6 " >
            <h1 className="text-[45px] p-5  uppercase font-DMSerifdisplay  " > best Egg Farm </h1>
            <p   className="p-5 font-Robotosalb" >In this post, we learned how to create a fixed navbar with tailwind CSS. In addition, 
                to stick to the top, it is also responsive and easily editable for your preferences.</p>
                <div className="flex p-5" >
                <div><button className="mx-2 font-bold uppercase" >See Details </button></div>
                 
                 <div  className="animate-ping pointer " ><AiOutlineArrowRight  size={25}  /></div>

                
                
                </div>

               
        </div>
      
    </div>
    <div className="md:flex" >
      
        <div className="bg-[#FF884B] text-white  p-6 " >
            <h1 className="text-[45px] p-5  uppercase font-DMSerifdisplay  " > Best Farm Now </h1>
            <p   className="p-5 font-Robotosalb" >In this post, we learned how to create a fixed navbar with tailwind CSS. In addition, 
                to stick to the top, it is also responsive and easily editable for your preferences.</p>
                <div className="flex p-5" >
                <div><button className="mx-2 font-bold uppercase" >See Details </button></div>
                 
                 <div  className="animate-ping pointer " ><AiOutlineArrowRight  size={25}  /></div>

                
                
                </div>

               
        </div>
        <div>
        <Image src="/img-12.jpg" width={1000} height={500} objectFit="contain" />
        </div>
      
    </div>
    </section>
  )
}

export default Details
