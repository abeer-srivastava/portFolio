'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TerminalNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-terminal-bg/80 backdrop-blur-md border-b border-terminal-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-terminal-green font-jetbrains-mono font-bold text-xl">&lt;/&gt;</span>
          <span className="text-terminal-text font-jetbrains-mono font-bold text-lg hidden sm:block">
            Abeer.dev
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-terminal-muted hover:text-terminal-green transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="bg-terminal-green px-4 py-1.5 rounded-full terminal-glow-green">
            <span className="text-terminal-bg font-jetbrains-mono font-bold text-xs">
              ABEER SRIVASTAVA
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TerminalNav;
