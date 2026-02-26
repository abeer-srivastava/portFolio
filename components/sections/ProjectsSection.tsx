import React from 'react';
import BrutalSection from '../brutal/BrutalSection';
import BrutalCard from '../brutal/BrutalCard';
import BrutalButton from '../brutal/BrutalButton';
import BrutalBadge from '../brutal/BrutalBadge';
import Sticker from '../brutal/Sticker';
import { Rocket, ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  status: 'live' | 'coming-soon';
  description: string;
  impact: string;
  tech: Array<{ name: string; category: 'frontend' | 'backend' | 'cloud' | 'language' }>;
  liveUrl?: string;
  githubUrl: string;
  rotate: number;
}

const projects: Project[] = [
  {
    title: 'EchoBox',
    status: 'live',
    description: 'A secure, anonymous messaging platform built with Next.js featuring AI-powered message suggestions, real-time inbox updates, and privacy-focused authentication using NextAuth, JWT, and email verification.',
    impact: 'Enables safe communication with zero-knowledge architecture',
    tech: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'Tailwind', category: 'frontend' },
      { name: 'NextAuth', category: 'backend' },
      { name: 'MongoDB', category: 'cloud' },
      { name: 'Gemini API', category: 'cloud' },
      { name: 'Zod', category: 'backend' },
    ],
    liveUrl: 'https://echo-box-theta.vercel.app/',
    githubUrl: 'https://github.com/abeer-srivastava/EchoBox',
    rotate: -1,
  },
  {
    title: 'PixieDraw',
    status: 'coming-soon',
    description: 'A real-time collaborative whiteboard built with Turborepo featuring WebSockets for instant synchronization, shared UI components, and full-stack TypeScript workflows.',
    impact: 'Real-time collaboration with zero latency',
    tech: [
      { name: 'Turborepo', category: 'backend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'WebSockets', category: 'backend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'cloud' },
      { name: 'TypeScript', category: 'language' },
    ],
    githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
    rotate: 1.5,
  },
  {
    title: 'SecondBrain',
    status: 'coming-soon',
    description: 'A full-stack knowledge hub to save, tag, and share your digital content — from articles to tweets — with a clean UI and secure backend. Turns scattered information into an organized, searchable, and shareable personal workspace.',
    impact: 'Transform scattered information into organized knowledge',
    tech: [
      { name: 'React', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'TypeScript', category: 'language' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Express', category: 'backend' },
      { name: 'MongoDB', category: 'cloud' },
      { name: 'Zod', category: 'backend' },
    ],
    githubUrl: 'https://github.com/abeer-srivastava/SecondBrain',
    rotate: -0.5,
  },
  {
    title: 'WavvyChat',
    status: 'coming-soon',
    description: 'A modern, scalable chat application built using Turborepo, WebSockets, and Next.js — offering real-time messaging, private rooms, shared UI components, and full-stack TypeScript workflows.',
    impact: 'Scalable real-time messaging with modern architecture',
    tech: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'Tailwind', category: 'frontend' },
      { name: 'NextAuth', category: 'backend' },
      { name: 'Express.js', category: 'backend' },
      { name: 'Prisma ORM', category: 'backend' },
      { name: 'WebSockets', category: 'backend' },
      { name: 'Turborepo', category: 'backend' },
      { name: 'PostgreSQL', category: 'cloud' },
    ],
    githubUrl: 'https://github.com/abeer-srivastava/pixieDraw',
    rotate: 0.5,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <BrutalSection id="projects" bgColor="gray" className="relative overflow-hidden">
      <Sticker className="top-20 right-[2%]" rotate={-10} color="bg-brutal-white">
        <Rocket size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="bottom-40 left-[1%]" rotate={15} color="bg-brutal-green">
        <ExternalLink size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="top-1/2 left-[2%]" rotate={-8} color="bg-brutal-pink">
        <Github size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="bottom-[15%] right-[5%]" rotate={12} color="bg-brutal-blue">
        <Sparkles size={24} strokeWidth={3} />
      </Sticker>
      <div className="space-y-12">
        {/* Section Header */}
        <div className="border-5 border-brutal-black bg-brutal-pink p-4 inline-block">
          <h2 className="text-brutal-white font-space-grotesk font-bold uppercase">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <BrutalCard
              key={project.title}
              bgColor="white"
              rotate={project.rotate}
              className="flex flex-col h-full"
            >
              {/* Status & Title */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                <h3 className="font-bold text-2xl md:text-3xl uppercase leading-tight">
                  {project.title}
                </h3>
                <div
                  className={`
                    self-start md:self-auto
                    px-3 py-1 border-2 border-brutal-black font-bold text-xs uppercase whitespace-nowrap
                    ${project.status === 'live' ? 'bg-brutal-green' : 'bg-brutal-gray'}
                  `}
                >
                  {project.status === 'live' ? '🟢 LIVE' : '🟡 SOON'}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Impact Statement */}
              <div className="bg-brutal-black text-brutal-white p-3 mb-4 border-2 border-brutal-black">
                <p className="font-bold text-xs md:text-sm uppercase">
                  📊 IMPACT: {project.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="font-bold text-sm uppercase mb-3">🛠️ TECH:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <BrutalBadge key={tech.name} category={tech.category}>
                      {tech.name}
                    </BrutalBadge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.liveUrl && (
                  <BrutalButton variant="primary" href={project.liveUrl}>
                    🔗 LIVE DEMO
                  </BrutalButton>
                )}
                <BrutalButton variant="secondary" href={project.githubUrl}>
                  💻 GITHUB
                </BrutalButton>
              </div>
            </BrutalCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <BrutalCard bgColor="green" rotate={0} hover={false}>
            <p className="font-bold text-lg md:text-xl uppercase">
              More projects coming soon. Follow my journey on{' '}
              <a
                href="https://github.com/abeer-srivastava"
                className="underline hover:text-brutal-pink transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </BrutalCard>
        </div>
      </div>
    </BrutalSection>
  );
};

export default ProjectsSection;
