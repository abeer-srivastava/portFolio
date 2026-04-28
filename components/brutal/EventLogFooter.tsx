'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebug } from '../providers/DebugProvider';
import { Terminal, Maximize2, Minimize2 } from 'lucide-react';

const EventLogFooter = () => {
  const { logs, addLog, isDebugMode } = useDebug();
  const [isMinimized, setIsMinimized] = React.useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  // Auto-expand when override mode is activated
  useEffect(() => {
    if (isDebugMode) {
      setIsMinimized(false);
    }
  }, [isDebugMode]);

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
          className={`bg-system-black border-t-[4px] border-x-[4px] shadow-[-8px_0_0_0_rgba(0,0,0,0.5)] w-full md:w-96 ml-auto pointer-events-auto overflow-hidden transition-colors duration-300 ${
            isDebugMode ? 'border-brutal-coral' : 'border-brutal-black'
          }`}
        >
          {/* Log Header */}
          <div 
            className={`px-3 py-1.5 flex items-center justify-between border-b-[2px] cursor-pointer select-none transition-colors duration-300 ${
              isDebugMode ? 'bg-brutal-coral border-brutal-coral text-system-white' : 'bg-brutal-yellow border-brutal-black text-system-black'
            }`}
            onClick={() => {
              setIsMinimized(!isMinimized);
              addLog(`INFO: Console ${isMinimized ? 'restored' : 'minimized'}.`);
            }}
          >
            <div className="flex items-center gap-2">
              <Terminal size={12} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-widest">{isDebugMode ? 'System Override active' : 'Live Events'}</span>
              <span className={`text-[8px] px-1 ml-1 rounded-sm animate-pulse ${
                isDebugMode ? 'bg-system-white text-brutal-coral' : 'bg-system-black text-system-white'
              }`}>LIVE</span>
            </div>
            <div className="flex gap-2 items-center">
              {isMinimized ? <Maximize2 size={12} strokeWidth={3} /> : <Minimize2 size={12} strokeWidth={3} />}
            </div>
          </div>

          {/* Log Body */}
          <div className="h-[120px] overflow-y-auto p-3 font-[var(--font-jetbrains-mono)] text-[9px] text-system-white bg-system-black/95 custom-scrollbar-mini">
            <div className="flex flex-col gap-1">
              <AnimatePresence initial={false}>
                {[...logs].reverse().map((log, i) => {
                  const isCritical = log.includes('CRITICAL') || log.includes('ERR') || log.includes('WARN');
                  return (
                    <motion.div
                      key={log + i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`leading-tight border-l pl-2 ${
                        isCritical ? 'border-brutal-coral' : 'border-brutal-yellow/30'
                      }`}
                    >
                      <span className={`mr-2 font-black ${
                        isCritical ? 'text-brutal-coral' : 'text-brutal-yellow'
                      }`}>{log.split(' ')[0]}</span>
                      {log.split(' ').slice(1).join(' ')}
                    </motion.div>
                  );
                })}
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
