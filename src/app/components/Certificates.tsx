import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Trophy, Star, X } from 'lucide-react';

import gdgCert from '../../imports/GDG_Solution_Challenge.jpg';
import udemyCert from '../../imports/Udemy-Agile_Scrum.jpg';
import jpmorganCert from '../../imports/JPMorgan__Chase.jpg';
import foundationAiCert from '../../imports/Foundation_of_AI___ML.jpg';
import aiMlAlgoCert from '../../imports/AI_and_Machine_Learning_Algorithms_and_Techniques.jpg';
import deloitteCert from '../../imports/Deloitte.jpg';
import triggerCert from '../../imports/trigger.jpg';
import scienceOlympiadCert from '../../imports/Science_Olympiad_Foundation.jpg';
import natSciDayCert from '../../imports/nat_sci_day.jpg';
import nationalChildrensCongressCert from '../../imports/National_Science_Children_s_Congress.jpg';
import nstseCert from '../../imports/NSTSE.jpg';
import preciseEnergyCert from '../../imports/Precise_Energy_2023.jpg';

interface Certificate {
  title: string;
  issuer: string;
  file: string;
  color: string;
  icon: string;
}

const certificates: Certificate[] = [
  {
    title: "GDG Solution Challenge",
    issuer: "Google Developer Groups",
    file: gdgCert,
    color: "from-blue-400 to-cyan-400",
    icon: "🏆"
  },
  {
    title: "Agile Scrum Master Certification",
    issuer: "Udemy",
    file: udemyCert,
    color: "from-purple-400 to-pink-400",
    icon: "🏅"
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co. (via Forage)",
    file: jpmorganCert,
    color: "from-blue-500 to-indigo-500",
    icon: "📈"
  },
  {
    title: "Foundations of AI & Machine Learning",
    issuer: "Coursera · Microsoft Certified",
    file: foundationAiCert,
    color: "from-green-400 to-emerald-400",
    icon: "🧠"
  },
  {
    title: "AI & ML Algorithms and Techniques",
    issuer: "Coursera · Microsoft Certified",
    file: aiMlAlgoCert,
    color: "from-cyan-400 to-blue-400",
    icon: "🤖"
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    file: deloitteCert,
    color: "from-orange-400 to-red-400",
    icon: "💼"
  },
  {
    title: "Trigger Certification",
    issuer: "Trigger",
    file: triggerCert,
    color: "from-violet-400 to-purple-500",
    icon: "⚡"
  },
  {
    title: "SOF International Mathematics Olympiad",
    issuer: "Science Olympiad Foundation",
    file: scienceOlympiadCert,
    color: "from-yellow-400 to-orange-400",
    icon: "🔬"
  },
  {
    title: "National Science Day Celebrations 2023",
    issuer: "National Public School",
    file: natSciDayCert,
    color: "from-teal-400 to-cyan-500",
    icon: "🧪"
  },
  {
    title: "28th National Children's Science Congress",
    issuer: "NCSTC · Tamilnadu Science Forum",
    file: nationalChildrensCongressCert,
    color: "from-green-400 to-teal-400",
    icon: "🧬"
  },
  {
    title: "National Level Science Talent Search Exam",
    issuer: "Unified Council · NSTSE",
    file: nstseCert,
    color: "from-indigo-400 to-blue-400",
    icon: "📐"
  },
  {
    title: "Precise Energy 2023 Olympiad",
    issuer: "ASE Rosatom · Energy of the Future",
    file: preciseEnergyCert,
    color: "from-lime-400 to-green-500",
    icon: "⚛️"
  }
];

function CertCard({ cert, onClick }: { cert: Certificate; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="flex-shrink-0 w-72 cursor-pointer"
    >
      <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 rounded-xl overflow-hidden hover:border-purple-400/60 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
        {/* Preview */}
        <div className="h-44 bg-gray-800/60 relative overflow-hidden">
          <img
            src={cert.file}
            alt={cert.title}
            className="w-full h-full object-cover"
          />
          {/* Hover hint overlay */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">Click to expand</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="text-2xl mb-2">{cert.icon}</div>
          <h3 className="text-sm font-bold text-white leading-snug mb-1">{cert.title}</h3>
          <span className={`inline-block px-2 py-0.5 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-semibold`}>
            {cert.issuer}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CertModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1 w-full bg-gradient-to-r ${cert.color}`} />

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/60">
          <div>
            <h3 className="text-white font-bold text-lg">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 min-h-0 p-4">
          <img
            src={cert.file}
            alt={cert.title}
            className="w-full h-full object-contain rounded-lg max-h-[65vh]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certificates() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicated = [...certificates, ...certificates];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Professional certifications and accomplishments — hover to enlarge, click to view
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6 text-center">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6 text-center">
            <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">SIH 2025</div>
            <div className="text-gray-400">Hackathon Participant</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-yellow-500/10 border border-pink-400/30 rounded-lg p-6 text-center">
            <Star className="w-12 h-12 text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">8.2</div>
            <div className="text-gray-400">CGPA at MIT, Anna University</div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-6">
            <div
              className="flex gap-6"
              style={{
                width: 'max-content',
                animation: 'marqueeScroll 38s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {duplicated.map((cert, index) => (
                <CertCard
                  key={index}
                  cert={cert}
                  onClick={() => setActiveCert(cert)}
                />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marqueeScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 italic">
            "Continuous learning and professional growth fuel every breakthrough."
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCert && (
          <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
