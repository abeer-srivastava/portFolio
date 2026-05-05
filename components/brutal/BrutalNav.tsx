'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, AlertTriangle, Music, Cpu, Clock } from 'lucide-react';
import { useDebug } from '../providers/DebugProvider';
import { useTheme } from 'next-themes';

const navItems = [
  { label: 'About', href: '#about', shortcut: '01' },
  { label: 'Skills', href: '#skills', shortcut: '02' },
  { label: 'Projects', href: '#projects', shortcut: '03' },
  { label: 'Contact', href: '#contact', shortcut: '04' },
];

const BrutalNav = () => {
  const { isDebugMode, setIsDebugMode, addLog, ping } = useDebug();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      const sections = ['contact', 'projects', 'skills', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
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

  const navBaseClass = isDebugMode 
    ? 'bg-system-black border-[var(--color-override)] text-[var(--color-override)]' 
    : 'bg-brutal-white border-brutal-black text-brutal-black';

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className={`max-w-[1400px] mx-auto border-[4px] shadow-brutal pointer-events-auto transition-all duration-300 flex flex-col md:flex-row items-stretch overflow-hidden ${navBaseClass}`}>
        
        {/* Left: Brand & System Meta */}
        <div className="flex items-stretch">
          <Link
            href="#home"
            className={`px-6 py-3 border-r-[4px] border-brutal-black hover:bg-brutal-yellow transition-colors group flex flex-col items-start justify-center leading-none ${isDebugMode ? 'border-r-[var(--color-override)] hover:bg-[var(--color-override)]/20' : ''} ${activeSection === 'home' ? 'bg-brutal-yellow/20' : ''}`}
          >
            <span className="font-black text-xl uppercase tracking-tighter">Abeer.Dev</span>
            <span className="text-[7px] font-black uppercase tracking-[0.3em] mt-1 opacity-60">Core_v2.0.7</span>
          </Link>
          
          <div className="hidden lg:flex flex-col px-4 font-[var(--font-jetbrains-mono)] text-[9px] font-black uppercase opacity-60 border-r-[4px] border-brutal-black h-full justify-center gap-1">
            <div className="flex items-center gap-2">
              <Cpu size={10} />
              <span>{ping}ms_LATENCY</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={10} />
              <span>{time}_GMT</span>
            </div>
          </div>
        </div>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex flex-1 items-stretch">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 justify-center px-6 py-3 font-black text-xs uppercase ${index === 0 ? 'border-l-[4px] border-brutal-black' : ''} border-r-[4px] border-brutal-black hover:bg-brutal-yellow transition-all relative group flex items-center ${isDebugMode ? 'border-r-[var(--color-override)] hover:bg-[var(--color-override)]/10' : ''} ${isActive ? 'bg-brutal-yellow' : ''}`}
              >
                <span className="absolute top-1 right-2 text-[8px] opacity-30">{item.shortcut}</span>
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-active-accent"
                    className={`absolute bottom-0 left-0 right-0 h-1 ${isDebugMode ? 'bg-system-black' : 'bg-brutal-black'}`} 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls & Progress */}
        <div className="flex items-stretch">
          {/* Progress Bar (Hidden on Mobile) */}
          <div className="hidden xl:flex items-center px-6 border-l-[4px] border-brutal-black h-full bg-brutal-gray/10">
            <div className="w-24 h-2 border-[2px] border-brutal-black relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-brutal-yellow"
                style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
              />
            </div>
            <span className="ml-3 font-[var(--font-jetbrains-mono)] text-[9px] font-black">{Math.round(scrollProgress)}%</span>
          </div>

          <div className="flex border-l-[4px] border-brutal-black h-full">
             {/* Music Toggle */}
             <button
              onClick={() => window.toggleMusicSpotlight?.()}
              className="px-4 py-3 border-r-[4px] border-brutal-black hover:bg-brutal-yellow transition-all flex items-center justify-center"
              title="Toggle Music"
            >
              <Music size={18} strokeWidth={3} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-4 py-3 border-r-[4px] border-brutal-black hover:bg-brutal-yellow transition-all flex items-center justify-center"
            >
              {mounted && theme === 'dark' ? <Sun size={18} strokeWidth={3} /> : <Moon size={18} strokeWidth={3} />}
            </button>

            {/* System Override */}
            <button
              onClick={() => {
                const newState = !isDebugMode;
                setIsDebugMode(newState);
                addLog(newState ? 'CRITICAL: System integrity compromised.' : 'INFO: Integrity restored.');
              }}
              className={`px-6 py-3 font-black text-xs uppercase transition-all flex items-center justify-center ${
                isDebugMode ? 'bg-[var(--color-override)] text-system-black' : 'bg-brutal-coral text-system-white hover:bg-brutal-coral/90'
              }`}
            >
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} strokeWidth={3} />
                <span className="hidden sm:inline">Override</span>
              </div>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden px-4 py-3 hover:bg-brutal-yellow transition-all flex items-center justify-center"
            >
              {isOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-[110] p-6 flex flex-col gap-6 pointer-events-auto md:hidden ${isDebugMode ? 'bg-system-black text-[var(--color-override)]' : 'bg-brutal-white text-brutal-black'}`}
          >
            <div className="flex justify-between items-center border-b-[4px] border-brutal-black pb-6">
              <span className="font-black text-2xl uppercase tracking-tighter">Menu_System</span>
              <button 
                onClick={() => setIsOpen(false)}
                className={`w-12 h-12 border-[4px] border-brutal-black flex items-center justify-center ${navBaseClass}`}
              >
                <X size={32} strokeWidth={4} />
              </button>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full p-6 border-[4px] border-brutal-black font-black uppercase text-3xl shadow-brutal hover:bg-brutal-yellow transition-colors ${
                      activeSection === item.href.replace('#', '') ? 'bg-brutal-yellow' : 'bg-brutal-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto border-t-[4px] border-brutal-black pt-6 flex flex-col gap-2 font-[var(--font-jetbrains-mono)] text-xs font-black uppercase opacity-60">
              <div className="flex justify-between">
                <span>System_Time:</span>
                <span>{time}</span>
              </div>
              <div className="flex justify-between">
                <span>Kernel_Version:</span>
                <span>v2.0.7-R</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default BrutalNav;
