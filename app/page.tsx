'use client';

import React from 'react';
import BrutalNav from '@/components/brutal/BrutalNav';
import BentoHero from '@/components/sections/BentoHero';
import BentoAboutSkills from '@/components/sections/BentoAboutSkills';
import BentoProjects from '@/components/sections/BentoProjects';
import BentoContact from '@/components/sections/BentoContact';

export default function Home() {
  return (
    <main className="bg-bg-primary min-h-screen selection:bg-accent-violet selection:text-white">
      <BrutalNav />
      <BentoHero />
      <BentoAboutSkills />
      <BentoProjects />
      <BentoContact />
    </main>
  );
}
