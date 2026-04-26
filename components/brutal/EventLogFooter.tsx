'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebug } from '../providers/DebugProvider';
import { Terminal, Maximize2, Minimize2 } from 'lucide-react';

const EventLogFooter = () => {
  const { logs, addLog } = useDebug();
  const [isMinimized, setIsMinimized] = React.useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMinimized && logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isMinimized]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          animate={{ height: isMinimized ? '36px' : '160px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-brutal-black border-t-[4px] border-x-[4px] border-brutal-black shadow-[-8px_0_0_0_#000] w-full md:w-96 ml-auto pointer-events-auto overflow-hidden"
        >
          {/* Log Header */}
          <div 
            className="bg-brutal-yellow px-3 py-1.5 flex items-center justify-between border-b-[2px] border-brutal-black cursor-pointer select-none"
            onClick={() => {
              setIsMinimized(!isMinimized);
              addLog(`INFO: Console ${isMinimized ? 'restored' : 'minimized'}.`);
            }}
          >
            <div className="flex items-center gap-2">
              <Terminal size={12} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-widest">Live Events</span>
              <span className="text-[8px] bg-brutal-black text-white px-1 ml-1 rounded-sm animate-pulse">LIVE</span>
            </div>
            <div className="flex gap-2 items-center">
              {isMinimized ? <Maximize2 size={12} strokeWidth={3} /> : <Minimize2 size={12} strokeWidth={3} />}
            </div>
          </div>

          {/* Log Body */}
          <div className="h-[120px] overflow-y-auto p-3 font-[var(--font-jetbrains-mono)] text-[9px] text-brutal-white bg-brutal-black/95 custom-scrollbar-mini">
            <div className="flex flex-col gap-1">
              <AnimatePresence initial={false}>
                {[...logs].reverse().map((log, i) => (
                  <motion.div
                    key={log + i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="leading-tight border-l border-brutal-yellow/30 pl-2"
                  >
                    <span className="text-brutal-yellow mr-2 font-black">{log.split(' ')[0]}</span>
                    {log.split(' ').slice(1).join(' ')}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={logEndRef} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventLogFooter;
