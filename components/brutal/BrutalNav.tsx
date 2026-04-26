'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { useDebug } from '../providers/DebugProvider';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const BrutalNav = () => {
  const { isDebugMode, setIsDebugMode, addLog, ping } = useDebug();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-brutal-black transition-colors duration-200 ${
        scrolled ? 'bg-brutal-white' : 'bg-brutal-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-brutal-coral z-[60]" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            className="bg-brutal-white text-brutal-black px-4 py-2 border-[3px] border-brutal-black shadow-brutal-sm font-[var(--font-jetbrains-mono)] font-black text-lg uppercase tracking-tighter hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2"
          >
            ABEER.DEV
          </Link>

          {/* Right Side Items */}
          <div className="flex items-center gap-3">
            {/* Live Metrics */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 border-[3px] border-brutal-black bg-brutal-white font-[var(--font-jetbrains-mono)] text-[10px] font-black uppercase shadow-brutal-sm">
                <span className="text-brutal-coral">TIME:</span> {time}
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border-[3px] border-brutal-black bg-brutal-white font-[var(--font-jetbrains-mono)] text-[10px] font-black uppercase shadow-brutal-sm">
                <span className="text-brutal-coral">PING:</span> {ping}ms
              </div>
            </div>

           
            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 border-[3px] border-brutal-black font-[var(--font-jetbrains-mono)] font-black text-xs uppercase tracking-widest transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                    isActive
                    ? 'bg-brutal-yellow text-brutal-black shadow-brutal-sm'
                    : 'bg-brutal-white text-brutal-black shadow-brutal-sm'
                  }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
              {/* Debug Toggle */}
              <button
                onClick={() => {
                const newState = !isDebugMode;
                setIsDebugMode(newState);
                addLog(newState ? 'DEBUG: Kernel introspection active.' : 'INFO: Diagnostic session closed.');
              }}
              className={`w-10 h-10 border-[3px] border-brutal-black flex items-center justify-center shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 ${
                isDebugMode ? 'bg-brutal-yellow text-brutal-black' : 'bg-brutal-white text-brutal-black'
              }`}
              title="Toggle Debug Mode"
            >
              <Terminal size={20} strokeWidth={3} />
            </button>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden bg-brutal-white border-[3px] border-brutal-black p-2 shadow-brutal-sm hover:bg-brutal-yellow transition-colors active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={3} className="text-brutal-black" />
              ) : (
                <Menu size={24} strokeWidth={3} className="text-brutal-black" />
              )}
            </button>
          </div>
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
                          ? 'bg-brutal-yellow text-brutal-black'
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
