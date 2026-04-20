'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cpu } from 'lucide-react';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-bg-secondary border-2 border-white p-8 shadow-[6px_6px_0px_rgba(255,255,255,1)] flex flex-col h-full cursor-default group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#C8F135] hover:border-accent-lime transition-all duration-300"
    >
      <div className="flex items-center gap-5 mb-8">
        <div className="bg-accent-lime p-3.5 border-2 border-white shadow-[4px_4px_0px_white] group-hover:rotate-12 transition-transform duration-300">
          <Icon size={32} strokeWidth={3} className="text-black" />
        </div>
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-widest">
            {title}
          </h3>
          <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent-lime origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </div>

      <p className="text-text-primary text-base md:text-lg font-medium leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-auto">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            className="bg-transparent text-white px-4 py-2 font-[var(--font-space-mono)] font-bold text-xs uppercase border-2 border-white/20 hover:border-accent-lime hover:bg-accent-lime hover:text-black hover:shadow-[3px_3px_0px_white] transition-all duration-200 cursor-default"
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
    <section id="skills" className="py-32 px-6 bg-bg-primary border-t-2 border-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 bg-bg-secondary text-accent-lime px-6 py-3 border-2 border-white shadow-[4px_4px_0px_white] font-[var(--font-space-mono)] font-bold text-lg uppercase tracking-widest -rotate-1 hover:rotate-0 transition-all duration-300">
              <Cpu size={24} strokeWidth={3} />
              ~/stack.json
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter leading-none"
          >
            MY{' '}
            <span className="text-accent-lime">TECH</span>{' '}
            STACK
          </motion.h2>
          
          <div className="w-full h-px bg-white/10 mt-10 border-b border-dashed border-white/20" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {categories.map((category, i) => (
            <SkillCard key={category.title} {...category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
