import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';

// scroll-mt keeps each section's heading clear of the fixed top bar
const anchor = 'scroll-mt-28';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <NeuralBackground />
      <Navbar />
      <div className="relative z-10 pt-24">
        <Hero />
        <div id="about" className={anchor}><About /></div>
        <div id="projects" className={anchor}><Projects /></div>
        <div id="experience" className={anchor}><Experience /></div>
        <div id="skills" className={anchor}><TechStack /></div>
        <div id="certificates" className={anchor}><Certificates /></div>
        <div id="contact" className={anchor}><Contact /></div>
      </div>
    </div>
  );
}
