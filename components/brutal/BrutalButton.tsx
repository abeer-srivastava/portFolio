import React from 'react';

interface BrutalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
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
    inline-block px-8 py-4 
    font-bold uppercase text-sm tracking-widest
    border-2 border-white
    transition-all duration-200
    cursor-pointer select-none
    hover:-translate-x-1 hover:-translate-y-1
    active:translate-x-0 active:translate-y-0
  `;

  const variantStyles = {
    primary: 'bg-accent-violet text-white shadow-[4px_4px_0px_white] hover:bg-[#8B5CF6]',
    secondary: 'bg-transparent text-white shadow-[4px_4px_0px_white] hover:bg-white/10',
    danger: 'bg-accent-emerald text-black shadow-[4px_4px_0px_white] hover:bg-[#34D399]',
    ghost: 'bg-transparent text-white border-white/20 hover:border-white hover:bg-white/5',
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
