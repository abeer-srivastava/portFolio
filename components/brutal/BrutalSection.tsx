import React from 'react';

interface BrutalSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: 'white' | 'gray' | 'lime' | 'pink' | 'blue';
  noBorder?: boolean;
}

const BrutalSection: React.FC<BrutalSectionProps> = ({
  children,
  id,
  className = '',
  bgColor = 'white',
  noBorder = false,
}) => {
  const bgColors = {
    white: 'bg-brutal-white',
    gray: 'bg-brutal-gray',
    lime: 'bg-brutal-lime',
    pink: 'bg-brutal-pink',
    blue: 'bg-brutal-blue',
  };

  return (
    <section
      id={id}
      className={`
        ${bgColors[bgColor]}
        ${!noBorder ? 'border-t-5 border-brutal-black' : ''}
        py-16 md:py-24 lg:py-32
        px-4 md:px-6 lg:px-8
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default BrutalSection;
