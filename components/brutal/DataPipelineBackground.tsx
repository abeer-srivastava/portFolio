'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BIT_COUNT = 12;

const DataBit = () => {
  const [mounted, setMounted] = useState(false);
  const [config, setCoords] = useState({ x: 0, y: 0, isHorizontal: true, duration: 8, delay: 0 });

  useEffect(() => {
    setMounted(true);
    const gridStep = 50; // Matches our new 50px grid
    const isHorizontal = Math.random() > 0.5;
    const startX = Math.floor(Math.random() * 30) * gridStep;
    const startY = Math.floor(Math.random() * 30) * gridStep;
    
    setCoords({
      x: startX,
      y: startY,
      isHorizontal,
      duration: Math.random() * 5 + 5, // Faster
      delay: Math.random() * 10
    });
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        x: config.isHorizontal ? [-200, 2200] : config.x,
        y: config.isHorizontal ? config.y : [-200, 2200],
      }}
      transition={{ 
        duration: config.duration, 
        repeat: Infinity, 
        ease: "linear",
        delay: config.delay 
      }}
      className={`absolute z-[1] pointer-events-none ${
        config.isHorizontal ? 'w-24 h-[1px]' : 'w-[1px] h-24'
      } bg-gradient-to-r from-transparent via-brutal-coral to-transparent shadow-[0_0_15px_var(--color-brutal-coral)]`}
      style={{ 
        left: config.isHorizontal ? 0 : config.x, 
        top: config.isHorizontal ? config.y : 0 
      }}
    />
  );
};

const DataPipelineBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {[...Array(BIT_COUNT)].map((_, i) => (
        <DataBit key={i} />
      ))}
    </div>
  );
};

export default DataPipelineBackground;
