import React from 'react'
import Image from 'next/image'

import Button from './Button'
import { motion } from 'framer-motion'

function Landing() {
  return (
    <section  className='bg-[#000] items-center h-screen justify-between mx-auto sticky px-8   flex' >
        <motion.div className='space-y-3' >
            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl" >
                <span className="block text-white " > Furniture store  </span>
                <span className="block text-white " > By EJ-Limited </span>
                <span className="block text-white text-[15px] " > Behance is the world's largest creative network for <br></br> showcasing and discovering creative work. </span>
            </h1>
            <div className="p-6 space-x-8 text-white " >
                <Button title="Buy Now" />              
            </div>
        </motion.div>
        <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image src="/img-2.png" layout="fill" objectFit="contain" />
      </div>
      
    </section>
  )
}

export default Landing
 