'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Server, Code2, Globe, Key, Link as LinkIcon } from 'lucide-react';

const TableHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="bg-brutal-black text-brutal-white px-4 py-2.5 border-b-[4px] border-brutal-black flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Icon size={16} className="text-brutal-yellow" strokeWidth={3} />
      <span className="font-[var(--font-jetbrains-mono)] font-black text-xs uppercase tracking-widest">
        {title}
      </span>
    </div>
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-brutal-coral rounded-full" />
      <div className="w-2 h-2 bg-brutal-yellow rounded-full" />
    </div>
  </div>
);

const SchemaTable = ({ 
  title, 
  icon, 
  fields, 
  delay = 0,
  rotation = 0,
  className = ""
}: { 
  title: string, 
  icon: any, 
  fields: { name: string, type: string, isPK?: boolean, isFK?: boolean }[], 
  delay?: number,
  rotation?: number,
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    whileHover={{ y: -5, rotate: 0, transition: { duration: 0.1 } }}
    style={{ rotate: `${rotation}deg` }}
    className={`bg-brutal-white border-[4px] border-brutal-black shadow-brutal hover:shadow-brutal-lg flex flex-col w-full md:w-80 overflow-hidden z-10 transition-all ${className}`}
  >
    <TableHeader title={`TBL_${title}`} icon={icon} />
    <div className="divide-y-[2px] divide-brutal-black/5">
      {fields.map((field, i) => (
        <div 
          key={field.name} 
          className="px-6 py-4 flex items-center justify-between group hover:bg-brutal-yellow/5 transition-colors relative"
        >
          <div className="flex items-center gap-3">
            {field.isPK && <Key size={12} className="text-brutal-coral" strokeWidth={3} />}
            {field.isFK && <LinkIcon size={12} className="text-brutal-yellow" strokeWidth={3} />}
            <span className="font-[var(--font-jetbrains-mono)] font-black text-sm text-brutal-black uppercase tracking-tight group-hover:text-brutal-coral transition-colors">
              {field.name}
            </span>
          </div>
          <span className="text-[11px] font-bold text-brutal-black/40 font-[var(--font-jetbrains-mono)] uppercase italic">
            {field.type}
          </span>
        </div>
      ))}
    </div>
    {/* Table Footer */}
    <div className="bg-brutal-gray/20 px-6 py-2 border-t-[2px] border-brutal-black/10 flex justify-between items-center">
       <span className="text-[10px] font-black text-brutal-black/30 tracking-tighter uppercase">ENGINE=InnoDB</span>
       <span className="text-[10px] font-black text-brutal-black/30 tracking-tighter uppercase">UTF8MB4</span>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-brutal-bg brutal-section-border relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
         <Database size={800} className="text-brutal-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-brutal-coral text-brutal-black px-8 py-3 border-[4px] border-brutal-black shadow-brutal font-[var(--font-jetbrains-mono)] font-black text-xl uppercase tracking-widest -rotate-1">
              <Cpu size={24} strokeWidth={3} />
              SYSTEM ENTITIES
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-none"
          >
            DATA{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brutal-coral">SCHEMA</span>
              <span className="absolute -bottom-2 left-0 w-full h-[25%] bg-brutal-yellow m-1" style={{ zIndex: -1 }} />
            </span>
          </motion.h2>
        </div>

        {/* ERD Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Connector Lines (SVG) - More deliberate routing */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block opacity-[0.15]" style={{ zIndex: 0 }}>
            {/* Top row connectors */}
            <path d="M 280,150 L 340,150" stroke="black" strokeWidth="3" fill="none" strokeDasharray="10,5" />
            <path d="M 580,150 L 640,150" stroke="black" strokeWidth="3" fill="none" strokeDasharray="10,5" />
            <path d="M 880,150 L 940,150" stroke="black" strokeWidth="3" fill="none" strokeDasharray="10,5" />
          </svg>

          <SchemaTable 
            title="LANGUAGES" 
            icon={Code2} 
            className="border-brutal-black shadow-[8px_8px_0px_var(--color-brutal-blue)]"
            fields={[
              { name: 'Python', type: 'Expert', isPK: true },
              { name: 'Node.js', type: 'Advanced', isPK: true },
              { name: 'Go', type: 'Intermediate', isFK: true },
              { name: 'TypeScript', type: 'Advanced' },
              { name: 'C++', type: 'Academic' },
              { name: 'SQL', type: 'Fluent', isFK: true }
            ]} 
            delay={0.1}
            rotation={-0.5}
          />

          <SchemaTable 
            title="INFRA" 
            icon={Server} 
            className="border-brutal-black shadow-[8px_8px_0px_var(--color-brutal-yellow)]"
            fields={[
              { name: 'AWS', type: 'Cloud', isPK: true },
              { name: 'Docker', type: 'Container', isPK: true },
              { name: 'Kubernetes', type: 'Orchestrator' },
              { name: 'Terraform', type: 'IaC', isFK: true },
              { name: 'CI/CD', type: 'Pipeline' },
              { name: 'Linux', type: 'Kernel', isFK: true }
            ]} 
            delay={0.2}
            rotation={0.8}
          />

          <SchemaTable 
            title="STORAGE" 
            icon={Database} 
            className="border-brutal-black shadow-[8px_8px_0px_var(--color-brutal-purple)]"
            fields={[
              { name: 'PostgreSQL', type: 'Relational', isPK: true },
              { name: 'MongoDB', type: 'NoSQL', isPK: true },
              { name: 'Redis', type: 'Cache' },
              { name: 'Elasticsearch', type: 'Search', isFK: true },
              { name: 'DynamoDB', type: 'Serverless' },
              { name: 'Prisma', type: 'ORM', isFK: true }
            ]} 
            delay={0.3}
            rotation={-0.3}
          />

          <SchemaTable 
            title="ARCH" 
            icon={Globe} 
            className="border-brutal-black shadow-[8px_8px_0px_var(--color-brutal-coral)]"
            fields={[
              { name: 'Microservices', type: 'Pattern', isPK: true },
              { name: 'REST APIs', type: 'Standard', isPK: true },
              { name: 'GraphQL', type: 'Query' },
              { name: 'WebSockets', type: 'Realtime', isFK: true },
              { name: 'gRPC', type: 'RPC' },
              { name: 'Kafka', type: 'Events', isFK: true }
            ]} 
            delay={0.4}
            rotation={0.5}
          />
        </div>

        {/* Documentation Legend */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col md:flex-row justify-center items-center gap-12 border-t-[4px] border-brutal-black/10 pt-12"
        >
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-brutal-black bg-brutal-coral flex items-center justify-center">
                <Key size={10} className="text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brutal-black/60">Primary Skill</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-brutal-black bg-brutal-yellow flex items-center justify-center">
                <LinkIcon size={10} className="text-black" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brutal-black/60">Integrates With</span>
            </div>
          </div>
          <div className="bg-brutal-black text-brutal-white px-5 py-2 font-[var(--font-jetbrains-mono)] text-[9px] uppercase tracking-[0.25em] shadow-brutal-sm">
            Architecture Map v2.0 // Relationship=Many-To-Many
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
