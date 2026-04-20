'use client';

import React, { useEffect, useState } from 'react';
import { Github, Star, GitBranch } from 'lucide-react';

interface GitHubStats {
  followers: number;
  public_repos: number;
  total_stars: number;
}

const GitHubCard = () => {
  const [stats, setStats] = useState<GitHubStats>({
    followers: 0,
    public_repos: 0,
    total_stars: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        // ID: abeer-srivastava
        const userRes = await fetch('https://api.github.com/users/abeer-srivastava');
        const userData = await userRes.json();
        
        // Fetching stars requires iterating repos or using a specific search query
        const reposRes = await fetch('https://api.github.com/users/abeer-srivastava/repos?per_page=100');
        const reposData = await reposRes.json();
        const stars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        setStats({
          followers: userData.followers || 0,
          public_repos: userData.public_repos || 0,
          total_stars: stars || 0
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  return (
    <div className="flex items-center justify-between w-full h-full">
      <div className="flex flex-col">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent-cyan flex items-center gap-2 mb-1">
          <Github size={12} />
          GitHub
        </h3>
        <span className="text-[8px] font-bold text-white/30 uppercase">abeer-srivastava</span>
      </div>

      <div className="flex gap-6">
        {[
          { label: 'Repos', value: stats.public_repos, icon: GitBranch },
          { label: 'Stars', value: stats.total_stars, icon: Star }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-end">
            <span className="text-lg font-bold text-white leading-none mb-1">{loading ? '..' : item.value}</span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/20">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubCard;
