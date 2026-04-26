'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface DebugContextType {
  isDebugMode: boolean;
  setIsDebugMode: (val: boolean) => void;
  logs: string[];
  addLog: (msg: string) => void;
  mousePos: { x: number; y: number };
  ping: number;
}

const DebugContext = createContext<DebugContextType | undefined>(undefined);

export const DebugProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ping, setPing] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * (32 - 12 + 1) + 12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
    setLogs((prev) => [`[${time}] ${msg}`, ...prev].slice(0, 50));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDebugMode) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDebugMode]);

  useEffect(() => {
    if (isDebugMode) {
      document.body.classList.add('debug-mode');
      addLog('DEBUG: Kernel introspection enabled.');
    } else {
      document.body.classList.remove('debug-mode');
      if (logs.length > 0) addLog('INFO: Introspection terminated.');
    }
  }, [isDebugMode]);

  return (
    <DebugContext.Provider value={{ isDebugMode, setIsDebugMode, logs, addLog, mousePos, ping }}>
      {children}
      {isDebugMode && (
        <div className="fixed top-4 left-4 z-[9999] pointer-events-none bg-brutal-black text-brutal-yellow p-2 border border-brutal-yellow font-[var(--font-jetbrains-mono)] text-[10px] leading-tight">
          <div className="font-black border-b border-brutal-yellow mb-1 pb-1">SYSTEM OVERLAY</div>
          <div>X: {mousePos.x}px</div>
          <div>Y: {mousePos.y}px</div>
          <div>LATENCY: {ping}ms</div>
          <div className="mt-1 opacity-50 uppercase">v1.02_stable</div>
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
