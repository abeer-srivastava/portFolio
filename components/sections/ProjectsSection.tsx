'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projectRotations = [1, -1, 0.5, -0.5];

const ProjectCard = ({
  title,
  description,
  impact,
  tech,
  githubUrl,
  liveUrl,
  status,
  color = 'bg-brutal-white',
  index,
}: {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'live' | 'soon';
  color?: string;
  index: number;
}) => {
  const rotation = projectRotations[index % projectRotations.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotation * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 1, 0.2, 1] as [number, number, number, number] }}
      className={`${color} border-[4px] border-brutal-black p-7 md:p-8 shadow-brutal flex flex-col h-full hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 relative group`}
    >
      {/* Number badge */}
      <div className="absolute -top-4 -left-3 bg-brutal-black text-brutal-green w-10 h-10 border-[3px] border-brutal-black flex items-center justify-center font-[var(--font-jetbrains-mono)] font-black text-sm z-10">
        {num}
      </div>

      <div className="flex justify-between items-start mb-5 pt-2">
        <h3 className="text-2xl md:text-3xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-none">
          {title}
        </h3>
        <div className={`px-3 py-1 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-[10px] uppercase shadow-brutal-sm flex items-center gap-1.5 ${
          status === 'live'
            ? 'bg-brutal-green text-brutal-black'
            : 'bg-brutal-gray text-brutal-black'
        }`}>
          {status === 'live' && <span className="w-2 h-2 bg-brutal-black rounded-full animate-pulse" />}
          {status}
        </div>
      </div>

      <p className="text-brutal-black text-base md:text-lg mb-6 leading-snug font-bold">
        {description}
      </p>

      <div className="bg-brutal-black text-brutal-white p-4 mb-6 border-[2px] border-brutal-black shadow-brutal-sm -rotate-[0.5deg]">
        <p className="font-[var(--font-jetbrains-mono)] font-black text-[11px] uppercase tracking-widest leading-snug">
          📌 IMPACT: {impact}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 bg-brutal-yellow border-[2px] border-brutal-black text-brutal-black font-[var(--font-jetbrains-mono)] font-black text-[10px] uppercase shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-100"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brutal-black text-brutal-white px-5 py-2.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-xs uppercase shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
        >
          <Github size={16} strokeWidth={3} />
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brutal-blue text-brutal-black px-5 py-2.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-xs uppercase shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
          >
            <ExternalLink size={16} strokeWidth={3} />
            Live Demo
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
      color: 'bg-brutal-white',
    },
    {
      title: 'PixieDraw',
      status: 'soon' as const,
      description: 'A real-time collaborative whiteboard built with Turborepo featuring WebSockets for instant synchronization.',
      impact: 'Real-time collaboration with zero latency',
      tech: ['Turborepo', 'Next.js', 'WebSockets', 'Node.js', 'PostgreSQL', 'TypeScript'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
      color: 'bg-brutal-pink',
    },
    {
      title: 'SuperBrain',
      status: 'soon' as const,
      description: 'A full-stack knowledge hub to save, tag, and share digital content with a clean UI and secure backend.',
      impact: 'Transform scattered information into organized knowledge',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Zod'],
      githubUrl: 'https://github.com/abeer-srivastava/superBrain',
      color: 'bg-brutal-blue',
    },
    {
      title: 'WavvyChat',
      status: 'soon' as const,
      description: 'A modern, scalable chat application offering real-time messaging, private rooms, and shared UI components.',
      impact: 'Scalable real-time messaging with modern architecture',
      tech: ['Next.js', 'Tailwind', 'Express.js', 'Prisma', 'WebSockets', 'Turborepo'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
      color: 'bg-brutal-green',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-brutal-white brutal-section-border relative overflow-hidden">
      {/* Dot texture */}
      <div className="absolute inset-0 brutal-dots opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-block bg-brutal-pink text-brutal-white px-6 py-2 border-[4px] border-brutal-black shadow-brutal font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-widest rotate-1 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-150 cursor-default">
              MY WORK
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-none"
          >
            FEATURED{' '}
            <span className="relative inline-block">
              <span className="relative z-10">PROJECTS</span>
              <span className="absolute -bottom-1 left-0 w-full h-[20%] bg-brutal-green m-1" style={{ zIndex: -1 }} />
            </span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abeer-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brutal-yellow text-brutal-black px-8 py-4 border-[4px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-sm uppercase tracking-wider shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150"
          >
            View All on GitHub
            <ArrowUpRight size={18} strokeWidth={3} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
