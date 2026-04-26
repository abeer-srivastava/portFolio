import React from 'react';

interface BrutalSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: 'white' | 'gray' | 'green' | 'pink' | 'blue' | 'yellow';
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
    green: 'bg-brutal-green',
    pink: 'bg-brutal-pink',
    blue: 'bg-brutal-blue',
    yellow: 'bg-brutal-yellow',
  };

  return (
    <section
      id={id}
      className={`
        ${bgColors[bgColor]}
        ${!noBorder ? 'border-b-4 border-brutal-black' : ''}
        py-20 md:py-24
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
