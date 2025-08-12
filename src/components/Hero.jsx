import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-20 md:py-32 bg-gradient-to-b from-teal-50 to-gray-50">
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900">
        Kunarapu Shyam Kumar
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="text-xl md:text-2xl text-teal-700 font-medium mb-6">
        Full-Stack Developer
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="max-w-2xl mx-auto text-gray-600 mb-8">
        I build dynamic and user-friendly web applications from concept to deployment. I enjoy taking complex problems and turning them into elegant code.
      </motion.p>
      <motion.a whileHover={{ scale: 1.04 }} href="#projects" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition">
        View My Work
      </motion.a>
    </section>
  );
}
