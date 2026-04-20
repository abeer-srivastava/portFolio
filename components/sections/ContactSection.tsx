'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, ArrowRight, Heart, Coffee, Globe } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      label: 'Email',
      icon: Mail,
      href: 'mailto:abeersrivastava16@gmail.com',
      color: 'text-accent-lime',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/abeer-srivastava-a90797290',
      color: 'text-accent-cyan',
    },
    {
      label: 'GitHub',
      icon: Github,
      href: 'https://github.com/abeer-srivastava',
      color: 'text-accent-pink',
    },
    {
      label: 'Resume',
      icon: FileText,
      href: 'https://drive.google.com/file/d/1PbRugJkvUtvQvP6vYG_cjAWaT8EM-b_x/view?usp=sharing',
      color: 'text-white',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-bg-primary border-t-2 border-white relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto text-center space-y-20 relative z-10">

        {/* Header */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-bg-secondary border-2 border-white px-6 py-2 shadow-[4px_4px_0px_white] -rotate-1">
              <span className="text-xs font-[var(--font-space-mono)] font-bold text-accent-lime uppercase tracking-[0.2em] flex items-center gap-3 justify-center">
                <span className="w-2.5 h-2.5 bg-accent-lime rounded-full animate-pulse" />
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-space-mono)] font-bold text-white uppercase tracking-tighter leading-none"
          >
            LET&apos;S <span className="text-white">BUILD</span>
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>SOMETHING</span>
            <br />
            <span className="text-accent-lime">SCALABLE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-primary text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80"
          >
            Whether you&apos;re looking for a backend engineer for your next big project or just want to
            talk systems architecture, my inbox is always open.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-bg-secondary border-2 border-white p-8 shadow-[4px_4px_0px_white] flex flex-col items-center justify-center gap-5 cursor-pointer hover:bg-accent-lime hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#00E5FF] transition-all duration-300"
            >
              <link.icon size={36} strokeWidth={3} className={`${link.color} group-hover:text-black group-hover:scale-110 transition-all duration-300`} />
              <span className="text-[10px] font-[var(--font-space-mono)] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black">
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
          transition={{ delay: 0.4 }}
          className="pt-10"
        >
          <a
            href="mailto:abeersrivastava16@gmail.com"
            className="group inline-flex items-center gap-4 bg-accent-lime text-black px-12 py-6 border-2 border-white font-[var(--font-space-mono)] font-bold text-xl uppercase tracking-widest shadow-[8px_8px_0px_white] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[12px_12px_0px_white] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200"
          >
            <Send size={24} strokeWidth={3} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            SEND A MESSAGE
            <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        {/* Footer Area */}
        <div className="pt-32 border-t-2 border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 bg-bg-secondary px-6 py-3 border-2 border-white shadow-[4px_4px_0px_white]">
              <span className="text-accent-lime font-[var(--font-space-mono)] font-bold text-2xl italic leading-none">&lt;/&gt;</span>
              <span className="text-white font-[var(--font-space-mono)] font-bold text-sm uppercase tracking-widest">
                ABEER.DEV // 2026
              </span>
            </div>

            <div className="flex items-center gap-3 text-white font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-widest bg-bg-secondary px-6 py-3 border-2 border-white shadow-[4px_4px_0px_white] group hover:bg-white hover:text-black transition-colors duration-300">
              BUILT WITH <Coffee size={16} strokeWidth={3} className="text-accent-pink fill-accent-pink group-hover:fill-black" /> AND <Heart size={16} strokeWidth={3} className="text-accent-pink fill-accent-pink group-hover:fill-black" />
            </div>

            <div className="text-black font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-widest bg-accent-lime px-5 py-2.5 border-2 border-white shadow-[4px_4px_0px_white] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-black rounded-full animate-pulse" />
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
