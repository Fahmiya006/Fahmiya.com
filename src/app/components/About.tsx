import React from 'react';
import { motion } from 'motion/react';
import { BarChart2, Users, Lightbulb } from 'lucide-react';
import profileImage from '../../imports/Fahmiya.jpeg';
import resumePDF from '../../imports/Fathima_Fahmiya_Resume.pdf';

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt="Fathima Fahmiya"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Computer Science undergraduate at MIT, Anna University
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am an aspiring <span className="text-blue-400 font-semibold">Business & Data Analyst</span> with a strong foundation
              in Python, C++, DSA, DBMS, and OOP. I love turning raw data into meaningful insights — from
              customer churn patterns and e-commerce trends to marketing funnel analytics — and building
              ML models that solve real problems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond the code, I am a <span className="text-purple-400 font-semibold">natural leader</span>.
              As Head of Programs & Events at the AU Entrepreneurship Club, I oversee cross-functional teams,
              drive large-scale events, and have organized national-level hackathons. I thrive at the
              intersection of technology, strategy, and people.
            </p>

            <div className="flex items-center space-x-6 text-gray-400 flex-wrap gap-y-3">
              <div className="flex items-center space-x-2">
                <BarChart2 className="text-blue-400" size={20} />
                <span>Data Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-purple-400" size={20} />
                <span>Team Leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="text-pink-400" size={20} />
                <span>Problem Solver</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Turning data into decisions and ideas into impact — one project at a time."
              </p>
            </motion.div>

            <motion.a
              href={resumePDF}
              download="Fathima_Fahmiya_Resume.pdf"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
