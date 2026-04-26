'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, ArrowRight, Heart, Coffee } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      label: 'Email',
      icon: Mail,
      href: 'mailto:abeersrivastava16@gmail.com',
      color: 'text-brutal-coral',
      hoverBg: 'hover:bg-brutal-coral',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/abeer-srivastava-a90797290',
      color: 'text-brutal-yellow',
      hoverBg: 'hover:bg-brutal-yellow',
    },
    {
      label: 'GitHub',
      icon: Github,
      href: 'https://github.com/abeer-srivastava',
      color: 'text-brutal-coral',
      hoverBg: 'hover:bg-brutal-coral',
    },
    {
      label: 'Resume',
      icon: FileText,
      href: 'https://drive.google.com/file/d/1PbRugJkvUtvQvP6vYG_cjAWaT8EM-b_x/view?usp=sharing',
      color: 'text-brutal-yellow',
      hoverBg: 'hover:bg-brutal-yellow',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-brutal-bg brutal-section-border relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 brutal-dots opacity-[0.06] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-14 relative z-10">

        {/* Header */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block"
          >
            <div className="bg-brutal-black border-[4px] border-brutal-black px-5 py-2 shadow-brutal-lg">
              <span className="text-xs font-[var(--font-jetbrains-mono)] font-black text-brutal-yellow uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-brutal-yellow rounded-full animate-pulse" />
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-[var(--font-jetbrains-mono)] font-black text-brutal-black uppercase tracking-tighter leading-tight"
          >
            LET&apos;S{' '}
            <span className="inline-block bg-brutal-coral text-brutal-black px-3 py-1 border-[3px] border-brutal-black shadow-brutal-sm -rotate-1">
              BUILD
            </span>
            <br />
            <span className="inline-block bg-brutal-yellow text-brutal-black px-3 py-1 border-[3px] border-brutal-black shadow-brutal-sm rotate-1 mt-2">
              SOMETHING
            </span>{' '}
            SCALABLE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brutal-black text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re looking for a backend engineer for your next big project or just want to
            talk systems architecture, my inbox is always open.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200, damping: 18 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`block bg-brutal-white border-[4px] border-brutal-black p-6 md:p-8 shadow-brutal flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-200 ${link.hoverBg} group`}
            >
              <link.icon size={32} strokeWidth={3} className={`${link.color} group-hover:text-brutal-black group-hover:scale-110 transition-all duration-200`} />
              <span className="text-[10px] font-[var(--font-jetbrains-mono)] font-black uppercase tracking-widest text-brutal-black">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <a
            href="mailto:abeersrivastava16@gmail.com"
            className="inline-flex items-center gap-3 bg-brutal-black text-brutal-white px-10 py-5 border-[4px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-wider shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
          >
            <Send size={22} strokeWidth={3} className="text-brutal-yellow" />
            SEND A MESSAGE
            <ArrowRight size={22} strokeWidth={3} className="group-hover:translate-x-2 transition-transform text-brutal-coral" />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="pt-16 border-t-[4px] border-brutal-black">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 bg-brutal-black px-5 py-2.5 border-[3px] border-brutal-black shadow-brutal-sm">
              <span className="text-brutal-yellow font-[var(--font-jetbrains-mono)] font-black text-xl italic">&lt;/&gt;</span>
              <span className="text-brutal-white font-[var(--font-jetbrains-mono)] font-bold text-xs uppercase tracking-wider">
                ABEER.DEV // 2026
              </span>
            </div>

            <div className="flex items-center gap-2 text-brutal-black font-[var(--font-jetbrains-mono)] font-black text-[11px] uppercase tracking-wider bg-brutal-white px-4 py-2 border-[3px] border-brutal-black shadow-brutal-sm">
              BUILT WITH <Coffee size={14} strokeWidth={3} className="text-brutal-coral" /> AND <Heart size={14} strokeWidth={3} className="text-brutal-coral" />
            </div>

            <div className="text-brutal-black font-[var(--font-jetbrains-mono)] font-black text-[10px] uppercase tracking-wider bg-brutal-yellow px-3 py-1.5 border-[2px] border-brutal-black shadow-brutal-sm flex items-center gap-1.5">
              <span className="w-2 h-2 bg-brutal-black rounded-full animate-pulse" />
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
