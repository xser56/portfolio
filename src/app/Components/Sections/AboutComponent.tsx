import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface AboutProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const AboutComponent = ({
  title,
  description,
  image,
  imageAlt,
}: AboutProps) => {
  return (
    <motion.section
      initial={{ opacity: 10, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className=""
    >
      <main className="flex flex-col-2 justify-around bg-stone-200/30">
        <section className="pt-10">
          <div>
            <h1 className="text-[40px]">{title}</h1>
            <p className="text-[16px] max-w-2xl flex ">{description}</p>
          </div>

          <div></div>
        </section>

        <section className=" text-black bg-stone-100 flex justify-center items-center">
          <Image
            src={image}
            alt={imageAlt}
            width={600}
            height={200}
            className=""
          />
        </section>
      </main>
    </motion.section>
  );
};

export default AboutComponent;
