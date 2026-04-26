'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

/* ───── Sticker Badge ───── */
const StickerBadge = ({
  children,
  className = '',
  rotate = 0,
  bg = 'bg-brutal-yellow',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  bg?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: rotate - 20 }}
    animate={{ scale: 1, rotate }}
    transition={{ type: 'spring', stiffness: 260, damping: 18, delay }}
    className={`absolute z-30 px-3 py-1.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-bold text-[11px] uppercase tracking-tight shadow-brutal-sm select-none ${bg} ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </motion.div>
);

/* ───── Marquee Strip ───── */
const MarqueeStrip = () => {
  const items = [
    'NODE.JS', '★', 'PYTHON', '★', 'POSTGRESQL', '★', 'DOCKER', '★',
    'KUBERNETES', '★', 'GRAPHQL', '★', 'AWS', '★', 'REDIS', '★',
    'TYPESCRIPT', '★', 'DISTRIBUTED SYSTEMS', '★', 'REST APIs', '★', 'CI/CD', '★',
  ];

  return (
    <div className="z-1 w-full border-y-[3px] border-brutal-black bg-brutal-yellow overflow-hidden py-2.5 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-[var(--font-jetbrains-mono)] font-black text-sm text-brutal-black tracking-wide"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ───── Main Hero ───── */
const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.2, 1, 0.2, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col bg-brutal-coral relative overflow-hidden">

      {/* ── Dot pattern background ── */}
      <div className="absolute inset-0 brutal-dots opacity-[0.08] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-12 px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >

          {/* ─── Left: Text Content ─── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 bg-brutal-white text-brutal-black px-4 py-2 border-[3px] border-brutal-black shadow-brutal-sm font-[var(--font-jetbrains-mono)] text-xs font-black uppercase tracking-wider">
                <span className="w-2 h-2 bg-brutal-yellow rounded-full animate-pulse" />
                Available for work
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-brutal-black font-[var(--font-jetbrains-mono)] font-black leading-[0.95] text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] uppercase">
                Hey, I&apos;m{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Abeer</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[20%] bg-brutal-yellow m-1" style={{ zIndex: -1 }} />
                </span>
                <br />
                <span className="block mt-1">
                  I Build{' '}
                  <span className="inline-block bg-brutal-white text-brutal-black px-3 py-1 border-[3px] border-brutal-black shadow-brutal-sm -rotate-1">
                    Things
                  </span>
                </span>
                <span className="block mt-1">
                  That{' '}
                  <span className="inline-block bg-brutal-white text-brutal-black px-3 py-1 border-[3px] border-brutal-black shadow-brutal-sm rotate-1">
                    Scale.
                  </span>
                  {/* <span className="inline-block w-[10px] h-[0.7em] bg-brutal-black ml-3 animate-pulse align-middle" /> */}
                    
                </span>
              </h1>
            </motion.div>

            {/* Sub description */}
            <motion.div variants={itemVariants}>
              <div className="max-w-xl bg-brutal-white border-[3px] border-brutal-black p-5 shadow-brutal relative">
                <div className="absolute -top-3 left-4 bg-brutal-yellow px-2 py-0.5 border-[2px] border-brutal-black text-[10px] font-[var(--font-jetbrains-mono)] font-black uppercase">
                  ~/about.txt
                </div>
                <p className="text-brutal-black text-base md:text-lg font-medium leading-relaxed font-[var(--font-jetbrains-mono)]">
                  Backend Engineer specializing in <strong>distributed systems</strong>,
                  {' '}REST/GraphQL APIs, and <strong>cloud-native infrastructure</strong>.
                  I turn complex problems into scalable solutions.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group bg-brutal-yellow text-brutal-black px-7 py-3.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-sm uppercase tracking-wider shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-brutal-white text-brutal-black px-7 py-3.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-sm uppercase tracking-wider shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
              >
                <Download size={18} strokeWidth={3} />
                Resume
              </a>
            </motion.div>

            {/* Social row
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: 'https://github.com/abeer', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/abeer', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@abeer.dev', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 bg-brutal-white border-[3px] border-brutal-black flex items-center justify-center shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                >
                  <Icon size={18} strokeWidth={2.5} />
                </a>
              ))}
             
            </motion.div> */}
          </div>

          {/* ─── Right: Profile Photo Card ─── */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[24rem] md:h-[28rem]">

              {/* Offset colored shadow block */}
              <div className="absolute top-4 left-4 w-full h-full bg-brutal-yellow border-[3px] border-brutal-black z-0" />

              {/* Photo frame */}
              <motion.div
                className="absolute inset-0 bg-brutal-white border-[4px] border-brutal-black z-10 shadow-brutal-lg overflow-hidden"
                whileHover={{ rotate: -1, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/images/newme.jpg"
                  alt="Abeer Srivastava"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Name tag at the bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-brutal-black text-brutal-white px-5 py-2.5 border-[3px] border-brutal-black shadow-brutal-sm"
              >
                <span className="font-[var(--font-jetbrains-mono)] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                  ABEER SRIVASTAVA
                </span>
              </motion.div>

              {/* ── Floating sticker badges ── */}
              {/* <StickerBadge className="-top-4 -left-6" rotate={-12} bg="bg-brutal-white" delay={0.5}>
                <span className="text-brutal-black">Node.js</span>
              </StickerBadge>

              <StickerBadge className="top-16 -right-8" rotate={8} bg="bg-brutal-green" delay={0.65}>
                <span className="text-brutal-black">Docker</span>
              </StickerBadge>

              <StickerBadge className="bottom-20 -left-10" rotate={15} bg="bg-brutal-pink" delay={0.8}>
                <span className="text-brutal-black">Python</span>
              </StickerBadge>

              <StickerBadge className="-bottom-1 -right-6" rotate={-6} bg="bg-brutal-blue" delay={0.95}>
                <span className="text-brutal-black">PostgreSQL</span>
              </StickerBadge>

              <StickerBadge className="top-1/2 -right-12" rotate={-3} bg="bg-brutal-yellow" delay={1.1}>
                <span className="text-brutal-black">AWS</span>
              </StickerBadge> */}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Marquee tech strip ── */}
      <MarqueeStrip />
    </section>
  );
};

export default HeroSection;
