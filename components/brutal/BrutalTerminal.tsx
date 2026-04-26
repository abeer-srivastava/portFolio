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
    <div className={`bg-[#1E1E1E] border-4 border-brutal-black shadow-[8px_8px_0_0_#000] overflow-hidden ${className}`}>
      {/* Mac Header */}
      <div className="bg-brutal-white border-b-4 border-brutal-black p-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border-2 border-brutal-black" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border-2 border-brutal-black" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border-2 border-brutal-black" />
        </div>
        <div className="font-jetbrains-mono font-bold text-xs uppercase">
          {title}
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 font-jetbrains-mono text-sm md:text-base space-y-4">
        {commands.map((c, i) => (
          <div key={i} className="space-y-1">
            <div className="flex gap-2 text-brutal-green">
              <span className="font-bold">➜</span>
              <span className="text-brutal-blue font-bold">~</span>
              <span className="text-brutal-white">{c.cmd}</span>
            </div>
            <div className="text-brutal-gray opacity-80 pl-6 leading-relaxed">
              {c.output}
            </div>
          </div>
        ))}
        <div className="flex gap-2 text-brutal-green">
          <span className="font-bold">➜</span>
          <span className="text-brutal-blue font-bold">~</span>
          <span className="w-2 h-5 bg-brutal-white animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BrutalTerminal;
