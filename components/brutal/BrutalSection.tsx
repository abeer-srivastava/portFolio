import React from 'react';

interface BrutalSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: string;
  noBorder?: boolean;
}

const BrutalSection: React.FC<BrutalSectionProps> = ({
  children,
  id,
  className = '',
  bgColor = 'bg-bg-primary',
  noBorder = false,
}) => {
  return (
    <section
      id={id}
      className={`
        ${bgColor}
        ${!noBorder ? 'border-b-2 border-white' : ''}
        py-24 md:py-32
        px-6
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
