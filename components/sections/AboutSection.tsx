'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, GraduationCap, Briefcase, Target, Zap } from 'lucide-react';

/* ───── Animated Stat Card ───── */
const StatCard = ({
  value,
  label,
  rotate,
}: {
  value: string;
  label: string;
  rotate: number;
}) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0, rotate: rotate - 5 }}
    whileInView={{ scale: 1, opacity: 1, rotate }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="bg-bg-secondary border-2 border-white p-6 shadow-[4px_4px_0px_rgba(255,255,255,1)] flex flex-col items-center justify-center aspect-square group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_#C8F135] hover:border-accent-lime transition-all duration-300 cursor-default"
  >
    <span className="text-4xl font-[var(--font-space-mono)] font-bold text-accent-lime group-hover:scale-110 transition-transform">{value}</span>
    <span className="text-[10px] font-[var(--font-space-mono)] font-bold uppercase text-white mt-3 tracking-widest">{label}</span>
  </motion.div>
);

/* ───── Section Animate Wrapper ───── */
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const AboutSection = () => {
  const certifications = [
    { name: 'Oracle OCI AI', provider: 'Oracle' },
    { name: 'Cyber Security', provider: 'Tata' },
    { name: 'IBM Data Science', provider: 'IBM' },
    { name: 'IBM Cloud', provider: 'IBM' },
    { name: 'Google Cloud', provider: 'Google' },
    { name: 'Big Data', provider: 'IBM' },
  ];

  const stats = [
    { label: 'Uptime', value: '100%', rotate: 2 },
    { label: 'Projects', value: '12+', rotate: -1 },
    { label: 'GPA', value: '8.6', rotate: 1 },
    { label: 'Coffee', value: 'MAX', rotate: -2 },
  ];

  const focusAreas = [
    'Distributed Architectures',
    'Cloud Infrastructure (AWS/GCP)',
    'API Design & Optimization',
    'System Performance',
    'AI-Powered Backend Services',
  ];

  return (
    <section id="about" className="py-32 px-6 bg-bg-primary border-t-2 border-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── Left Column: Bio & Certs ── */}
          <div className="lg:col-span-8 space-y-12">

            {/* Section label */}
            <FadeUp>
              <div className="inline-block bg-accent-lime text-black px-10 py-4 border-2 border-white shadow-[6px_6px_0px_rgba(255,255,255,1)] font-[var(--font-space-mono)] font-bold text-2xl uppercase tracking-widest -rotate-1 hover:rotate-0 transition-all duration-300 cursor-default">
                ABOUT ME
              </div>
            </FadeUp>

            {/* Bio Card — Terminal window style */}
            <FadeUp delay={0.1}>
              <div className="bg-bg-secondary border-2 border-white shadow-[8px_8px_0px_rgba(255,255,255,1)] relative overflow-hidden group hover:shadow-[10px_10px_0px_#C8F135] transition-all duration-500">
                {/* Terminal header */}
                <div className="bg-white/5 px-6 py-4 flex items-center gap-4 border-b-2 border-white">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#FF5F56]" />
                    <div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#FFBD2E]" />
                    <div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#27C93F]" />
                  </div>
                  <span className="text-accent-lime font-[var(--font-space-mono)] text-xs font-bold uppercase tracking-widest ml-2">
                    ~/abeer/about.md
                  </span>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                  {/* Header */}
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-accent-lime border-2 border-white rotate-3 shadow-[4px_4px_0px_white]">
                      <User size={40} strokeWidth={3} className="text-black" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter">
                      WHO I AM
                    </h2>
                  </div>

                  {/* Bio Text */}
                  <div className="space-y-6 text-text-primary">
                    <p className="text-xl md:text-2xl font-bold leading-tight">
                      I&apos;M <span className="text-accent-lime">ABEER SRIVASTAVA</span>, A BACKEND ENGINEER DRIVEN BY THE CHALLENGE OF BUILDING SYSTEMS THAT ARE NOT JUST FUNCTIONAL, BUT{' '}
                      <span className="text-accent-cyan underline decoration-white decoration-4 underline-offset-8">RESILIENT AND SCALABLE.</span>
                    </p>
                    <p className="text-lg md:text-xl font-medium leading-relaxed opacity-80">
                      My engineering philosophy centers on clean architecture and performance optimization.
                      I enjoy deconstructing complex problems into simple, maintainable services that can
                      handle production-level loads with ease.
                    </p>
                  </div>

                  {/* Certifications Row */}
                  <div className="space-y-8 pt-10 border-t-2 border-white/20">
                    <h3 className="text-2xl font-[var(--font-space-mono)] font-bold text-white flex items-center gap-4 uppercase tracking-widest">
                      <Award className="text-accent-cyan" size={32} strokeWidth={3} />
                      CERTIFICATIONS
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {certifications.map((cert, idx) => (
                        <motion.div
                          key={cert.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-6 py-2.5 border-2 border-white/30 text-white font-[var(--font-space-mono)] font-bold text-sm uppercase tracking-widest hover:border-accent-lime hover:text-accent-lime hover:bg-white/5 transition-all duration-200 cursor-default"
                        >
                          {cert.name} <span className="text-white/40 ml-2">[{cert.provider}]</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Leadership */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t-2 border-white/20">
                    <FadeUp delay={0.1}>
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <GraduationCap className="text-accent-pink" size={32} strokeWidth={3} />
                          <h4 className="text-xl font-[var(--font-space-mono)] font-bold uppercase text-white tracking-widest">
                            EDUCATION
                          </h4>
                        </div>
                        <div className="bg-bg-primary border-2 border-white p-6 shadow-[6px_6px_0px_white] -rotate-1 hover:rotate-0 transition-all duration-300">
                          <p className="font-bold text-2xl text-accent-lime leading-none">B.TECH – CSE</p>
                          <p className="text-sm font-bold text-white/70 mt-3 uppercase tracking-widest">SRMCEM, LUCKNOW</p>
                          <p className="text-lg font-bold text-accent-cyan mt-3 tracking-widest">GPA: 8.6 / 10</p>
                        </div>
                      </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <Briefcase className="text-accent-lime" size={32} strokeWidth={3} />
                          <h4 className="text-xl font-[var(--font-space-mono)] font-bold uppercase text-white tracking-widest">
                            LEADERSHIP
                          </h4>
                        </div>
                        <div className="bg-bg-primary border-2 border-white p-6 shadow-[6px_6px_0px_white] rotate-1 hover:rotate-0 transition-all duration-300">
                          <p className="font-bold text-2xl text-accent-lime leading-none">TECHNICAL MEMBER</p>
                          <p className="text-sm font-bold text-white/70 mt-3 uppercase tracking-widest">CSI SRMCEM</p>
                          <p className="text-lg font-bold text-accent-pink mt-3 tracking-widest">5+ WORKSHOPS</p>
                        </div>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Right Column: Stats & Focus ── */}
          <div className="lg:col-span-4 space-y-16 lg:pt-32">
            {/* System Stats */}
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <div className="inline-block bg-accent-pink text-white px-6 py-2.5 border-2 border-white shadow-[4px_4px_0px_white] font-[var(--font-space-mono)] font-bold text-lg uppercase tracking-[0.2em] rotate-2">
                  <Zap size={20} className="inline mr-2 text-black fill-black" /> <span className="text-black">STATS</span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Focus Areas */}
            <FadeUp delay={0.3}>
              <div className="bg-bg-secondary border-2 border-white p-8 shadow-[8px_8px_0px_white] -rotate-2 hover:rotate-0 hover:shadow-[8px_8px_0px_#C8F135] hover:border-accent-lime transition-all duration-500">
                <h3 className="text-2xl font-[var(--font-space-mono)] font-bold text-white uppercase mb-8 tracking-widest flex items-center gap-4">
                  <Target size={32} strokeWidth={3} className="text-accent-cyan" />
                  FOCUS AREAS
                </h3>
                <ul className="space-y-6 font-[var(--font-space-mono)]">
                  {focusAreas.map((area, i) => (
                    <motion.li
                      key={area}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="text-accent-lime font-bold text-xl leading-none group-hover:translate-x-1 transition-transform inline-block">▸</span>
                      <span className="text-sm font-bold text-white uppercase tracking-widest leading-relaxed group-hover:text-accent-lime transition-colors">
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
