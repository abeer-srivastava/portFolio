'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cpu } from 'lucide-react';

const cardColors = [
  { bg: 'bg-brutal-blue', accent: 'bg-brutal-pink' },
  { bg: 'bg-brutal-pink', accent: 'bg-brutal-yellow' },
  { bg: 'bg-brutal-green', accent: 'bg-brutal-blue' },
];

const SkillCard = ({
  title,
  icon: Icon,
  description,
  tags,
  index,
}: {
  title: string;
  icon: React.ElementType;
  description: string;
  tags: string[];
  index: number;
}) => {
  const rotations = [-1.5, 1, -0.5];
  const colors = cardColors[index % cardColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotations[index] - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.2, 1, 0.2, 1] as [number, number, number, number] }}
      whileHover={{ y: -8, rotate: 0 }}
      className={`${colors.bg} border-[4px] border-brutal-black p-8 shadow-brutal flex flex-col h-full cursor-default transition-shadow duration-150 hover:shadow-brutal-lg`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-brutal-black p-3.5 border-[2px] border-brutal-black shadow-brutal-sm">
          <Icon size={28} strokeWidth={3} className="text-brutal-green" />
        </div>
        <h3 className="text-2xl md:text-3xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter">
          {title}
        </h3>
      </div>

      <p className="text-brutal-black text-base md:text-lg font-bold leading-snug mb-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + i * 0.04 }}
            className="bg-brutal-black text-brutal-white px-3 py-1.5 font-[var(--font-jetbrains-mono)] font-black text-[11px] uppercase border-[2px] border-brutal-black shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const categories = [
    {
      title: 'Languages',
      icon: Code2,
      description: 'Building robust, scalable backend services with modern languages and strong typing.',
      tags: ['Python', 'Node.js', 'Go', 'TypeScript', 'C++', 'SQL'],
    },
    {
      title: 'Infrastructure',
      icon: Server,
      description: 'Deploying and scaling cloud-native systems using industry-standard orchestration and automation.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'],
    },
    {
      title: 'Databases',
      icon: Database,
      description: 'Designing efficient data architectures for high-performance applications and real-time systems.',
      tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-brutal-yellow brutal-section-border relative overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-brutal-green text-brutal-black px-6 py-2 border-[4px] border-brutal-black shadow-brutal font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-widest rotate-1 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-150 cursor-default">
              <Cpu size={20} strokeWidth={3} />
              WHAT I WORK WITH
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-none"
          >
            MY{' '}
            <span className="relative inline-block">
              <span className="relative z-10">TECH</span>
              <span className="absolute -bottom-1 left-0 w-full h-[20%] bg-brutal-pink m-1" style={{ zIndex: -1 }} />
            </span>{' '}
            STACK
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {categories.map((category, i) => (
            <SkillCard key={category.title} {...category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
