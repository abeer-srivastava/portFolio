'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 40; // Pixel size of each grid cell

const GlitchCell = ({ x, y }: { x: number; y: number }) => {
  const [glitchState, setGlitchState] = useState<'none' | 'hex' | 'block' | 'err'>('none');
  const [content, setContent] = useState('');

  useEffect(() => {
    const triggerGlitch = () => {
      const rand = Math.random();
      if (rand > 0.98) {
        setGlitchState('block');
      } else if (rand > 0.95) {
        setGlitchState('err');
        setContent('ERR');
      } else if (rand > 0.92) {
        setGlitchState('hex');
        setContent(Math.floor(Math.random() * 255).toString(16).toUpperCase().padStart(2, '0'));
      } else {
        setGlitchState('none');
      }
    };

    const interval = setInterval(triggerGlitch, Math.random() * 2000 + 500);
    return () => clearInterval(interval);
  }, []);

  if (glitchState === 'none') return null;

  return (
    <div 
      className={`absolute flex items-center justify-center font-[var(--font-jetbrains-mono)] text-[8px] font-bold overflow-hidden pointer-events-none transition-colors duration-100`}
      style={{
        left: x * GRID_SIZE,
        top: y * GRID_SIZE,
        width: GRID_SIZE,
        height: GRID_SIZE,
        backgroundColor: glitchState === 'block' ? 'var(--color-brutal-coral)' : 'transparent',
        color: glitchState === 'err' ? 'var(--color-brutal-coral)' : 'var(--color-brutal-yellow)',
        zIndex: 5,
        opacity: glitchState === 'block' ? 0.3 : 0.6
      }}
    >
      {(glitchState === 'hex' || glitchState === 'err') && content}
    </div>
  );
};

const GlitchGridBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: Math.ceil(window.innerWidth / GRID_SIZE),
        height: Math.ceil(window.innerHeight / GRID_SIZE)
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const cells = useMemo(() => {
    const totalCells = dimensions.width * dimensions.height;
    // Limit cells to prevent performance issues, focus on random distribution
    const cellCount = Math.min(totalCells, 150); 
    return Array.from({ length: cellCount }).map((_, i) => ({
      id: i,
      x: Math.floor(Math.random() * dimensions.width),
      y: Math.floor(Math.random() * dimensions.height),
    }));
  }, [dimensions]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1] opacity-40">
      {cells.map((cell) => (
        <GlitchCell key={cell.id} x={cell.x} y={cell.y} />
      ))}
    </div>
  );
};

export default GlitchGridBackground;
