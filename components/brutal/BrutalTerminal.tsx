import React from 'react';

interface BrutalTerminalProps {
  title?: string;
  commands: { cmd: string; output: string }[];
  className?: string;
}

const BrutalTerminal: React.FC<BrutalTerminalProps> = ({
  title = "terminal.sh",
  commands,
  className = "",
}) => {
  return (
    <div className={`bg-bg-secondary border-2 border-white shadow-[6px_6px_0px_white] overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-white/10 border-b-2 border-white/20 p-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
        </div>
        <div className="font-[var(--font-space-mono)] font-bold text-[10px] uppercase text-white/50 tracking-widest">
          {title}
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="p-5 md:p-8 font-[var(--font-jetbrains-mono)] text-sm md:text-base space-y-5">
        {commands.map((c, i) => (
          <div key={i} className="space-y-2">
            <div className="flex gap-3 text-accent-lime">
              <span className="font-bold opacity-70">➜</span>
              <span className="text-accent-cyan font-bold opacity-70">~</span>
              <span className="text-white font-medium">{c.cmd}</span>
            </div>
            <div className="text-text-primary/70 pl-8 leading-relaxed text-sm md:text-base">
              {c.output}
            </div>
          </div>
        ))}
        <div className="flex gap-3 text-accent-lime">
          <span className="font-bold opacity-70">➜</span>
          <span className="text-accent-cyan font-bold opacity-70">~</span>
          <span className="w-2.5 h-6 bg-accent-lime animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BrutalTerminal;
