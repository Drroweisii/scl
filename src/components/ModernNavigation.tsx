import React from 'react';
import { Home, Wallet, Users, CheckSquare } from 'lucide-react';

export function ModernNavigation() {
  const navItems = [
    { name: 'MINE', icon: <Home className="w-5 h-5" />, active: true },
    { name: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
    { name: 'Referral', icon: <Users className="w-5 h-5" /> },
    { name: 'Tasks', icon: <CheckSquare className="w-5 h-5" /> },
  ];

  return (
    <nav className="h-16 bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="h-full flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors
              ${item.active 
                ? 'text-purple-400' 
                : 'text-gray-400 hover:text-gray-300'}`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}