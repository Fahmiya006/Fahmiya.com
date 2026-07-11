import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}