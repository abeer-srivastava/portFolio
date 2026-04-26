'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Code, X, Database, Shield, Zap } from 'lucide-react';

const projectRotations = [1, -1, 0.5, -0.5];

/* ───── API Documentation Overlay ───── */
const ProjectDocs = ({ project, onClose }: { project: any, onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] bg-brutal-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-brutal-white border-[4px] border-brutal-black shadow-brutal-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Docs Header */}
      <div className="bg-brutal-black text-brutal-yellow p-4 flex items-center justify-between border-b-[4px] border-brutal-black">
        <div className="flex items-center gap-3">
          <Code size={20} strokeWidth={3} />
          <span className="font-[var(--font-jetbrains-mono)] font-black text-sm uppercase tracking-widest">
            API_DOCS: v1.0.2 / {project.title}
          </span>
        </div>
        <button onClick={onClose} className="hover:rotate-90 transition-transform duration-200">
          <X size={24} strokeWidth={3} />
        </button>
      </div>

      {/* Docs Body */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
        {/* Endpoint Sim */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-brutal-gray/20 p-4 border-[2px] border-brutal-black">
            <span className="bg-brutal-yellow text-brutal-black px-2 py-1 font-black text-[10px] uppercase">GET</span>
            <span className="font-[var(--font-jetbrains-mono)] font-bold text-sm text-brutal-black truncate">
              /api/v1/projects/{project.title.toLowerCase()}
            </span>
            <span className="ml-auto text-green-600 font-black text-[10px]">200 OK</span>
          </div>
          <p className="text-brutal-black text-sm font-bold opacity-70 leading-relaxed">
            Technical specification and architecture overview for the {project.title} subsystem. 
            Includes security protocols, data modeling, and infrastructure flow.
          </p>
        </div>

        {/* JSON Spec */}
        <div className="space-y-4">
          <h4 className="font-black text-xs uppercase tracking-widest text-brutal-coral flex items-center gap-2">
            <Database size={14} /> Schema Specification
          </h4>
          <div className="bg-brutal-black p-5 border-[3px] border-brutal-black shadow-brutal-sm">
            <pre className="font-[var(--font-jetbrains-mono)] text-[11px] md:text-xs text-brutal-white leading-relaxed">
{`{
  "project": "${project.title}",
  "architecture": "Distributed",
  "auth_layer": "${project.tech.includes('NextAuth') ? 'NextAuth.js (JWT)' : 'OAuth 2.0'}",
  "primary_db": "${project.tech.includes('MongoDB') ? 'MongoDB Atlas' : 'PostgreSQL'}",
  "caching": ["Redis", "CDN Edge"],
  "security": ["TLS 1.3", "Rate Limiting", "Zod Validation"],
  "infrastructure": ${JSON.stringify(project.infra, null, 4)}
}`}
            </pre>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          <div className="border-[3px] border-brutal-black p-5 bg-brutal-yellow/5">
             <h5 className="font-black text-xs uppercase mb-3 flex items-center gap-2">
               <Shield size={14} /> Security Implementation
             </h5>
             <p className="text-[11px] font-bold leading-snug">
               Implemented zero-trust architecture with strict input validation and 
               server-side encryption for all sensitive data streams.
             </p>
          </div>
          <div className="border-[3px] border-brutal-black p-5 bg-brutal-coral/5">
             <h5 className="font-black text-xs uppercase mb-3 flex items-center gap-2">
               <Zap size={14} /> Performance Ops
             </h5>
             <p className="text-[11px] font-bold leading-snug">
               Optimized average response times to &lt;120ms through intelligent query 
               indexing and multi-layer caching strategies.
             </p>
          </div>
        </div>
      </div>

      {/* Docs Footer */}
      <div className="p-4 bg-brutal-gray border-t-[4px] border-brutal-black flex justify-end gap-4">
         <button onClick={onClose} className="px-6 py-2 border-[3px] border-brutal-black bg-brutal-white font-black text-xs uppercase shadow-brutal-sm hover:translate-y-[-2px] transition-all">
           Close Docs
         </button>
         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border-[3px] border-brutal-black bg-brutal-yellow font-black text-xs uppercase shadow-brutal-sm hover:translate-y-[-2px] transition-all flex items-center gap-2">
           Repository <ArrowUpRight size={14} strokeWidth={3} />
         </a>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({
  project,
  index,
  onOpenDocs
}: {
  project: any;
  index: number;
  onOpenDocs: (p: any) => void;
}) => {
  const rotation = projectRotations[index % projectRotations.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotation * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${project.color || 'bg-brutal-white'} border-[4px] border-brutal-black p-7 md:p-8 shadow-brutal flex flex-col h-full hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 relative group`}
    >
      {/* Number badge */}
      <div className="absolute -top-4 -left-3 bg-brutal-black text-brutal-yellow w-10 h-10 border-[3px] border-brutal-black flex items-center justify-center font-[var(--font-jetbrains-mono)] font-black text-sm z-10">
        {num}
      </div>

      <div className="flex justify-between items-start mb-5 pt-2">
        <h3 className="text-2xl md:text-3xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-none">
          {project.title}
        </h3>
        <div className={`px-3 py-1 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-[10px] uppercase shadow-brutal-sm flex items-center gap-1.5 ${
          project.status === 'live' ? 'bg-brutal-yellow text-brutal-black' : 'bg-brutal-gray text-brutal-black'
        }`}>
          {project.status === 'live' && <span className="w-2 h-2 bg-brutal-black rounded-full animate-pulse" />}
          {project.status}
        </div>
      </div>

      <p className="text-brutal-black text-sm md:text-base mb-6 leading-snug font-bold">
        {project.description}
      </p>

      {/* Infrastructure Flow */}
      <div className="flex items-center flex-wrap gap-2 mb-6 bg-brutal-gray/10 p-3 border-[2px] border-brutal-black border-dashed">
        {project.infra.map((step: string, i: number) => (
          <React.Fragment key={step}>
            <span className="text-[9px] font-black text-brutal-black uppercase bg-brutal-white px-2 py-0.5 border border-brutal-black">
              {step}
            </span>
            {i < project.infra.length - 1 && <span className="text-brutal-coral font-black text-xs">➜</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {project.tech.map((t: string) => (
          <span key={t} className="px-2 py-0.5 bg-brutal-yellow/20 border border-brutal-black text-brutal-black font-[var(--font-jetbrains-mono)] font-black text-[9px] uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onOpenDocs(project)}
          className="bg-brutal-black text-brutal-white px-5 py-2.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-xs uppercase shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
        >
          <Code size={16} strokeWidth={3} />
          Technical Specs
        </button>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-brutal-yellow text-brutal-black px-5 py-2.5 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-xs uppercase shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2">
            <ExternalLink size={16} strokeWidth={3} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'EchoBox',
      status: 'live' as const,
      description: 'A secure, anonymous messaging platform featuring AI-powered message suggestions and real-time inbox updates.',
      impact: 'Enables safe communication with zero-knowledge architecture',
      tech: ['Next.js', 'React', 'Tailwind', 'NextAuth', 'MongoDB', 'Gemini API'],
      infra: ['Next.js', 'NextAuth', 'MongoDB Atlas', 'Gemini AI'],
      liveUrl: 'https://echo-box-theta.vercel.app/',
      githubUrl: 'https://github.com/abeer-srivastava/EchoBox',
      color: 'bg-brutal-blue',
    },
    {
      title: 'PixieDraw',
      status: 'soon' as const,
      description: 'A real-time collaborative whiteboard featuring WebSockets for instant synchronization across multiple clients.',
      impact: 'Real-time collaboration with zero latency',
      tech: ['Turborepo', 'Next.js', 'WebSockets', 'Node.js', 'PostgreSQL', 'TypeScript'],
      infra: ['Frontend', 'WebSocket Svr', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
      color: 'bg-brutal-purple',
    },
    {
      title: 'SuperBrain',
      status: 'soon' as const,
      description: 'A full-stack knowledge hub to save, tag, and share digital content with a clean UI and secure backend.',
      impact: 'Transform scattered information into organized knowledge',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Zod'],
      infra: ['React', 'Express API', 'MongoDB Atlas'],
      githubUrl: 'https://github.com/abeer-srivastava/superBrain',
      color: 'bg-brutal-white',
    },
    {
      title: 'WavvyChat',
      status: 'soon' as const,
      description: 'A modern, scalable chat application offering real-time messaging, private rooms, and shared UI components.',
      impact: 'Scalable real-time messaging with modern architecture',
      tech: ['Next.js', 'Tailwind', 'Express.js', 'Prisma', 'WebSockets', 'Turborepo'],
      infra: ['Next.js', 'Socket.io', 'Redis', 'PostgreSQL'],
      githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
      color: 'bg-brutal-yellow',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-brutal-bg brutal-section-border relative overflow-hidden">
      <div className="absolute inset-0 brutal-dots opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center space-y-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block">
            <div className="inline-block bg-brutal-coral text-brutal-black px-6 py-2 border-[4px] border-brutal-black shadow-brutal font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-widest rotate-1">
              SYSTEM REPOSITORY
            </div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-none">
            TECHNICAL{' '}
            <span className="relative inline-block">
              <span className="relative z-10">PROJECTS</span>
              <span className="absolute -bottom-1 left-0 w-full h-[20%] bg-brutal-yellow opacity-60 m-1" style={{ zIndex: -1 }} />
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onOpenDocs={setSelectedProject} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/abeer-srivastava" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brutal-yellow text-brutal-black px-8 py-4 border-[4px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-sm uppercase shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
            View All on GitHub <ArrowUpRight size={18} strokeWidth={3} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDocs project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
