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
    { label: 'Architecture', href: '#architecture' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container">
        <div className="grid-container">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="header-logo text-white mb-4">
                J.MACHHI
              </div>
              <p className="text-body text-gray-300 mb-6 max-w-md">
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
                    className="p-2 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <div className="label text-white mb-4">NAVIGATION</div>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <div className="label text-white mb-4">CONTACT</div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">{personal.location}</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} Jainesh Machhi. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span>Built with React & AWS</span>
                <span>•</span>
                <span>Deployed on S3 + CloudFront</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4 md:mt-0"
              aria-label="Back to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>

          {/* Competitive Programming Stats */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <div className="label text-white mb-4">COMPETITIVE PROGRAMMING</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-400">1681</span>
                <span className="text-gray-400">Codeforces Expert</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-400">1909</span>
                <span className="text-gray-400">Codechef 4⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;