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
  color = 'bg-accent-lime' 
}) => (
  <div 
    className={`absolute border-2 border-white shadow-[4px_4px_0_0_white] p-3 ${color} text-black font-bold uppercase text-[10px] tracking-widest ${className} flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00E5FF] cursor-default hidden lg:flex z-10`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
);

export default Sticker;
