'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  impact,
  tech,
  githubUrl,
  liveUrl,
  status,
  index,
}: {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'live' | 'soon';
  index: number;
}) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-bg-secondary border-2 border-white p-8 shadow-[4px_4px_0px_rgba(255,255,255,1)] flex flex-col h-full hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#C8F135] hover:border-accent-lime transition-all duration-300 relative group overflow-hidden"
    >
      {/* Large Background Number */}
      <div className="absolute top-0 right-0 font-[var(--font-space-mono)] font-bold text-8xl text-white/[0.04] leading-none -translate-y-4 translate-x-4 select-none group-hover:text-accent-lime/[0.08] transition-colors duration-500">
        {num}
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter leading-none group-hover:text-accent-lime transition-colors">
          {title}
        </h3>
        <div className={`px-4 py-1.5 border-2 font-[var(--font-space-mono)] font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0px_rgba(255,255,255,1)] ${
          status === 'live'
            ? 'bg-accent-lime text-black border-white'
            : 'bg-transparent text-white border-white/40'
        }`}>
          {status === 'live' && <span className="w-2 h-2 bg-black rounded-full animate-pulse" />}
          {status}
        </div>
      </div>

      <p className="text-text-primary text-base md:text-lg mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity font-medium relative z-10">
        {description}
      </p>

      {/* Impact Box */}
      <div className="bg-bg-primary/50 border-l-4 border-accent-cyan p-4 mb-8 relative z-10">
        <p className="font-[var(--font-space-mono)] font-bold text-[11px] uppercase tracking-widest leading-snug text-accent-cyan">
          📌 IMPACT: <span className="text-white">{impact}</span>
        </p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2.5 mb-10 mt-auto relative z-10">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-white/5 border border-white/20 text-white font-[var(--font-space-mono)] font-bold text-[10px] uppercase tracking-widest hover:border-accent-lime hover:text-accent-lime transition-all duration-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 relative z-10">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white text-black px-6 py-3 border-2 border-white font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_#C8F135] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#00E5FF] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Github size={16} strokeWidth={3} />
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-transparent text-white px-6 py-3 border-2 border-white font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_white] hover:bg-accent-lime hover:text-black hover:border-white hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} strokeWidth={3} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EchoBox',
      status: 'live' as const,
      description: 'A secure, anonymous messaging platform built with Next.js featuring AI-powered message suggestions and real-time inbox updates.',
      impact: 'Enables safe communication with zero-knowledge architecture',
      tech: ['Next.js', 'React', 'Tailwind', 'NextAuth', 'MongoDB', 'Gemini API'],
      liveUrl: 'https://echo-box-theta.vercel.app/',
      githubUrl: 'https://github.com/abeer-srivastava/EchoBox',
    },
    {
      title: 'PixieDraw',
      status: 'soon' as const,
      description: 'A real-time collaborative whiteboard built with Turborepo featuring WebSockets for instant synchronization.',
      impact: 'Real-time collaboration with zero latency',
      tech: ['Turborepo', 'Next.js', 'WebSockets', 'Node.js', 'PostgreSQL', 'TypeScript'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
    },
    {
      title: 'SuperBrain',
      status: 'soon' as const,
      description: 'A full-stack knowledge hub to save, tag, and share digital content with a clean UI and secure backend.',
      impact: 'Transform scattered information into organized knowledge',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Zod'],
      githubUrl: 'https://github.com/abeer-srivastava/superBrain',
    },
    {
      title: 'WavvyChat',
      status: 'soon' as const,
      description: 'A modern, scalable chat application offering real-time messaging, private rooms, and shared UI components.',
      impact: 'Scalable real-time messaging with modern architecture',
      tech: ['Next.js', 'Tailwind', 'Express.js', 'Prisma', 'WebSockets', 'Turborepo'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-bg-primary border-t-2 border-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-block bg-accent-pink text-black px-8 py-3 border-2 border-white shadow-[6px_6px_0px_white] font-[var(--font-space-mono)] font-bold text-lg uppercase tracking-widest rotate-1 hover:rotate-0 transition-all duration-300 cursor-default">
              SELECTED PROJECTS
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter leading-none"
          >
            BUILDING{' '}
            <span className="text-accent-lime">IMPACT</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/abeer-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-transparent text-white px-10 py-5 border-2 border-white font-[var(--font-space-mono)] font-bold text-sm uppercase tracking-widest shadow-[8px_8px_0px_white] hover:bg-accent-lime hover:text-black hover:shadow-[8px_8px_0px_#00E5FF] hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300"
          >
            Explore Full Archive
            <ArrowUpRight size={20} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
