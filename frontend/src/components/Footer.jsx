import React from 'react';
import { Github, Linkedin, Code, Mail, ArrowUp } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { personal } = mockData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personal.links.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.links.linkedin, label: 'LinkedIn' },
    { icon: Code, href: personal.links.codeforces, label: 'Codeforces' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 transition-all duration-300" 
            style={{ 
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-white)'
            }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Enhanced Brand */}
            <div className="lg:col-span-2">
              <div className="header-logo mb-6" style={{ color: 'var(--bg-white)' }}>
                J.MACHHI
              </div>
              <p className="text-body mb-8 max-w-md leading-relaxed opacity-80">
                Software Development Engineer specializing in backend systems, 
                microservices architecture, and cloud infrastructure.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-current opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 group"
                    aria-label={label}
                    style={{ borderColor: 'var(--bg-white)', color: 'var(--bg-white)' }}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Navigation */}
            <div>
              <div className="label mb-6 tracking-wider" style={{ color: 'var(--bg-white)' }}>
                NAVIGATION
              </div>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block opacity-70 hover:opacity-100 transition-all duration-300 text-sm hover:translate-x-1"
                    style={{ color: 'var(--bg-white)' }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Enhanced Contact Info */}
            <div>
              <div className="label mb-6 tracking-wider" style={{ color: 'var(--bg-white)' }}>
                CONTACT
              </div>
              <div className="space-y-3 text-sm">
                <p className="opacity-70" style={{ color: 'var(--bg-white)' }}>
                  {personal.location}
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="block opacity-70 hover:opacity-100 transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'var(--bg-white)' }}
                >
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  className="block opacity-70 hover:opacity-100 transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'var(--bg-white)' }}
                >
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-current border-opacity-20">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm opacity-70">
              <p style={{ color: 'var(--bg-white)' }}>
                © {currentYear} Jainesh Machhi. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span style={{ color: 'var(--bg-white)' }}>Built with React & AWS</span>
                <span style={{ color: 'var(--bg-white)' }}>•</span>
                <span style={{ color: 'var(--bg-white)' }}>Deployed on S3 + CloudFront</span>
              </div>
            </div>

            {/* Enhanced Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-all duration-300 mt-6 md:mt-0 group"
              aria-label="Back to top"
              style={{ color: 'var(--bg-white)' }}
            >
              <span className="text-sm group-hover:translate-x-1 transition-transform">
                Back to top
              </span>
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced Competitive Programming Stats */}
          <div className="mt-16 pt-10 border-t border-current border-opacity-20 text-center">
            <div className="label mb-6 tracking-wider" style={{ color: 'var(--bg-white)' }}>
              COMPETITIVE PROGRAMMING
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <div className="flex items-center gap-3 group">
                <span className="text-xl font-bold transition-all duration-300"
                      style={{ color: 'var(--accent-primary)' }}>1681</span>
                <span className="opacity-70 group-hover:opacity-90 transition-opacity"
                      style={{ color: 'var(--bg-white)' }}>
                  Codeforces Expert
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-current opacity-20"></div>
              <div className="flex items-center gap-3 group">
                <span className="text-xl font-bold transition-all duration-300"
                      style={{ color: 'var(--accent-primary)' }}>1909</span>
                <span className="opacity-70 group-hover:opacity-90 transition-opacity"
                      style={{ color: 'var(--bg-white)' }}>
                  Codechef 4⭐
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;