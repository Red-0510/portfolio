import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-none border border-current hover-opacity transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          size={20} 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-0 rotate-90 scale-75' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon 
          size={20} 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
      
      {/* Subtle glow effect for dark theme */}
      <div className={`absolute inset-0 rounded-none transition-all duration-300 ${
        theme === 'dark' 
          ? 'shadow-[0_0_10px_rgba(0,212,255,0.3)] opacity-0 group-hover:opacity-100' 
          : ''
      }`}></div>
    </button>
  );
};

export default ThemeToggle;