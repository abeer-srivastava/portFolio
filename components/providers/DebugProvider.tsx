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
        <div className="fixed inset-0 pointer-events-none z-[9998]">
          <AnimatePresence>
            {alerts.map(alert => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1, 0.9] }}
                exit={{ opacity: 0 }}
                className="absolute bg-brutal-coral text-system-white px-3 py-1 font-black text-[12px] border-2 border-system-black shadow-brutal flex items-center gap-2"
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
        <div className="fixed top-24 left-4 z-[9999] pointer-events-none flex flex-col gap-2 font-[var(--font-jetbrains-mono)]">
          {/* Main HUD */}
          <div className="bg-system-black text-brutal-coral p-3 border-2 border-brutal-coral shadow-[4px_4px_0px_rgba(254,110,110,0.5)] max-w-[200px]">
            <div className="font-black border-b border-brutal-coral mb-2 pb-1 flex justify-between items-center text-[11px]">
              <span>SYSTEM OVERRIDE</span>
              <span className="w-2 h-2 bg-brutal-coral animate-pulse rounded-full" />
            </div>
            
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between">
                <span className="opacity-70">CPU LOAD:</span>
                <span className="font-black">{metrics.cpu}%</span>
              </div>
              <div className="w-full bg-brutal-coral/20 h-1 mt-0.5">
                <div className="bg-brutal-coral h-full transition-all duration-500" style={{ width: `${metrics.cpu}%` }} />
              </div>

              <div className="flex justify-between mt-2">
                <span className="opacity-70">RAM USE:</span>
                <span className="font-black">{metrics.ram}GB</span>
              </div>
              
              <div className="flex justify-between">
                <span className="opacity-70">NETWORK:</span>
                <span className={`font-black ${metrics.net === 'STABLE' ? 'text-green-500' : 'animate-pulse'}`}>{metrics.net}</span>
              </div>

              <div className="flex justify-between">
                <span className="opacity-70">THREADS:</span>
                <span className="font-black">{metrics.threads}</span>
              </div>

              <div className="pt-2 border-t border-brutal-coral/30 mt-2">
                <div className="flex justify-between text-[8px] mb-1">
                  <span>OVERRIDE STATUS</span>
                  <span className="animate-pulse">{metrics.failureProgress}%</span>
                </div>
                <div className="w-full bg-brutal-coral/20 h-2 border border-brutal-coral/50 overflow-hidden">
                  <div className="bg-brutal-coral h-full transition-all duration-1000 ease-linear" style={{ width: `${metrics.failureProgress}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary HUD - Coordinates */}
          <div className="bg-system-black text-brutal-yellow p-2 border-2 border-brutal-yellow shadow-[4px_4px_0px_rgba(255,219,94,0.5)] text-[9px]">
            <div className="flex gap-4">
              <div>LOC_X: {mousePos.x}</div>
              <div>LOC_Y: {mousePos.y}</div>
            </div>
            <div className="mt-1 opacity-50 flex justify-between">
              <span>LATENCY: {ping}MS</span>
              <span>v2.0.4_OVERRIDE</span>
            </div>
          </div>
        </div>
      )}
    </DebugContext.Provider>
  );
};

export const useDebug = () => {
  const context = useContext(DebugContext);
  if (!context) throw new Error('useDebug must be used within a DebugProvider');
  return context;
};
