'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from '../brutal/BentoCard';
import { Github, ExternalLink, Box, Layers, Globe, Code } from 'lucide-react';

const ProjectBlueprint = ({ 
  title, 
  description, 
  tech, 
  impact, 
  githubUrl, 
  liveUrl, 
  colSpan = "col-span-12 lg:col-span-6" 
}: any) => {
  return (
    <BentoCard colSpan={colSpan} className="flex flex-col group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tighter group-hover:text-accent-violet transition-colors">
            {title}
          </h3>
          <div className="flex gap-2 mt-2">
            {tech.slice(0, 3).map((t: string) => (
              <span key={t} className="text-[10px] font-bold text-accent-emerald uppercase tracking-widest bg-accent-emerald/5 px-2 py-0.5 border border-accent-emerald/10">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-white hover:bg-white/5 transition-all">
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-accent-violet hover:bg-accent-violet/5 transition-all text-accent-violet">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-text-primary/80 mb-6 flex-1 leading-relaxed">
        {description}
      </p>

      {/* Blueprint visualization mock */}
      <div className="bg-black/40 border border-white/5 p-4 mb-6 font-[var(--font-jetbrains-mono)] text-[10px] space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <Globe size={12} className="text-accent-cyan" />
          <span className="text-white/40">Request -&gt;</span>
          <Box size={12} className="text-accent-violet" />
          <span className="text-white/40">Load Balancer -&gt;</span>
          <Layers size={12} className="text-accent-emerald" />
          <span className="text-white/40">Service</span>
        </div>
        <div className="border-t border-white/5 pt-2">
          <span className="text-accent-emerald">Impact:</span> {impact}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((t: string) => (
          <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-white/30 border border-white/5 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </BentoCard>
  );
};

const BentoProjects = () => {
  const projects = [
    {
      title: 'EchoBox',
      description: 'A secure, anonymous messaging platform featuring AI-powered suggestions and real-time updates.',
      impact: 'Zero-knowledge architecture for secure communication',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Gemini API', 'NextAuth'],
      liveUrl: 'https://echo-box-theta.vercel.app/',
      githubUrl: 'https://github.com/abeer-srivastava/EchoBox',
      colSpan: 'col-span-12 lg:col-span-7'
    },
    {
      title: 'PixieDraw',
      description: 'Real-time collaborative whiteboard built with WebSockets for instant synchronization.',
      impact: 'Ultra-low latency real-time collaboration',
      tech: ['Turborepo', 'Next.js', 'WebSockets', 'PostgreSQL'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
      colSpan: 'col-span-12 lg:col-span-5'
    },
    {
      title: 'SuperBrain',
      description: 'Full-stack knowledge hub to save, tag, and share digital content with a secure backend.',
      impact: 'Highly organized content management for digital knowledge',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Zod'],
      githubUrl: 'https://github.com/abeer-srivastava/superBrain',
      colSpan: 'col-span-12 lg:col-span-5'
    },
    {
      title: 'WavvyChat',
      description: 'Modern, scalable chat application offering real-time messaging and private rooms.',
      impact: 'Scalable infrastructure for real-time communication',
      tech: ['Next.js', 'Tailwind', 'Prisma', 'Turborepo'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
      colSpan: 'col-span-12 lg:col-span-7'
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto bento-grid-container">
        
        <div className="col-span-12 mb-6">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3">
            <Code size={20} className="text-accent-emerald" />
            <h2 className="text-2xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter">
              Selected <span className="text-accent-emerald">Blueprints</span>
            </h2>
          </div>
        </div>

        {projects.map((project, i) => (
          <ProjectBlueprint key={i} {...project} />
        ))}

        <BentoCard colSpan="col-span-12" className="flex items-center justify-between bg-white/[0.02] border-dashed border-white/10">
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Want to see more architectural work?</p>
          <a href="https://github.com/abeer-srivastava" target="_blank" rel="noopener noreferrer" className="brutal-button-violet px-6 py-3 flex items-center gap-2">
            GitHub Archive <ExternalLink size={16} />
          </a>
        </BentoCard>

      </div>
    </section>
  );
};

export default BentoProjects;
