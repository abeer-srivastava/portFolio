import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number; // Rotation in degrees (-2 to 2)
  bgColor?: 'white' | 'yellow' | 'green' | 'pink' | 'blue' | 'gray';
  hover?: boolean; // Enable hover lift effect
}

const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  className = '',
  rotate = 0,
  bgColor = 'white',
  hover = true,
}) => {
  const bgColors = {
    white: 'bg-brutal-white',
    yellow: 'bg-brutal-yellow',
    green: 'bg-brutal-green',
    pink: 'bg-brutal-pink',
    blue: 'bg-brutal-blue',
    gray: 'bg-brutal-gray',
  };

  const hoverStyles = hover
    ? 'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-hover'
    : '';

  return (
    <div
      className={`
        ${bgColors[bgColor]}
        border-4 border-brutal-black
        shadow-brutal
        p-6 md:p-8
        transition-all duration-brutal ease-brutal
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
