import React from 'react';
import { motion } from 'motion/react';
import { BarChart2, Code2, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            {"FATHIMA FAHMIYA".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.07, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.2, rotateY: 360, transition: { duration: 0.5 } }}
              >
                {letter === " " ? " " : letter}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Welcome to My Portfolio
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          CS Engineering Student · Aspiring Business & Data Analyst · Full-Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-12"
        >
          {[BarChart2, Code2, Users].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
              }}
              className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            >
              <Icon size={40} className="text-blue-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-4"
        >
          <div className="text-lg text-gray-400">Madras Institute of Technology, Anna University · CGPA 8.2</div>
          <div className="text-blue-400">Python · MERN Stack · Data Analytics · DSA · Leadership</div>
        </motion.div>
      </div>
    </section>
  );
}
