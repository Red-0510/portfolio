import React from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const { personal, about } = mockData;

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      <div className="container relative z-10">
        <div className="grid-container">
          {/* Enhanced Name and Title */}
          <div className="text-center space-y-6 mb-10">
            <div className="label-small tracking-wider">SOFTWARE ENGINEER</div>
            <h1 className="hero-title mb-6">
              {personal.name.split(' ')[0]}.<br />
              <span className="text-5xl md:text-6xl lg:text-7xl opacity-90">{personal.name.split(' ')[1]}</span>
            </h1>
            <div className="text-big max-w-4xl mx-auto opacity-95 leading-tight">
              {personal.title}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-body mb-10">
            <div className="flex items-center gap-3 card px-6 py-3 hover-lift">
              <MapPin size={18} className="opacity-70"/>
              <span className="font-medium">{personal.location}</span>
            </div>
            <div className="flex items-center gap-3 card px-6 py-3 hover-lift">
              <Mail size={18} className="opacity-70"/>
              <a href={`mailto:${personal.email}`} className="hover-opacity font-medium">
                {personal.email}
              </a>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="text-lg max-w-5xl mx-auto text-center mb-12 card p-8 leading-relaxed">
            <strong>Backend Developer</strong> specializing in high-availability microservices, 
            cloud infrastructure, and real-time data processing. Currently at <strong>JP Morgan Chase & Co</strong>, 
            building scalable financial systems using .NET Core, AWS, and distributed architectures.
          </div>

          {/* Enhanced Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <div className="text-center card p-6 hover-lift group">
              <div className="text-2xl font-bold mb-2 transition-colors duration-300" 
                   style={{ color: 'var(--accent-primary)' }}>1681</div>
              <div className="label-small opacity-70 group-hover:opacity-100 transition-opacity">CODEFORCES</div>
            </div>
            <div className="text-center card p-6 hover-lift group">
              <div className="text-2xl font-bold mb-2 transition-colors duration-300" 
                   style={{ color: 'var(--accent-primary)' }}>AWS</div>
              <div className="label-small opacity-70 group-hover:opacity-100 transition-opacity">CERTIFIED</div>
            </div>
            <div className="text-center card p-6 hover-lift group">
              <div className="text-2xl font-bold mb-2 transition-colors duration-300" 
                   style={{ color: 'var(--accent-primary)' }}>25%</div>
              <div className="label-small opacity-70 group-hover:opacity-100 transition-opacity">COST SAVED</div>
            </div>
            <div className="text-center card p-6 hover-lift group">
              <div className="text-2xl font-bold mb-2 transition-colors duration-300" 
                   style={{ color: 'var(--accent-primary)' }}>95%</div>
              <div className="label-small opacity-70 group-hover:opacity-100 transition-opacity">EFFICIENCY</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#experience" className="btn-accent px-10 py-4 group">
              <span className="transition-transform group-hover:translate-x-1">View Experience</span>
            </a>
            <a href="#projects" className="btn-primary px-10 py-4 group">
              <span className="transition-transform group-hover:translate-x-1">See Projects</span>
            </a>
            <a href="#contact" className="btn-ghost px-10 py-4 group">
              <span className="transition-transform group-hover:translate-x-1">Get In Touch</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown size={24} className="opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;