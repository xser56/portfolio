"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {bubbles.map((_, index) => {
        const size = Math.random() * 20 + 10; // random size between 10px - 30px
        const left = Math.random() * 100; // random horizontal position
        const duration = Math.random() * 10 + 5; // random duration 5s - 15s
        const delay = Math.random() * 5; // random delay up to 5s

        return (
          <motion.div
            key={index}
            className="absolute bottom-[-50px] rounded-full bg-gray-400 opacity-20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
            }}
            animate={{ y: "-110vh", opacity: [0.4, 0.2, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}

    </div>
  );
};

export default AnimatedBackground;
