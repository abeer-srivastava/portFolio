'use client';

import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

const LeetCodeCard = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        const res = await fetch('/api/leetcode');
        const data = await res.json();
        if (data.status === 'success' || data.totalSolved !== undefined) {
          setStats(data);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCode();
  }, []);

  if (error) return (
    <div className="flex flex-col h-full justify-center items-center text-[10px] text-white/20 uppercase font-bold tracking-widest">
       Data Unavailable
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full justify-between py-1">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald flex items-center gap-2">
          <Code2 size={12} />
          LeetCode
        </h3>
        <span className="text-[8px] font-bold uppercase tracking-widest text-white/30">_abeer16</span>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xl font-bold text-white tracking-tighter leading-none">
            {loading ? '..' : stats?.totalSolved || 0}
          </p>
          <p className="text-[8px] font-bold uppercase tracking-widest text-white/20 mt-1">Solved</p>
        </div>
        
        <div className="flex gap-1.5 items-end">
           <div className="flex flex-col items-center">
             <span className="text-[8px] font-bold text-accent-emerald leading-none">{stats?.easySolved || 0}</span>
             <div className="w-1.5 bg-accent-emerald/20 h-3 mt-1 relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-accent-emerald" style={{ height: stats ? `${(stats.easySolved / stats.totalSolved) * 100}%` : '0%' }} />
             </div>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-[8px] font-bold text-accent-cyan leading-none">{stats?.mediumSolved || 0}</span>
             <div className="w-1.5 bg-accent-cyan/20 h-3 mt-1 relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-accent-cyan" style={{ height: stats ? `${(stats.mediumSolved / stats.totalSolved) * 100}%` : '0%' }} />
             </div>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-[8px] font-bold text-accent-violet leading-none">{stats?.hardSolved || 0}</span>
             <div className="w-1.5 bg-accent-violet/20 h-3 mt-1 relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-accent-violet" style={{ height: stats ? `${(stats.hardSolved / stats.totalSolved) * 100}%` : '0%' }} />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeCard;
