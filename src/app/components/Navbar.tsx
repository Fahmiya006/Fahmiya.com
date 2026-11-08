import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const TAGLINE = [
  'Computer Science Undergraduate @ MIT, Anna University',
  'Business & Data Analytics',
  'Aspiring Data Strategist',
  'AI-Driven Insights',
  'Leadership & Innovation',
];

function go(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + 140;
      let current = '';
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= probe) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // One copy of the marquee text; it is rendered twice so the loop is seamless.
  const strip = (
    <div className="flex items-center shrink-0">
      {TAGLINE.map((t, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6 text-sm text-gray-200">{t}</span>
          <span className="text-purple-400/80 text-sm">|</span>
        </span>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/75 backdrop-blur-md border-b border-white/10">
      {/* Dashboard bar */}
      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 sm:px-6 h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 shrink-0"
          aria-label="Back to top"
        >
          <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg shadow-purple-500/20 ring-2 ring-purple-400/40">
            <img src="/logo-ff-black.png" alt="FF" className="w-8 h-auto" />
          </span>
          <span className="hidden sm:block text-left leading-tight">
            <span className="block text-white font-semibold text-sm">Fathima Fahmiya</span>
            <span className="block text-gray-400 text-xs">Portfolio</span>
          </span>
        </button>

        <nav className="flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-center justify-end gap-1 min-w-max ml-auto">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors ${
                    active === l.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/25 to-purple-500/25 border border-purple-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Marquee under the dashboard */}
      <div className="border-t border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 overflow-hidden">
        <div className="flex w-max py-2" style={{ animation: 'navMarquee 40s linear infinite' }}>
          {strip}
          {strip}
        </div>
      </div>

      <style>{`
        @keyframes navMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { header [style*="navMarquee"] { animation: none !important; } }
      `}</style>
    </header>
  );
}
