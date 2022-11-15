import React from 'react'
import Image from 'next/image'

import Button from './Button'
import { motion } from 'framer-motion'

function Landing() {
  return (
    <section  className=' items-center h-screen justify-between mx-auto sticky px-8   flex' >
    
    

      <motion.div className='space-y-3' 
       initial={{
        x:-500,
       opacity:0,
        scale:0.5 
  
      }}
  
      animate={{
        x: - 0,
        opacity:1,
        scale:1
      }}
  
      transition={{
        duration:1.5,
      }}
         >
            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl" >
                <span className="block text-white text-[50px] font-Robotosalb " > Welcome to the  </span>
                <span className="block text-white text-[90px]  " > Farm </span>
                <span className="block text-white text-[15px] " > Behance is the world's largest creative network for <br></br> showcasing and discovering creative work. </span>
            </h1>
            <div className="p-6 space-x-8 text-white " >
                            
            </div>
        </motion.div>
      
    </section>
  )
}

export default Landing
 