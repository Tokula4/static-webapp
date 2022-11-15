import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

function About() {
  return (
    <div  className=" bg-gray-300" >
        <h1  className=" text-center font-bold text-[60px]" >About US</h1>
        <div  className=" md:flex px-4  mx-auto max-w-7xl sm:py-24 justify-center sm:px-6 lg:max-w-7xl lg:px-8" >
        <motion.div className=" text-center" 
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
          }}>
            <h1 className=" font-Playfairdisplay text-[50px] " > What we do </h1>
            <p  className="text-[20px]  " 
                     
                      >A farm is an area of land that is devoted primarily to <br></br>
                agricultural processes with the primary objective of <br></br>
                producing food and other crops</p>
                <div className="p-5" ><Button  title='Read more'  /></div>
                
        </motion.div>
        <motion.div 
              initial={{
                x:500,
               opacity:0,
                scale:0.5 
          
              }}
          
              animate={{
                x:  0,
                opacity:1,
                scale:1
              }}
          
              transition={{
                duration:1.5,
              }}
               >
        <Image src="/img-15.png"   width="400" height="400"  />
        </motion.div>
      
        </div>
      
    </div>
  )
}

export default About
