'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Youtube, X, Volume2 } from 'lucide-react';
import { useDebug } from '../providers/DebugProvider';

const TRACKS = [
  {
    id: 'yt-custom-1',
    title: 'Boom Shaka - KR$NA',
    provider: 'youtube',
    url: 'https://www.youtube.com/embed/cL0KKSPjZf8?autoplay=1',
    color: 'bg-brutal-yellow',
  },
  {
    id: 'yt-custom-2',
    title: 'Ae Ajnabee - Aditya Rikhari',
    provider: 'youtube',
    url: 'https://www.youtube.com/embed/ut1rfURWyCo?autoplay=1',
    color: 'bg-brutal-coral',
  },
  {
    id: 'yt-custom-3',
    title: 'Dooron Dooron - Paresh Pahuja',
    provider: 'youtube',
    url: 'https://www.youtube.com/embed/9T-Zbxg9X_4?autoplay=1',
    color: 'bg-brutal-blue',
  },
  {
    id: 'yt-custom-4',
    title: 'Sanson Ki Mala - Bhuwin Experience',
    provider: 'youtube',
    url: 'https://www.youtube.com/embed/qkzUlKSzCwQ?autoplay=1',
    color: 'bg-brutal-purple',
  },
];

const SpotlightMusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState<typeof TRACKS[0] | null>(null);
  const { addLog, isDebugMode } = useDebug();

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      addLog('INFO: Music Spotlight terminal opened.');
    } else {
      addLog('INFO: Music Spotlight terminal minimized.');
    }
  }, [isOpen, addLog]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'm') {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleOpen]);

  useEffect(() => {
    window.toggleMusicSpotlight = toggleOpen;
    return () => { delete window.toggleMusicSpotlight; };
  }, [toggleOpen]);

  return (
    <>
      {/* 
        Persistent Audio Engine 
        Layered between the backdrop (1000) and the UI Shell (1020)
      */}
      <div
        className={`fixed z-[1010] transition-all duration-500 ease-in-out pointer-events-none overflow-hidden ${isOpen
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[80vh] md:h-[600px] pointer-events-auto opacity-100'
            : 'bottom-4 right-4 w-10 h-10 opacity-0 z-[-1]'
          }`}
        style={{
          clipPath: isOpen ? 'none' : 'circle(0% at 50% 50%)',
        }}
      >
        {activeTrack && (
          <div className="w-full h-full flex flex-col md:flex-row border-[6px] border-transparent">
            <div className="hidden md:block w-80 shrink-0" /> {/* Sidebar gap */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 relative">
                <iframe
                  key={activeTrack.id}
                  src={activeTrack.url}
                  className="w-full h-full border-none bg-system-black"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              </div>
              <div className="h-32 md:h-36" /> {/* Info panel gap */}
            </div>
          </div>
        )}
      </div>

      {/* Mini-Player */}
      <AnimatePresence>
        {activeTrack && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-32 right-4 z-[1030]"
          >
            <button
              onClick={toggleOpen}
              className={`p-3 border-[3px] shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all flex items-center gap-3 group ${isDebugMode ? 'bg-system-black border-[var(--color-override)] text-[var(--color-override)]' : 'bg-brutal-white border-brutal-black text-brutal-black'
                }`}
            >
              <div className="relative">
                <Music size={16} strokeWidth={3} className="animate-bounce" />
                <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse`} />
              </div>
              <div className="flex flex-col items-start leading-none gap-1 text-left">
                <span className="text-[8px] font-black uppercase opacity-60">Audio Engine Active</span>
                <span className="text-[10px] font-black uppercase tracking-tighter max-w-[120px] truncate">{activeTrack.title}</span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-system-black/80 backdrop-blur-md z-[1000]"
            />

            {/* UI Shell - High Z-Index to stay above iframe */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-4xl border-[6px] shadow-brutal-lg flex flex-col md:flex-row h-[80vh] md:h-[600px] z-[1020] pointer-events-none ${isDebugMode ? 'border-[var(--color-override)]' : 'border-brutal-black'
                }`}
            >
              {/* Sidebar - Clickable */}
              <div className={`w-full md:w-80 border-b-[6px] md:border-b-0 md:border-r-[6px] flex flex-col pointer-events-auto bg-brutal-white ${isDebugMode ? 'border-[var(--color-override)]' : 'border-brutal-black'
                }`}>
                <div className={`p-4 border-b-[4px] flex items-center gap-3 transition-colors duration-300 ${isDebugMode ? 'bg-[var(--color-override)] border-[var(--color-override)] text-system-black' : 'bg-brutal-yellow border-brutal-black text-system-black'
                  }`}>
                  <Music size={20} strokeWidth={3} />
                  <span className="font-black uppercase tracking-tighter text-sm">Music Terminal</span>
                </div>

                <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 custom-scrollbar">
                  <div className="text-[10px] font-black opacity-50 uppercase mb-2 px-1">Frequencies</div>
                  {TRACKS.map((track) => (
                    <button
                      key={track.id}
                      onClick={() => {
                        setActiveTrack(track);
                        addLog(`INFO: Tuning to ${track.title}.`);
                      }}
                      className={`w-full p-3 border-[3px] text-left transition-all duration-150 flex items-center gap-3 group relative overflow-hidden ${activeTrack?.id === track.id
                          ? isDebugMode
                            ? 'bg-[var(--color-override)] border-[var(--color-override)] text-system-black translate-x-1 translate-y-1 shadow-none'
                            : 'bg-brutal-coral border-brutal-black text-system-white translate-x-1 translate-y-1 shadow-none'
                          : isDebugMode
                            ? 'bg-system-black border-[var(--color-override)] text-[var(--color-override)] hover:bg-[var(--color-override)]/10 shadow-brutal-sm'
                            : 'bg-brutal-white border-brutal-black text-brutal-black hover:bg-brutal-gray/20 shadow-brutal-sm'
                        }`}
                    >
                      {track.provider === 'youtube' ? <Youtube size={16} /> : <Music size={16} />}
                      <span className="font-bold text-[10px] uppercase truncate flex-1">{track.title}</span>
                    </button>
                  ))}

                  {activeTrack && (
                    <button
                      onClick={() => {
                        setActiveTrack(null);
                        addLog('INFO: Audio engine shut down.');
                      }}
                      className={`w-full p-3 border-[3px] text-left transition-all duration-150 flex items-center gap-3 bg-red-500 border-brutal-black text-white mt-auto shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1`}
                    >
                      <X size={16} />
                      <span className="font-black text-[10px] uppercase">Kill Process</span>
                    </button>
                  )}
                </div>

                <div className={`p-3 border-t-[4px] font-[var(--font-jetbrains-mono)] text-[10px] flex items-center justify-between ${isDebugMode ? 'bg-system-black border-[var(--color-override)] text-[var(--color-override)]' : 'bg-brutal-black text-system-white border-brutal-black'
                  }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeTrack ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                    <span className="font-bold uppercase tracking-widest">{activeTrack ? 'Sync' : 'Idle'}</span>
                  </div>
                  <span className="opacity-50 tracking-tighter">1.0.7-FIX</span>
                </div>
              </div>

              {/* Main Area - Transparent to see Iframe */}
              <div className="flex-1 flex flex-col relative overflow-hidden pointer-events-none">
                {!activeTrack ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-system-white z-10 bg-system-black pointer-events-auto">
                    <div className={`p-6 border-[6px] rounded-full mb-8 animate-bounce ${isDebugMode ? 'border-[var(--color-override)] text-[var(--color-override)] shadow-[0_0_30px_var(--color-override)]' : 'border-brutal-yellow text-brutal-yellow shadow-[0_0_30px_rgba(255,219,94,0.3)]'
                      }`}>
                      <Music size={64} strokeWidth={3} />
                    </div>
                    <h2 className={`text-4xl font-black uppercase tracking-tighter mb-4 ${isDebugMode ? 'text-[var(--color-override)]' : 'text-brutal-yellow'}`}>
                      Signal Lost
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className={`mt-12 px-8 py-3 border-[4px] font-black uppercase text-sm shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all ${isDebugMode ? 'bg-[var(--color-override)] border-[var(--color-override)] text-system-black' : 'bg-brutal-yellow border-brutal-black text-system-black'
                        }`}
                    >
                      Exit Terminal
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="absolute top-4 right-4 z-50 flex gap-2 pointer-events-auto">
                      <button
                        onClick={() => setIsOpen(false)}
                        className={`p-2 border-[3px] shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all ${isDebugMode ? 'bg-system-black border-[var(--color-override)] text-[var(--color-override)]' : 'bg-brutal-white border-brutal-black text-brutal-black'
                          }`}
                      >
                        <X size={20} strokeWidth={3} />
                      </button>
                    </div>

                    {/* This middle part is transparent - clicks pass to iframe beneath (at z-1010) */}
                    <div className="flex-1" />

                    {/* Info Panel - Clickable */}
                    <div className={`p-6 border-t-[6px] transition-colors duration-300 z-40 bg-brutal-white pointer-events-auto ${isDebugMode ? 'bg-system-black border-[var(--color-override)] text-[var(--color-override)]' : 'bg-brutal-white border-brutal-black text-brutal-black'
                      }`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className={`inline-block px-2 py-0.5 text-[10px] font-black uppercase mb-1 ${isDebugMode ? 'bg-[var(--color-override)] text-system-black' : 'bg-brutal-black text-system-white'
                            }`}>
                            Now Tuning
                          </div>
                          <h3 className="text-xl font-black leading-tight uppercase tracking-tighter truncate">
                            {activeTrack.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


    </>
  );
};

export default SpotlightMusicPlayer;
