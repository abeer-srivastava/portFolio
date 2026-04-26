'use client';

import React, { useEffect } from 'react';
import BrutalNav from '@/components/brutal/BrutalNav';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import EventLogFooter from '@/components/brutal/EventLogFooter';
import { useDebug } from '@/components/providers/DebugProvider';

export default function Home() {
  const { addLog } = useDebug();

  useEffect(() => {
    addLog('INFO: Welcome to ABEER.DEV kernel 1.0.2');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            addLog(`INFO: Navigated to #${entry.target.id} section.`);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-brutal-bg">
      <BrutalNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <EventLogFooter />
    </main>
  );
}
