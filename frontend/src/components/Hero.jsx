import React from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { mockData } from '../mock';
import AnimatedArchitecture from './AnimatedArchitecture';

const Hero = () => {
  const { personal, about } = mockData;

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Full Viewport Animated Architecture Background */}
      {/* <AnimatedArchitecture /> */}
      
      <div className="container relative z-10">
        <div className="grid-container">
          {/* Reduced Size Name and Title */}
          <div className="text-center space-y-4 mb-8">
            <div className="label-small">SOFTWARE ENGINEER</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-none mb-4 opacity-90">
              {personal.name.split(' ')[0]}.<br />
              <span className="text-4xl md:text-6xl lg:text-7xl">{personal.name.split(' ')[1]}</span>
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-medium opacity-90">
              {personal.title}
            </div>
          </div>

          {/* Compact Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-body mb-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 border border-gray-300 hover-lift">
              <MapPin size={16} />
              <span className="font-medium">{personal.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 border border-gray-300 hover-lift">
              <Mail size={16} />
              <a href={`mailto:${personal.email}`} className="hover-opacity font-medium">
                {personal.email}
              </a>
            </div>
          </div>

          {/* Concise Description */}
          <div className="text-lg max-w-4xl mx-auto text-center mb-8 bg-white/90 backdrop-blur-sm p-6 border border-gray-300 leading-relaxed">
            <strong>Backend Developer</strong> specializing in high-availability microservices, 
            cloud infrastructure, and real-time data processing. Currently at <strong>JP Morgan Chase & Co</strong>, 
            building scalable financial systems using .NET Core, AWS, and distributed architectures.
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="text-center p-4 bg-white/95 backdrop-blur-sm border border-gray-300 hover-lift">
              <div className="text-xl font-bold mb-1 text-green-600">1681</div>
              <div className="label-small text-xs">CODEFORCES</div>
            </div>
            <div className="text-center p-4 bg-white/95 backdrop-blur-sm border border-gray-300 hover-lift">
              <div className="text-xl font-bold mb-1 text-blue-600">AWS</div>
              <div className="label-small text-xs">CERTIFIED</div>
            </div>
            <div className="text-center p-4 bg-white/95 backdrop-blur-sm border border-gray-300 hover-lift">
              <div className="text-xl font-bold mb-1 text-purple-600">25%</div>
              <div className="label-small text-xs">COST SAVED</div>
            </div>
            <div className="text-center p-4 bg-white/95 backdrop-blur-sm border border-gray-300 hover-lift">
              <div className="text-xl font-bold mb-1 text-orange-600">95%</div>
              <div className="label-small text-xs">EFFICIENCY</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#experience" className="btn-accent px-8 py-3">
              View Experience
            </a>
            <a href="#projects" className="btn-primary px-8 py-3">
              See Projects
            </a>
            <a href="#contact" className="btn-ghost px-8 py-3">
              Get In Touch
            </a>
          </div>

          {/* Architecture Note */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 border border-green-200 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Live Architecture: S3 → CloudFront → Your Browser</span>
            </div>
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