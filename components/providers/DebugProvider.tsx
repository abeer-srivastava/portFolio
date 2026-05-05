'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import GlitchGridBackground from '../brutal/GlitchGridBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface DebugContextType {
  isDebugMode: boolean;
  setIsDebugMode: (val: boolean) => void;
  logs: string[];
  addLog: (msg: string) => void;
  mousePos: { x: number; y: number };
  ping: number;
  metrics: {
    cpu: number;
    ram: number;
    net: string;
    threads: number;
    failureProgress: number;
  };
}

const DebugContext = createContext<DebugContextType | undefined>(undefined);

export const DebugProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ping, setPing] = useState(24);
  const [metrics, setMetrics] = useState({
    cpu: 12,
    ram: 4.2,
    net: 'STABLE',
    threads: 64,
    failureProgress: 0
  });
  const [alerts, setAlerts] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

  useEffect(() => {
    let alertId = 0;
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * (32 - 12 + 1) + 12));
      
      if (isDebugMode) {
        setMetrics(prev => ({
          cpu: Math.floor(Math.random() * (98 - 45 + 1) + 45),
          ram: parseFloat((Math.random() * (12.4 - 8.1) + 8.1).toFixed(1)),
          net: Math.random() > 0.8 ? 'UNSTABLE' : 'OVERLOADED',
          threads: Math.floor(Math.random() * (512 - 128 + 1) + 128),
          failureProgress: Math.min(prev.failureProgress + 1, 100)
        }));

        if (Math.random() > 0.7) {
          const alertTexts = ['ACCESS DENIED', 'SECURITY BREACH', 'SIGNAL LOST', 'KERNEL PANIC', 'BYPASS ACTIVE'];
          const newAlert = {
            id: alertId++,
            text: alertTexts[Math.floor(Math.random() * alertTexts.length)],
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10
          };
          setAlerts(prev => [...prev, newAlert]);
          addLog(`WARN: ${newAlert.text} detected.`);
          setTimeout(() => setAlerts(prev => prev.filter(a => a.id !== newAlert.id)), 2000);
        }
      } else {
        setMetrics({
          cpu: Math.floor(Math.random() * (18 - 5 + 1) + 5),
          ram: parseFloat((Math.random() * (4.8 - 3.2) + 3.2).toFixed(1)),
          net: 'STABLE',
          threads: 64,
          failureProgress: 0
        });
        setAlerts([]);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isDebugMode]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
    setLogs((prev) => [`[${time}] ${msg}`, ...prev].slice(0, 50));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDebugMode) {
      document.body.classList.add('override-mode');
      addLog('CRITICAL: System integrity compromised.');
      addLog('WARN: Sub-routine 0x4F2A initialized.');
    } else {
      document.body.classList.remove('override-mode');
      if (logs.length > 0) addLog('INFO: Systems restored to default.');
    }
  }, [isDebugMode]);

  return (
    <DebugContext.Provider value={{ isDebugMode, setIsDebugMode, logs, addLog, mousePos, ping, metrics }}>
      {children}
      {isDebugMode && <GlitchGridBackground />}
      {isDebugMode && (
        <div className="fixed inset-0 pointer-events-none z-[9998]" style={{ color: 'var(--color-override)' }}>
          <AnimatePresence>
            {alerts.map(alert => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1, 0.9] }}
                exit={{ opacity: 0 }}
                className="absolute bg-[var(--color-override)] text-system-black px-3 py-1 font-black text-[12px] border-2 border-system-black shadow-brutal flex items-center gap-2"
                style={{ left: `${alert.x}%`, top: `${alert.y}%` }}
              >
                <AlertTriangle size={14} />
                {alert.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      {isDebugMode && (
        <>
          {/* Desktop HUD - Hidden on Mobile */}
          <div className="fixed top-24 left-4 z-[9999] hidden md:flex flex-col gap-2 font-[var(--font-jetbrains-mono)] pointer-events-auto">
            {/* Main HUD */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-system-black text-[var(--color-override)] p-3 border-2 border-[var(--color-override)] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] w-[220px]"
            >
              <div className="font-black border-b border-[var(--color-override)] mb-3 pb-1.5 flex justify-between items-center text-[11px]">
                <span className="tracking-widest">SYSTEM OVERRIDE</span>
                <span className="w-2.5 h-2.5 bg-[var(--color-override)] animate-pulse rounded-full shadow-[0_0_8px_var(--color-override)]" />
              </div>
              
              <div className="space-y-3 text-[10px]">
                {/* CPU Row */}
                <div 
                  className="cursor-pointer group"
                  onClick={() => addLog(`INFO: CPU cycle optimization triggered. [LOAD: ${metrics.cpu}%]`)}
                >
                  <div className="flex justify-between mb-1">
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">CPU LOAD:</span>
                    <span className="font-black">{metrics.cpu}%</span>
                  </div>
                  <div className="w-full bg-[var(--color-override)]/10 h-1.5 border border-[var(--color-override)]/20">
                    <div className="bg-[var(--color-override)] h-full transition-all duration-500" style={{ width: `${metrics.cpu}%` }} />
                  </div>
                </div>

                <div 
                  className="flex justify-between cursor-help hover:bg-[var(--color-override)]/10 p-1 -m-1 transition-colors"
                  onClick={() => addLog(`DEBUG: Memory allocation table updated. [${metrics.ram}GB / 16GB]`)}
                >
                  <span className="opacity-70">RAM USE:</span>
                  <span className="font-black">{metrics.ram}GB</span>
                </div>
                
                <div 
                  className="flex justify-between cursor-help hover:bg-[var(--color-override)]/10 p-1 -m-1 transition-colors"
                  onClick={() => addLog(`INFO: Network handshake stable. [LATENCY: ${ping}ms]`)}
                >
                  <span className="opacity-70">NETWORK:</span>
                  <span className={`font-black ${metrics.net === 'STABLE' ? 'text-green-500' : 'animate-pulse'}`}>{metrics.net}</span>
                </div>

                <div 
                  className="flex justify-between cursor-help hover:bg-[var(--color-override)]/10 p-1 -m-1 transition-colors"
                  onClick={() => addLog(`DEBUG: Active thread count: ${metrics.threads}.`)}
                >
                  <span className="opacity-70">THREADS:</span>
                  <span className="font-black">{metrics.threads}</span>
                </div>

                <div className="pt-3 border-t border-[var(--color-override)]/30 mt-3">
                  <div className="flex justify-between text-[8px] mb-1.5 font-black uppercase">
                    <span>OVERRIDE STATUS</span>
                    <span className="animate-pulse">{metrics.failureProgress}%</span>
                  </div>
                  <div className="w-full bg-[var(--color-override)]/10 h-3 border-2 border-[var(--color-override)]/40 overflow-hidden relative">
                    <div className="bg-[var(--color-override)] h-full transition-all duration-1000 ease-linear" style={{ width: `${metrics.failureProgress}%` }} />
                    {metrics.failureProgress > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                        <span className="text-[7px] font-black text-white">UPGRADING KERNEL...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary HUD - Coordinates */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-system-black text-brutal-yellow p-2.5 border-2 border-brutal-yellow shadow-[4px_4px_0px_rgba(255,219,94,0.3)] text-[9px] w-[220px]"
            >
              <div className="flex justify-between font-black uppercase mb-1">
                <span>LOC_X: {mousePos.x}</span>
                <span>LOC_Y: {mousePos.y}</span>
              </div>
              <div className="opacity-60 flex justify-between font-bold">
                <span>LATENCY: {ping}MS</span>
                <span>v2.0.4_OVERRIDE</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile Alternative HUD - Top Banner */}
          <motion.div 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[10000] md:hidden bg-system-black border-b-2 border-[var(--color-override)] px-4 py-2 flex items-center justify-between font-[var(--font-jetbrains-mono)]"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--color-override)] animate-pulse rounded-full" />
              <span className="text-[10px] font-black text-[var(--color-override)] uppercase tracking-tighter">OVERRIDE ACTIVE</span>
            </div>
            <div className="flex gap-4 text-[9px] text-system-white font-bold opacity-80">
              <span>CPU: {metrics.cpu}%</span>
              <span>RAM: {metrics.ram}GB</span>
              <span className="text-brutal-yellow">{ping}MS</span>
            </div>
          </motion.div>
        </>
      )}
    </DebugContext.Provider>
  );
};

export const useDebug = () => {
  const context = useContext(DebugContext);
  if (!context) throw new Error('useDebug must be used within a DebugProvider');
  return context;
};
