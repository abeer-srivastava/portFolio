'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BentoCard from '../brutal/BentoCard';
import { Terminal, Code2, Server, Database, Cpu, LucideIcon } from 'lucide-react';

const TerminalBio = () => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-accent-violet" />
          <span className="font-[var(--font-space-mono)] text-xs font-bold uppercase tracking-widest text-white/50">system_exec --whoami</span>
        </div>
        <div className="flex gap-2">
          {['bio', 'education', 'focus'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-tighter border transition-all ${
                activeTab === tab 
                  ? 'bg-accent-violet border-accent-violet text-white' 
                  : 'bg-transparent border-white/10 text-white/40 hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 font-[var(--font-jetbrains-mono)] text-sm leading-relaxed text-text-primary">
        {activeTab === 'bio' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <p><span className="text-accent-emerald">guest@abeer:~$</span> cat about_me.md</p>
            <p className="text-white text-lg font-bold leading-tight">
              I&apos;m Abeer Srivastava, a Backend Engineer obsessed with high-availability systems.
            </p>
            <p>
              My philosophy: Build systems that don&apos;t just work—systems that survive. 
              I specialize in distributed architectures and performance-critical services.
            </p>
            <p className="text-accent-violet"># resilient # scalable # architectural_purity</p>
          </motion.div>
        )}
        {activeTab === 'education' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <p><span className="text-accent-emerald">guest@abeer:~$</span> ls education/</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border border-white/10 bg-white/5">
                <p className="text-accent-violet font-bold">B.Tech – CSE</p>
                <p className="text-xs uppercase text-white/60">SRMCEM, Lucknow</p>
                <p className="text-sm mt-1">GPA: 8.6 / 10.0</p>
              </div>
              <div className="p-4 border border-white/10 bg-white/5">
                <p className="text-accent-emerald font-bold">Leadership</p>
                <p className="text-xs uppercase text-white/60">CSI SRMCEM - Tech Member</p>
                <p className="text-sm mt-1">Led 5+ Technical Workshops</p>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === 'focus' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p><span className="text-accent-emerald">guest@abeer:~$</span> grep focus areas.json</p>
            <ul className="space-y-2 pt-2">
              {[
                'Distributed Architectures',
                'Cloud Infrastructure (AWS/GCP)',
                'API Design & Optimization',
                'System Performance',
                'AI-Powered Backend Services'
              ].map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-accent-violet">●</span> {area}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  tags: string[];
  color: string;
}

const SkillCategory = ({ title, icon: Icon, tags, color }: SkillCategoryProps) => (
  <BentoCard colSpan="col-span-12 md:col-span-4" className="flex flex-col gap-6">
    <div className={`w-12 h-12 flex items-center justify-center border border-${color}/20 bg-${color}/5`}>
      <Icon size={24} className={`text-${color}`} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-white/60">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </BentoCard>
);

const BentoAboutSkills = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto bento-grid-container">
        
        {/* ── Section Header ── */}
        <div className="col-span-12 mb-6">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3">
            <Cpu size={20} className="text-accent-violet" />
            <h2 className="text-2xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter">
              Identity & <span className="text-accent-violet">Capabilities</span>
            </h2>
          </div>
        </div>

        {/* ── Terminal Card ── */}
        <BentoCard colSpan="col-span-12 lg:col-span-8" rowSpan="row-span-2">
          <TerminalBio />
        </BentoCard>

        {/* ── Core Stack (Moved from Hero) ── */}
        <BentoCard colSpan="col-span-12 md:col-span-6 lg:col-span-4" className="flex flex-col justify-between h-full min-h-[200px]">
          <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-violet" /> Core Stack
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {['Node.js', 'Python', 'Go', 'Postgres', 'Docker', 'AWS'].map((tech) => (
              <div key={tech} className="p-4 border border-white/5 bg-white/[0.02] flex items-center justify-center text-[10px] font-bold uppercase tracking-widest hover:border-accent-violet hover:bg-accent-violet/5 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ── Quick Stats ── */}
        <BentoCard colSpan="col-span-12 md:col-span-6 lg:col-span-4" className="grid grid-cols-2 gap-4">
          {[
            { label: 'Uptime', value: '100%', color: 'text-accent-emerald' },
            { label: 'Experience', value: '3+ Yrs', color: 'text-accent-violet' },
            { label: 'GPA', value: '8.6', color: 'text-accent-cyan' },
            { label: 'Latency', value: 'Low', color: 'text-accent-emerald' }
          ].map((stat, i) => (
            <div key={i} className="p-4 border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center hover:border-white/20 transition-colors">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">{stat.label}</span>
            </div>
          ))}
        </BentoCard>

        {/* ── Skill Categories ── */}
        <SkillCategory 
          title="Languages" 
          icon={Code2} 
          tags={['Python', 'Node.js', 'Go', 'TypeScript', 'SQL']} 
          color="accent-violet" 
        />
        <SkillCategory 
          title="Infrastructure" 
          icon={Server} 
          tags={['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']} 
          color="accent-emerald" 
        />
        <SkillCategory 
          title="Databases" 
          icon={Database} 
          tags={['PostgreSQL', 'MongoDB', 'Redis', 'Elastic', 'DynamoDB']} 
          color="accent-cyan" 
        />

      </div>
    </section>
  );
};

export default BentoAboutSkills;
