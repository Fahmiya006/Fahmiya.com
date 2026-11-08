import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Users, Megaphone, FlaskConical, Star, BookOpen, Briefcase, Brain, ClipboardList } from 'lucide-react';

// Snake timeline settings
const TURN = 44; // width of the U-turn at the end of each row (px)
const GAP = 56;  // vertical gap between rows (px)
const LINE = 'rgba(192, 132, 252, 0.6)'; // timeline colour (purple-400 at 60%)

export function Experience() {
  const experiences = [
    {
      title: "Business Analytics Intern",
      company: "Cognifyz IT Solutions Pvt. Ltd.",
      org: "Internship",
      period: "Jul – Aug 2026",
      description: "Completed a one-month business analytics internship, commended for coordination, communication, and attention to detail.",
      icon: Briefcase,
      color: "cyan"
    },
    {
      title: "AI/ML Innovation Lead",
      company: "Google Developer Groups",
      org: "GDG MIT",
      period: "2026 – Present",
      description: "Lead the AI/ML track: planning workshops and member projects so students learn AI by building it.",
      icon: Brain,
      color: "purple"
    },
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
      title: "Joint Secretary",
      company: "Association of Computer Technologists",
      org: "AUMIT",
      period: "2026 – Present",
      description: "Manage official records and liaise between members, faculty, and event organizers.",
      icon: ClipboardList,
      color: "green"
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

  // How many cards fit on one row of the snake for the current screen width
  const [perRow, setPerRow] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerRow(w >= 900 ? 3 : w >= 600 ? 2 : 1); // 3 per row = three rows for 8 entries
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const rows: (typeof experiences)[] = [];
  for (let i = 0; i < experiences.length; i += perRow) {
    rows.push(experiences.slice(i, i + perRow));
  }

  const renderCard = (exp: (typeof experiences)[number], c: (typeof colorMap)[string]) => (
    <motion.div whileHover={{ scale: 1.03 }} className="h-full w-full">
      <div className={`h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 ${c.border} rounded-lg p-5 transition-all duration-300`}>
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
  );

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 text-lg">
            Driving impact through events, innovation, and community
          </p>
        </motion.div>

        {perRow === 1 ? (
          /* Phones: a simple vertical timeline */
          <div className="relative pl-8">
            <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />
            {experiences.map((exp) => {
              const c = colorMap[exp.color];
              return (
                <div key={exp.title} className="relative mb-8 last:mb-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`absolute -left-8 top-6 w-5 h-5 ${c.dot} rounded-full border-4 border-gray-900 z-10`}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {renderCard(exp, c)}
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Larger screens: a horizontal snake. Row 1 runs left to right, row 2 right to left, and so on. */
          <div>
            {rows.map((row, r) => {
              const rtl = r % 2 === 1;
              const isLastRow = r === rows.length - 1;
              return (
                <div
                  key={r}
                  className="relative"
                  style={{ paddingLeft: TURN, paddingRight: TURN, marginBottom: isLastRow ? 0 : GAP }}
                >
                  <div
                    dir={rtl ? 'rtl' : 'ltr'}
                    className="grid"
                    style={{ gridTemplateColumns: `repeat(${perRow}, minmax(0, 1fr))` }}
                  >
                    {row.map((exp, i) => {
                      const c = colorMap[exp.color];
                      const globalIndex = r * perRow + i;
                      const isFirst = globalIndex === 0;
                      const isLast = globalIndex === experiences.length - 1;
                      const lineSides = rtl
                        ? { right: isFirst ? '50%' : 0, left: isLast ? '50%' : 0 }
                        : { left: isFirst ? '50%' : 0, right: isLast ? '50%' : 0 };
                      return (
                        <div key={exp.title} dir="ltr" className="relative flex px-6 pt-8">
                          {/* Line segment through this card's node */}
                          <div className="absolute h-1" style={{ top: 8, backgroundColor: LINE, ...lineSides }} />

                          {/* Node */}
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: i * 0.12 + 0.2, duration: 0.4 }}
                            viewport={{ once: true }}
                            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 ${c.dot} rounded-full border-4 border-gray-900 z-10`}
                          />

                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            viewport={{ once: true }}
                            className="w-full"
                          >
                            {renderCard(exp, c)}
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* U-turn down to the next row */}
                  {!isLastRow && (
                    <div
                      className="absolute"
                      style={{
                        top: 8,
                        width: TURN,
                        height: `calc(100% + ${GAP + 4}px)`,
                        borderStyle: 'solid',
                        borderColor: LINE,
                        borderWidth: rtl ? '4px 0 4px 4px' : '4px 4px 4px 0',
                        borderRadius: rtl ? '20px 0 0 20px' : '0 20px 20px 0',
                        ...(rtl ? { left: 0 } : { right: 0 })
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
