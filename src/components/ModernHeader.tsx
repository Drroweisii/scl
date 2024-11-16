import React from 'react';

export function ModernHeader() {
  return (
    <header className="h-16 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="h-full flex items-center justify-center">
        <h1 className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          EMSX MINER
        </h1>
      </div>
    </header>
  );
}