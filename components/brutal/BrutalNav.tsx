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
      className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-brutal-black transition-colors duration-200 ${
        scrolled ? 'bg-brutal-yellow' : 'bg-brutal-yellow/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            className="bg-brutal-black text-brutal-green px-4 py-2 border-[3px] border-brutal-black shadow-brutal-sm font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-tighter hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
          >
            <span className="italic">&lt;/&gt;</span> ABEER.DEV
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-xs uppercase tracking-widest transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                    isActive
                      ? 'bg-brutal-black text-brutal-green shadow-brutal-sm'
                      : 'bg-brutal-white text-brutal-black shadow-brutal-sm'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-[4px] bg-brutal-green border border-brutal-black"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-brutal-white border-[3px] border-brutal-black p-2 shadow-brutal-sm hover:bg-brutal-pink transition-colors active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} strokeWidth={3} className="text-brutal-black" />
            ) : (
              <Menu size={24} strokeWidth={3} className="text-brutal-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu — Animated */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-3 pt-4 pb-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-3 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black uppercase text-sm shadow-brutal-sm transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal ${
                        activeSection === item.href.replace('#', '')
                          ? 'bg-brutal-black text-brutal-green'
                          : 'bg-brutal-white text-brutal-black'
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
