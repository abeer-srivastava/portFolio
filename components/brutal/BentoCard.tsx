'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string; // e.g., 'col-span-12 md:col-span-6'
  rowSpan?: string; // e.g., 'row-span-1 md:row-span-2'
  hoverEffect?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  colSpan = 'col-span-12',
  rowSpan = '',
  hoverEffect = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`bento-card relative overflow-hidden p-6 ${colSpan} ${rowSpan} ${className} ${
        hoverEffect ? 'hover:z-10' : ''
      }`}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 pointer-events-none" />
      
      {children}
    </motion.div>
  );
};

export default BentoCard;
