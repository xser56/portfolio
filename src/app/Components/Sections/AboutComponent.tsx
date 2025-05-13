import { motion } from 'framer-motion'
import React from 'react'
import Image from "next/image";


interface AboutProps
{
    title: string,
    description: string,
    image: string
    imageAlt: string
}

const AboutComponent = ({title, description, image, imageAlt}: AboutProps )  => {
  return (
    <motion.section
    initial={{ opacity: 10, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
    className=""
  >
    
    <main className="grid grid-cols-2 ">
    <section
    className="pt-10 mx-auto px-6 grid grid-cols-2 "
  >
    <div>
        <h1 className='text-[40px]'>
        {title}

        </h1>
      <p className="text-[16px] max-w-2xl">
        {description}
      </p>
    </div>

    <div>
      
    </div>
  </section>
  
  <section className=" text-black flex justify-center items-center">
    <Image
        src={image}
        alt={imageAlt}
        width={600}
        height={600}
        className=""
      />
  </section>
  </main>
  </motion.section>
  )
  
}

export default AboutComponent
