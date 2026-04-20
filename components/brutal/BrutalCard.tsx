import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number; // Rotation in degrees (-2 to 2)
  bgColor?: string;
  hover?: boolean; // Enable hover lift effect
  shadowColor?: string;
}

const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  className = '',
  rotate = 0,
  bgColor = 'bg-bg-secondary',
  hover = true,
  shadowColor = 'shadow-[4px_4px_0px_white]',
}) => {
  const hoverStyles = hover
    ? `hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#C8F135] hover:border-accent-lime`
    : '';

  return (
    <div
      className={`
        ${bgColor}
        border-2 border-white
        ${shadowColor}
        p-6 md:p-8
        transition-all duration-300
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
