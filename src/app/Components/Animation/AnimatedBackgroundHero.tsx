"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute bottom-[-50px] rounded-full bg-gray-400 opacity-20"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
          }}
          animate={{ y: "-110vh", opacity: [0.4, 0.2, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: bubble.duration,
            delay: bubble.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
