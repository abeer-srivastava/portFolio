'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from '../brutal/BentoCard';
import { Mail, Linkedin, Github, FileText, Send, ArrowRight, Heart, Coffee, Globe, Terminal } from 'lucide-react';

const BentoContact = () => {
  const contactLinks = [
    { label: 'Email', icon: Mail, href: 'mailto:abeersrivastava16@gmail.com', color: 'text-accent-violet', bg: 'bg-accent-violet/5' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abeer-srivastava-a90797290', color: 'text-accent-cyan', bg: 'bg-accent-cyan/5' },
    { label: 'GitHub', icon: Github, href: 'https://github.com/abeer-srivastava', color: 'text-white', bg: 'bg-white/5' },
    { label: 'Resume', icon: FileText, href: 'https://drive.google.com/file/d/1PbRugJkvUtvQvP6vYG_cjAWaT8EM-b_x/view?usp=sharing', color: 'text-accent-emerald', bg: 'bg-accent-emerald/5' },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto bento-grid-container">
        
        {/* ── Big CTA Headline ── */}
        <BentoCard colSpan="col-span-12" className="flex flex-col items-center text-center py-20 bg-accent-violet/[0.02]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="px-4 py-2 bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-bold uppercase tracking-[0.2em] rounded-full">
              Ready for the next challenge
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter leading-[0.85] mb-12">
            LET&apos;S <span className="text-accent-violet">CONNECT</span> <br />
            AND <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>ARCHITECT.</span>
          </h2>

          <a
            href="mailto:abeersrivastava16@gmail.com"
            className="brutal-button-violet px-12 py-6 text-xl flex items-center gap-4 group"
          >
            <Send size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            START A CONVERSATION
          </a>
        </BentoCard>

        {/* ── Contact Links Grid ── */}
        {contactLinks.map((link, i) => (
          <BentoCard key={i} colSpan="col-span-6 md:col-span-3" className={`flex flex-col items-center justify-center gap-4 py-10 ${link.bg}`}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
              <div className={`p-4 border border-white/10 group-hover:border-white transition-colors`}>
                <link.icon size={32} className={`${link.color} group-hover:scale-110 transition-transform`} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                {link.label}
              </span>
            </a>
          </BentoCard>
        ))}

        {/* ── Footer Elements ── */}
        <BentoCard colSpan="col-span-12 md:col-span-4" className="flex items-center gap-4">
          <div className="text-accent-violet font-bold text-2xl italic leading-none">&lt;/&gt;</div>
          <div className="font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-widest text-white/60">
            ABEER.DEV // 2026
          </div>
        </BentoCard>

        <BentoCard colSpan="col-span-12 md:col-span-4" className="flex items-center justify-center gap-2 group hover:bg-white hover:text-black transition-colors duration-500">
          <span className="text-[10px] font-bold uppercase tracking-widest">BUILT WITH</span>
          <Coffee size={14} className="text-accent-emerald fill-accent-emerald group-hover:fill-black" />
          <span className="text-[10px] font-bold uppercase tracking-widest">AND</span>
          <Heart size={14} className="text-accent-violet fill-accent-violet group-hover:fill-black" />
        </BentoCard>

        <BentoCard colSpan="col-span-12 md:col-span-4" className="flex items-center justify-between border-accent-emerald/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald">SYSTEMS_OK</span>
          </div>
          <Terminal size={14} className="text-white/20" />
        </BentoCard>

      </div>
    </section>
  );
};

export default BentoContact;
