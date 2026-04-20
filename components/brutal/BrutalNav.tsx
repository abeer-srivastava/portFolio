'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const BrutalNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['contact', 'projects', 'skills', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            className="font-[var(--font-space-mono)] font-bold text-xl uppercase tracking-tighter flex items-center gap-2 group"
          >
            <span className="text-accent-violet italic">&lt;/&gt;</span>
            <span className="text-white group-hover:text-accent-violet transition-colors">ABEER.DEV</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 border border-white/10 font-[var(--font-space-mono)] font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:border-accent-violet ${
                    isActive
                      ? 'bg-accent-violet text-white border-accent-violet'
                      : 'bg-transparent text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-transparent border border-white/10 p-2 text-white hover:border-accent-violet transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Scroll Progress Indicator Line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[1px] bg-accent-violet"
          style={{ scaleX: scrolled ? 1 : 0, originX: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Mobile Menu — Animated */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-bg-primary border-t border-white/10 mt-4"
            >
              <div className="flex flex-col gap-3 py-6 px-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-3 border border-white/10 font-[var(--font-space-mono)] font-bold uppercase text-sm transition-all duration-200 ${
                        activeSection === item.href.replace('#', '')
                          ? 'bg-accent-violet text-white border-accent-violet'
                          : 'bg-transparent text-white/70'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default BrutalNav;
