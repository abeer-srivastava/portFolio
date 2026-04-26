'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = {
  whoami: "Abeer Srivastava - Backend Engineer specializing in distributed systems and cloud-native infrastructure. I turn complex problems into scalable solutions.",
  skills: "Node.js, Python, Go, TypeScript, AWS, Docker, Kubernetes, PostgreSQL, Redis, GraphQL.",
  projects: "EchoBox (Secure Messaging), PixieDraw (Collaborative Whiteboard), SuperBrain (Knowledge Hub). Type 'view [project]' for details (coming soon).",
  contact: "Email: abeersrivastava16@gmail.com | LinkedIn: /in/abeer-srivastava | GitHub: /abeer-srivastava",
  help: "Available commands: whoami, skills, projects, contact, clear, help",
  ls: "about.txt  skills.json  projects/  contact.url",
  clear: "CLEAR",
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<string[]>(['Type "help" to see available commands.']);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === '') return;

    let response = '';
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (COMMANDS[cmd as keyof typeof COMMANDS]) {
      response = COMMANDS[cmd as keyof typeof COMMANDS];
    } else {
      response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="bg-brutal-white border-[4px] border-brutal-black shadow-brutal-lg relative overflow-hidden flex flex-col h-[600px]"
      onClick={focusInput}
    >
      {/* Terminal header */}
      <div className="bg-brutal-black px-5 py-3 flex items-center gap-3 border-b-[4px] border-brutal-black shrink-0">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-brutal-coral border-[2px] border-brutal-black" />
          <div className="w-3.5 h-3.5 rounded-full bg-brutal-yellow border-[2px] border-brutal-black" />
          <div className="w-3.5 h-3.5 rounded-full bg-brutal-white border-[2px] border-brutal-black" />
        </div>
        <span className="text-brutal-white font-[var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-wider ml-2">
          abeer@dev: ~
        </span>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-6 overflow-y-auto flex-1 font-[var(--font-jetbrains-mono)] text-sm md:text-base text-brutal-black custom-scrollbar"
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-2 ${line.startsWith('>') ? 'font-black' : 'opacity-80'}`}>
            {line}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
          <span className="font-black text-brutal-coral">➜</span>
          <span className="font-black text-brutal-black">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 font-black text-brutal-black caret-brutal-coral"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>

      {/* Suggestion tags at the bottom */}
      <div className="p-3 bg-brutal-gray/30 border-t-[2px] border-brutal-black flex flex-wrap gap-2 shrink-0">
        {['whoami', 'skills', 'help'].map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => {
              e.stopPropagation();
              setInput(cmd);
              inputRef.current?.focus();
            }}
            className="text-[10px] font-black bg-brutal-white border-[2px] border-brutal-black px-2 py-0.5 uppercase hover:bg-brutal-yellow transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
