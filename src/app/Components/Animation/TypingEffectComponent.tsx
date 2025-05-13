"use client"
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className }: TextRevealProps) {
  const letters = text.split("");
  

  return (
    <div className={`inline-flex ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
