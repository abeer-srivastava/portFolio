import React from 'react';

interface StickerProps {
  children: React.ReactNode;
  className: string;
  rotate?: number;
  color?: string;
}

const Sticker: React.FC<StickerProps> = ({ 
  children, 
  className, 
  rotate = 0, 
  color = 'bg-brutal-white' 
}) => (
  <div 
    className={`absolute border-3 border-brutal-black shadow-[4px_4px_0_0_#000] p-3 ${color} ${className} flex items-center justify-center transition-transform hover:scale-110 cursor-default hidden lg:flex z-10`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
);

export default Sticker;
