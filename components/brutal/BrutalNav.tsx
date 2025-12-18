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
    <nav className="fixed md:fixed  top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl bg-white/70 backdrop-blur-sm border border-black/20 rounded-lg shadow-lg">
      <div
        className="
          bg-brutal-yellow
          border-4 border-brutal-black
          shadow-[6px_6px_0_0_#000]
          px-4 md:px-6
        "
      >
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            className="
              bg-brutal-black text-brutal-yellow
              px-3 py-2
              font-extrabold uppercase tracking-tight
              text-sm md:text-base
              border-3 border-brutal-black
              shadow-[3px_3px_0_0_#000]
              transition-all duration-150
              text-white
            "
          >
            imAbeer.dev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative
                  px-4 py-2
                  font-bold uppercase text-sm
                  text-brutal-black
                  border-3 border-brutal-black
                  bg-brutal-white
                  shadow-[3px_3px_0_0_#000]
                  hover:bg-brutal-lime
                  hover:-translate-x-[2px] hover:-translate-y-[2px]
                  hover:shadow-[5px_5px_0_0_#000]
                  active:translate-x-[1px] active:translate-y-[1px]
                  active:shadow-[1px_1px_0_0_#000]
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
              hover:bg-brutal-lime
              hover:-translate-x-[2px] hover:-translate-y-[2px]
              hover:shadow-[5px_5px_0_0_#000]
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
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
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
                  shadow-[3px_3px_0_0_#000]
                  hover:bg-brutal-lime
                  hover:-translate-x-[2px] hover:-translate-y-[2px]
                  hover:shadow-[5px_5px_0_0_#000]
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
