'use client';

import React, { useEffect, useState } from 'react';
import { Music } from 'lucide-react';
import Image from 'next/image';

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

const SpotifyCard = () => {
  const [data, setData] = useState<SpotifyData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch('/api/now-playing');
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Spotify fetch error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="flex items-center gap-4 animate-pulse">
      <div className="w-12 h-12 bg-white/5" />
      <div className="flex-1 space-y-2">
        <div className="h-2 bg-white/5 w-1/2" />
        <div className="h-2 bg-white/5 w-1/3" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full justify-between gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent-violet flex items-center gap-2">
          <Music size={12} className={data.isPlaying ? "animate-bounce" : ""} />
          {data.isPlaying ? "Now Playing" : "Offline"}
        </h3>
        {data.isPlaying && (
          <div className="flex gap-1 items-end h-3">
            <div className="w-0.5 bg-accent-violet animate-[music-bar_0.8s_ease-in-out_infinite]" />
            <div className="w-0.5 bg-accent-violet animate-[music-bar_1.2s_ease-in-out_infinite]" />
            <div className="w-0.5 bg-accent-violet animate-[music-bar_1.0s_ease-in-out_infinite]" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {data.albumImageUrl ? (
          <div className="relative w-12 h-12 flex-shrink-0 group overflow-hidden border border-white/5">
            <Image 
              src={data.albumImageUrl} 
              alt={data.title || "Album Art"}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/5">
            <Music size={16} className="text-white/10" />
          </div>
        )}
        
        <div className="min-w-0">
          <a 
            href={data.songUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-sm font-bold text-white truncate hover:text-accent-violet transition-colors uppercase tracking-tight"
          >
            {data.isPlaying ? data.title : "Not Listening"}
          </a>
          <p className="text-[10px] text-white/40 truncate font-medium uppercase tracking-widest">
            {data.isPlaying ? data.artist : "Spotify"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;
