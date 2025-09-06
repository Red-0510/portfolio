import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="header-logo">
            J.MACHHI
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-opacity"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover-opacity"
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