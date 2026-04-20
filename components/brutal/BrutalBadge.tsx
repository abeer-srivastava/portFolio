import React from 'react';

interface BrutalBadgeProps {
  children: React.ReactNode;
  category?: 'frontend' | 'backend' | 'cloud' | 'language' | 'yellow' | 'default';
  className?: string;
}

const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  category = 'default',
  className = '',
}) => {
  const categoryColors = {
    frontend: 'bg-accent-lime text-black border-white',
    backend: 'bg-accent-cyan text-black border-white',
    cloud: 'bg-accent-pink text-white border-white',
    language: 'bg-white text-black border-white',
    yellow: 'bg-accent-lime text-black border-white',
    default: 'bg-bg-secondary text-white border-white',
  };

  return (
    <span
      className={`
        inline-block
        px-3 py-1.5
        text-xs md:text-sm
        font-bold uppercase
        border-2
        shadow-[3px_3px_0_0_white]
        rotate-[-1deg]
        ${categoryColors[category]}
        transition-all duration-300
        hover:-translate-y-1 hover:rotate-0
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default BrutalBadge;
