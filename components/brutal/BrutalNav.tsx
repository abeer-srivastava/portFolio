'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const BrutalNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-black border-b-5 border-brutal-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="#home" 
            className="text-brutal-white font-bold text-xl md:text-2xl uppercase tracking-tight hover:text-brutal-lime transition-colors duration-brutal"
          >
            ABEER.DEV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  px-4 py-2
                  text-brutal-white font-bold uppercase text-sm
                  hover:bg-brutal-lime hover:text-brutal-black
                  border-2 border-transparent hover:border-brutal-white
                  transition-all duration-brutal
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brutal-white p-2 border-3 border-brutal-white hover:bg-brutal-lime hover:text-brutal-black transition-all duration-brutal"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-3 border-brutal-white py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  block px-4 py-3
                  text-brutal-white font-bold uppercase text-sm
                  hover:bg-brutal-lime hover:text-brutal-black
                  border-b-2 border-brutal-white/20
                  transition-all duration-brutal
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default BrutalNav;
