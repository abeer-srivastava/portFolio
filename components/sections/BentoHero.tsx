'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from '../brutal/BentoCard';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import SpotifyCard from '../widgets/SpotifyCard';
import GitHubCard from '../widgets/GitHubCard';
import LeetCodeCard from '../widgets/LeetCodeCard';

const BentoHero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Top Level Layout: 2 Main Blocks ── */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          
          {/* ── Headline Block: Pure Typography ── */}
          <div className="col-span-12 lg:col-span-8 space-y-12 py-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <span className="h-[1px] w-12 bg-accent-violet" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet">
                Backend Systems Architect
              </span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[120px] font-[var(--font-space-mono)] font-bold text-white leading-[0.8] tracking-[-0.04em] uppercase">
              BEING <br />
              <span className="text-white/20 hover:text-accent-violet transition-colors duration-500 cursor-default">SCALABLE</span> <br /> 
              BY DESIGN
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end gap-10">
              <p className="text-base text-text-primary max-w-sm font-medium leading-relaxed border-l-2 border-white/5 pl-6">
                Specializing in high-concurrency architectures and resilient cloud infrastructure. 
                I build the engines that power modern digital experiences.
              </p>
              
              <div className="flex gap-2">
                <a href="#projects" className="bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-accent-violet hover:text-white transition-all">
                  VIEW_WORK
                </a>
                <div className="flex bg-white/5 p-1">
                   {[Github, Linkedin, Mail].map((Icon, i) => (
                     <a key={i} href="#" className="p-3 text-white/40 hover:text-white hover:bg-white/5 transition-all">
                       <Icon size={18} />
                     </a>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Visual Block: Minimal Profile ── */}
          <div className="col-span-12 lg:col-span-4 h-full min-h-[500px] relative group overflow-hidden border border-white/5">
            <Image
              src="/images/ime3.jpg"
              alt="Abeer Srivastava"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2">
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Data Bar: Minimal Horizontal Widgets ── */}
        <div className="grid grid-cols-12 gap-4">
          
          <BentoCard colSpan="col-span-12 md:col-span-5" className="bg-transparent border-white/5 hover:border-accent-violet/30 py-4 px-8">
            <SpotifyCard />
          </BentoCard>

          <BentoCard colSpan="col-span-12 md:col-span-4" className="bg-transparent border-white/5 hover:border-accent-cyan/30 py-4 px-8">
            <GitHubCard />
          </BentoCard>

          <BentoCard colSpan="col-span-12 md:col-span-3" className="bg-transparent border-white/5 hover:border-accent-emerald/30 py-4 px-8">
            <LeetCodeCard />
          </BentoCard>

        </div>

      </div>
    </section>
  );
};

export default BentoHero;
