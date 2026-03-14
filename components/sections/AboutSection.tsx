'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, GraduationCap, Briefcase, Target, Zap } from 'lucide-react';

/* ───── Animated Counter Stat ───── */
const StatCard = ({
  value,
  label,
  color,
  rotate,
}: {
  value: string;
  label: string;
  color: string;
  rotate: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: rotate - 10 }}
    whileInView={{ scale: 1, rotate }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
    className={`${color} border-[4px] border-brutal-black p-5 shadow-brutal flex flex-col items-center justify-center aspect-square hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-default`}
  >
    <span className="text-4xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black">{value}</span>
    <span className="text-[10px] font-[var(--font-jetbrains-mono)] font-black uppercase text-brutal-black mt-2 tracking-wider">{label}</span>
  </motion.div>
);

/* ───── Section Animate Wrapper ───── */
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay, ease: [0.2, 1, 0.2, 1] as [number, number, number, number] }}
    className={className}
  >
    {children}
  </motion.div>
);

const AboutSection = () => {
  const certifications = [
    { name: 'Oracle OCI AI', provider: 'Oracle', color: 'bg-brutal-green' },
    { name: 'Cyber Security', provider: 'Tata', color: 'bg-brutal-blue' },
    { name: 'IBM Data Science', provider: 'IBM', color: 'bg-brutal-pink' },
    { name: 'IBM Cloud', provider: 'IBM', color: 'bg-brutal-yellow' },
    { name: 'Google Cloud', provider: 'Google', color: 'bg-brutal-white' },
    { name: 'Big Data', provider: 'IBM', color: 'bg-brutal-pink' },
  ];

  const stats = [
    { label: 'Uptime', value: '100%', color: 'bg-brutal-pink', rotate: 3 },
    { label: 'Projects', value: '12+', color: 'bg-brutal-blue', rotate: -2 },
    { label: 'GPA', value: '8.6', color: 'bg-brutal-green', rotate: 2 },
    { label: 'Coffee', value: 'MAX', color: 'bg-brutal-yellow', rotate: -3 },
  ];

  const focusAreas = [
    'Distributed Architectures',
    'Cloud Infrastructure (AWS/GCP)',
    'API Design & Optimization',
    'System Performance',
    'AI-Powered Backend Services',
  ];

  return (
    <section id="about" className="py-24 px-6 bg-brutal-white brutal-section-border relative overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 brutal-dots opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left Column: Bio & Certs ── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Section tag */}
            <FadeUp>
              <div className="inline-block bg-brutal-yellow text-brutal-black px-8 py-3 border-[4px] border-brutal-black shadow-brutal font-[var(--font-jetbrains-mono)] font-black text-xl uppercase tracking-widest -rotate-1 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-150 cursor-default">
                ABOUT ME
              </div>
            </FadeUp>

            {/* Bio Card — Terminal window style */}
            <FadeUp delay={0.1}>
              <div className="bg-brutal-white border-[4px] border-brutal-black shadow-brutal-lg relative">
                {/* Terminal header */}
                <div className="bg-brutal-black px-5 py-3 flex items-center gap-3 border-b-[4px] border-brutal-black">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-[2px] border-brutal-black" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-[2px] border-brutal-black" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-[2px] border-brutal-black" />
                  </div>
                  <span className="text-brutal-green font-[var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-wider ml-2">
                    ~/abeer/about.md
                  </span>
                </div>

                <div className="p-8 md:p-10 space-y-8">
                  {/* Header */}
                  <h2 className="text-4xl md:text-5xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black flex items-center gap-4 uppercase tracking-tighter">
                    <User size={48} strokeWidth={3} className="text-brutal-pink shrink-0" />
                    WHO I AM
                  </h2>

                  {/* Bio Text */}
                  <div className="space-y-5 text-brutal-black">
                    <p className="text-xl md:text-2xl font-bold leading-tight">
                      I&apos;M{' '}
                      <span className="bg-brutal-yellow px-2 py-0.5 border-[2px] border-brutal-black inline-block">
                        ABEER SRIVASTAVA
                      </span>
                      , A BACKEND ENGINEER DRIVEN BY THE CHALLENGE OF BUILDING SYSTEMS THAT ARE NOT JUST FUNCTIONAL, BUT{' '}
                      <span className="relative inline-block">
                        <span className="relative z-10 text-brutal-blue">RESILIENT, SCALABLE, AND ELEGANT.</span>
                        <span className="absolute -bottom-1 left-0 w-full h-[40%] bg-brutal-pink" style={{ zIndex: -1 }} />
                      </span>
                    </p>
                    <p className="text-lg md:text-xl font-medium leading-relaxed opacity-70">
                      My engineering philosophy centers on clean architecture and performance optimization.
                      I enjoy deconstructing complex problems into simple, maintainable services that can
                      handle production-level loads with ease.
                    </p>
                  </div>

                  {/* Certifications Grid */}
                  <div className="space-y-6 pt-8 border-t-[4px] border-brutal-black">
                    <h3 className="text-2xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black flex items-center gap-3 uppercase tracking-tighter">
                      <Award className="text-brutal-blue" size={32} strokeWidth={3} />
                      CERTIFICATIONS
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {certifications.map((cert, idx) => (
                        <motion.div
                          key={cert.name}
                          initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? 2 : -2 }}
                          whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? 1 : -1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.06, duration: 0.4 }}
                          className={`${cert.color} border-[3px] border-brutal-black p-4 shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 cursor-default group`}
                        >
                          <p className="font-black text-base text-brutal-black uppercase leading-tight mb-2 tracking-tight group-hover:underline">
                            {cert.name}
                          </p>
                          <p className="text-[10px] font-black bg-brutal-black text-brutal-white inline-block px-2 py-0.5 uppercase">
                            {cert.provider}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Leadership */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-[4px] border-brutal-black">
                    <FadeUp delay={0.1}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="text-brutal-pink" size={32} strokeWidth={3} />
                          <h4 className="text-xl font-[var(--font-jetbrains-mono)] font-black uppercase text-brutal-black tracking-tighter">
                            EDUCATION
                          </h4>
                        </div>
                        <div className="bg-brutal-gray border-[4px] border-brutal-black p-5 shadow-brutal -rotate-1 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-150 cursor-default">
                          <p className="font-black text-2xl text-brutal-black leading-none">B.TECH – CSE</p>
                          <p className="text-sm font-bold text-brutal-black mt-2">SRMCEM, LUCKNOW</p>
                          <p className="text-lg font-black text-brutal-blue mt-2">GPA: 8.6 / 10</p>
                        </div>
                      </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Briefcase className="text-brutal-green" size={32} strokeWidth={3} />
                          <h4 className="text-xl font-[var(--font-jetbrains-mono)] font-black uppercase text-brutal-black tracking-tighter">
                            LEADERSHIP
                          </h4>
                        </div>
                        <div className="bg-brutal-gray border-[4px] border-brutal-black p-5 shadow-brutal rotate-1 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-150 cursor-default">
                          <p className="font-black text-2xl text-brutal-black leading-none">TECHNICAL MEMBER</p>
                          <p className="text-sm font-bold text-brutal-black mt-2">CSI SRMCEM</p>
                          <p className="text-lg font-black text-brutal-pink mt-2">5+ WORKSHOPS</p>
                        </div>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Right Column: Stats & Focus ── */}
          <div className="lg:col-span-4 space-y-10 lg:pt-24">
            {/* System Stats */}
            <FadeUp delay={0.15}>
              <div className="space-y-5">
                <div className="inline-block bg-brutal-pink text-brutal-white px-5 py-2 border-[4px] border-brutal-black shadow-brutal font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-widest rotate-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-150 cursor-default">
                  <Zap size={16} className="inline mr-1 text-black" /> <span className="text-black">STATS</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Focus Areas */}
            <FadeUp delay={0.25}>
              <div className="bg-brutal-blue border-[4px] border-brutal-black p-7 shadow-brutal-lg -rotate-2 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_#000] transition-all duration-150 cursor-default">
                <h3 className="text-2xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase mb-6 tracking-tighter flex items-center gap-3">
                  <Target size={28} strokeWidth={3} />
                  FOCUS AREAS
                </h3>
                <ul className="space-y-5">
                  {focusAreas.map((area, i) => (
                    <motion.li
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 bg-brutal-yellow border-[3px] border-brutal-black mt-0.5 group-hover:rotate-45 transition-transform duration-200 shrink-0 shadow-brutal-sm" />
                      <span className="text-base font-black text-brutal-black uppercase tracking-tight leading-tight">
                        {area}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
