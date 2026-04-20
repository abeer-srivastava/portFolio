'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

/* ───── Marquee Strip ───── */
const MarqueeStrip = () => {
  const items = [
    'NODE.JS', '★', 'PYTHON', '★', 'POSTGRESQL', '★', 'DOCKER', '★',
    'KUBERNETES', '★', 'GRAPHQL', '★', 'AWS', '★', 'REDIS', '★',
    'TYPESCRIPT', '★', 'DISTRIBUTED SYSTEMS', '★', 'REST APIs', '★', 'CI/CD', '★',
  ];

  return (
    <div className="z-1 w-full border-y-2 border-white bg-accent-lime overflow-hidden py-3 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-[var(--font-space-mono)] font-bold text-sm text-black tracking-widest"
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
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col bg-bg-primary relative overflow-hidden">
      
      {/* ── Main content ── */}
      <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >

          {/* ─── Left: Text Content ─── */}
          <div className="lg:col-span-7 space-y-8">

            {/* Available badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 bg-accent-lime text-black px-4 py-2 border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] font-[var(--font-space-mono)] text-xs font-bold uppercase tracking-widest">
                <span className="w-2.5 h-2.5 bg-black rounded-full animate-pulse" />
                Available for work
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-white font-[var(--font-space-mono)] font-bold leading-[1.1] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] uppercase">
                Hey, I&apos;m{' '}
                <span className="text-accent-lime">Abeer</span>
                <br />
                <span className="block mt-2">
                  I Build{' '}
                  <span className="inline-block bg-accent-lime text-black px-4 py-1 border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] -rotate-1">
                    Things
                  </span>
                </span>
                <span className="block mt-4">
                  That{' '}
                  <span className="inline-block border-2 border-white px-4 py-1 text-accent-lime rotate-1 shadow-[4px_4px_0px_#C8F135]">
                    Scale.
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Sub description card */}
            <motion.div variants={itemVariants}>
              <div className="max-w-xl bg-bg-secondary border-2 border-white p-6 shadow-[6px_6px_0px_rgba(255,255,255,1)] relative group hover:shadow-[6px_6px_0px_#C8F135] hover:border-accent-lime transition-all duration-300">
                <div className="absolute -top-3 left-4 bg-accent-lime text-black px-3 py-0.5 border-2 border-white text-[10px] font-[var(--font-space-mono)] font-bold uppercase tracking-tighter">
                  ~/about.txt
                </div>
                <p className="text-text-primary text-base md:text-lg font-medium leading-relaxed font-[var(--font-jetbrains-mono)]">
                  Backend Engineer specializing in <span className="text-accent-lime">distributed systems</span>,
                  {' '}REST/GraphQL APIs, and <span className="text-accent-cyan">cloud-native infrastructure</span>.
                  I turn complex problems into scalable solutions.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
              <a
                href="#projects"
                className="group bg-accent-lime text-black px-8 py-4 border-2 border-white font-[var(--font-space-mono)] font-bold text-sm uppercase tracking-widest shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#00E5FF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200 flex items-center gap-3"
              >
                View My Work
                <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-transparent text-white px-8 py-4 border-2 border-white font-[var(--font-space-mono)] font-bold text-sm uppercase tracking-widest shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:bg-accent-pink hover:text-white hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200 flex items-center gap-3"
              >
                <Download size={20} strokeWidth={3} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* ─── Right: Profile Photo Card ─── */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[24rem] md:h-[28rem]">

              {/* Stacked offset lime block */}
              <div className="absolute top-6 left-6 w-full h-full bg-accent-lime border-2 border-white z-0" />

              {/* Photo frame */}
              <motion.div
                className="absolute inset-0 bg-bg-secondary border-3 border-white z-10 shadow-[8px_8px_0px_rgba(255,255,255,1)] overflow-hidden group"
                whileHover={{ rotate: -1, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/images/ime3.jpg"
                  alt="Abeer Srivastava"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent-lime/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>

              {/* Name tag at the bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black text-accent-lime px-6 py-3 border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)]"
              >
                <span className="font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                  ABEER SRIVASTAVA
                </span>
              </motion.div>
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
