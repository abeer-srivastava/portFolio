'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const BrutalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-brutal-black bg-brutal-yellow">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="
              bg-brutal-black text-brutal-white
              px-4 py-2
              font-extrabold uppercase tracking-tight
              text-lg md:text-xl
              border-3 border-brutal-black
              shadow-[4px_4px_0_0_#000]
              hover:translate-x-[2px] hover:translate-y-[2px]
              hover:shadow-[2px_2px_0_0_#000]
              transition-all duration-150
            "
          >
            imAbeer.dev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  px-4 py-2
                  font-bold uppercase text-sm
                  text-brutal-black
                  border-3 border-brutal-black
                  bg-brutal-white
                  shadow-[4px_4px_0_0_#000]
                  hover:bg-brutal-green
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  hover:shadow-[2px_2px_0_0_#000]
                  transition-all duration-150
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              bg-brutal-white
              border-3 border-brutal-black
              p-2
              shadow-[3px_3px_0_0_#000]
              hover:bg-brutal-green
              hover:translate-x-[1px] hover:translate-y-[1px]
              hover:shadow-[2px_2px_0_0_#000]
              transition-all duration-150
            "
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brutal-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  bg-brutal-white
                  border-3 border-brutal-black
                  px-4 py-3
                  font-bold uppercase text-sm
                  shadow-[4px_4px_0_0_#000]
                  hover:bg-brutal-green
                  transition-all duration-150
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
