import React from 'react';
import { motion } from 'motion/react';
import { Users, Megaphone, FlaskConical, Star, BookOpen } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Head of Programs & Events",
      company: "AU Entrepreneurship Club",
      org: "AUMIT",
      period: "2026 – Present",
      description: "Lead the planning and execution of entrepreneurship events, workshops, and initiatives while coordinating cross-functional teams.",
      icon: Users,
      color: "blue"
    },
    {
      title: "Organizer – National Legal Hackathon (AI × Law)",
      company: "TNDALU & Anna University Collaboration",
      org: "AUMIT",
      period: "2025",
      description: "Coordinated logistics and cross-team communication for a hackathon conducted in collaboration with TNDALU and Anna University.",
      icon: FlaskConical,
      color: "purple"
    },
    {
      title: "Event Management Head",
      company: "Science & Humanities Association",
      org: "AUMIT",
      period: "2025",
      description: "Led event planning, logistics, and team coordination for association activities.",
      icon: Star,
      color: "pink"
    },
    {
      title: "Member – Media & Marketing",
      company: "AU Entrepreneurship Club",
      org: "AUMIT",
      period: "2025 – 2026",
      description: "Contributed to media strategy, marketing campaigns, and promotional activities for club initiatives.",
      icon: Megaphone,
      color: "cyan"
    },
    {
      title: "Assistant Science Secretary",
      company: "National Public School, Gopalapuram",
      org: "NPS Gopalapuram",
      period: "2021 – 2022",
      description: "Supported the coordination of science department activities and school events.",
      icon: BookOpen,
      color: "green"
    }
  ];

  const colorMap: Record<string, { border: string; dot: string; text: string; bg: string; tag: string }> = {
    blue:   { border: "hover:border-blue-400/50",   dot: "bg-blue-400",   text: "text-blue-400",   bg: "bg-blue-500/20",   tag: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
    purple: { border: "hover:border-purple-400/50", dot: "bg-purple-400", text: "text-purple-400", bg: "bg-purple-500/20", tag: "bg-purple-500/20 text-purple-300 border-purple-400/30" },
    pink:   { border: "hover:border-pink-400/50",   dot: "bg-pink-400",   text: "text-pink-400",   bg: "bg-pink-500/20",   tag: "bg-pink-500/20 text-pink-300 border-pink-400/30" },
    cyan:   { border: "hover:border-cyan-400/50",   dot: "bg-cyan-400",   text: "text-cyan-400",   bg: "bg-cyan-500/20",   tag: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" },
    green:  { border: "hover:border-green-400/50",  dot: "bg-green-400",  text: "text-green-400",  bg: "bg-green-500/20",  tag: "bg-green-500/20 text-green-300 border-green-400/30" }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 text-lg">
            Driving impact through events, innovation, and community
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => {
            const c = colorMap[exp.color];
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${c.dot} rounded-full border-4 border-gray-900 z-10`}
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className={`bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 ${c.border} rounded-lg p-6 transition-all duration-300`}>
                    <div className="flex items-center mb-3">
                      <div className={`p-2 ${c.bg} rounded-full mr-4 flex-shrink-0`}>
                        <exp.icon className={`w-5 h-5 ${c.text}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">{exp.title}</h3>
                        <p className={`text-sm ${c.text}`}>{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-500 text-xs">{exp.org}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs border ${c.tag}`}>{exp.period}</span>
                    </div>

                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
