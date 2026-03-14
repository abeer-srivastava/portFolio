import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number; // Rotation in degrees (-2 to 2)
  bgColor?: 'bg-brutal-white' | 'bg-brutal-card' | 'bg-brutal-green' | 'bg-brutal-blue' | 'bg-brutal-bg' | string;
  hover?: boolean; // Enable hover lift effect
  shadowColor?: string;
}

const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  className = '',
  rotate = 0,
  bgColor = 'bg-brutal-card',
  hover = true,
  shadowColor = 'shadow-brutal',
}) => {
  const hoverStyles = hover
    ? `hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg`
    : '';

  return (
    <div
      className={`
        ${bgColor}
        border-4 border-brutal-black
        ${shadowColor}
        p-6 md:p-8
        transition-all duration-200
        ${hoverStyles}
        ${className}
      `}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default BrutalCard;
