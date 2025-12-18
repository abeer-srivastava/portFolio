import React from 'react';

interface BrutalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean;
}

const BrutalButton: React.FC<BrutalButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  download = false,
}) => {
  const baseStyles = `
    inline-block px-6 py-3 
    font-bold uppercase text-sm tracking-wide
    border-4 border-brutal-black
    transition-all duration-brutal ease-brutal
    cursor-pointer select-none
    hover:-translate-x-1 hover:-translate-y-1
    active:translate-x-0 active:translate-y-0
    active:shadow-brutal-sm
    focus-visible:outline-4 focus-visible:outline-brutal-lime focus-visible:outline-offset-4
  `;

  const variantStyles = {
    primary: 'bg-brutal-lime text-brutal-black shadow-brutal hover:shadow-brutal-hover',
    secondary: 'bg-brutal-white text-brutal-black shadow-brutal hover:shadow-brutal-hover',
    danger: 'bg-brutal-pink text-brutal-white shadow-brutal hover:shadow-brutal-hover',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};

export default BrutalButton;
