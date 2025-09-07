import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Red-0510', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jainesh-machhi', label: 'LinkedIn' },
    { icon: Code, href: 'https://codeforces.com/profile/jaineshmachhi', label: 'Codeforces' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-opacity-20" 
            style={{
              backgroundColor: 'var(--bg-white)',
              borderColor: 'var(--border-light)'
            }}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="header-logo">
            J.MACHHI
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-opacity transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="w-px h-6 bg-current opacity-20 mx-2"></div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover-opacity transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-opacity-20 py-6" 
               style={{ borderColor: 'var(--border-light)' }}>
            <nav className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-left py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 pt-4 border-t border-opacity-20" 
                 style={{ borderColor: 'var(--border-light)' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover-opacity transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;