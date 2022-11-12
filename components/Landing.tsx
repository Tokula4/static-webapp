import React from 'react'
import Image from 'next/image'

import Button from './Button'
import { motion } from 'framer-motion'

function Landing() {
  return (
    <section  className='bg-[#000] bg-[url(/img-10.jpg)]  bg-cover items-center h-screen justify-between mx-auto sticky px-8   flex' >
    
    

      <motion.div className='space-y-3' 
         initial={{ opacity:0 }}
         whileInView={{ opacity:1 }}
         transition={{ duration:1.5 }}
         >
            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl" >
                <span className="block text-white " > Welcome to the  </span>
                <span className="block text-white " > Farm </span>
                <span className="block text-white text-[15px] " > Behance is the world's largest creative network for <br></br> showcasing and discovering creative work. </span>
            </h1>
            <div className="p-6 space-x-8 text-white " >
                <Button title="Buy Now" />              
            </div>
        </motion.div>
      
    </section>
  )
}

export default Landing
 