import React from 'react';

interface BrutalBadgeProps {
  children: React.ReactNode;
  category?: 'frontend' | 'backend' | 'cloud' | 'language' | 'default';
  className?: string;
}

const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  category = 'default',
  className = '',
}) => {
  const categoryColors = {
    frontend: 'bg-brutal-lime text-brutal-black border-brutal-black',
    backend: 'bg-brutal-blue text-brutal-black border-brutal-black',
    cloud: 'bg-brutal-pink text-brutal-white border-brutal-black',
    language: 'bg-brutal-white text-brutal-black border-brutal-black',
    default: 'bg-brutal-gray text-brutal-black border-brutal-black',
  };

  return (
    <span
      className={`
        inline-block
        px-3 py-1.5
        text-xs md:text-sm
        font-bold uppercase
        border-2
        ${categoryColors[category]}
        transition-all duration-brutal ease-brutal
        hover:-translate-y-0.5
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default BrutalBadge;
