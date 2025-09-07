import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  const { about } = mockData;

  const highlights = [
    {
      icon: Code,
      title: "Microservices Expert",
      description: "Specialized in high-availability microservices using .NET Core and Spring Boot"
    },
    {
      icon: Zap,
      title: "Performance Optimizer",
      description: "Proven track record of reducing costs by 25% and improving efficiency by 95%"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Direct client engagement to align deliverables with business goals"
    },
    {
      icon: Award,
      title: "Competition Winner",
      description: "Multiple hackathon wins and competitive programming achievements"
    }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="label mb-6 tracking-wider opacity-80">WHO I AM</div>
            <h2 className="title-big mb-10">About</h2>
            <div className="text-body max-w-4xl mx-auto leading-relaxed opacity-90">
              {about.description}
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="card hover-lift group">
                  <div className="flex items-start gap-6">
                    <div className="p-4 border border-current opacity-20 flex-shrink-0 group-hover:opacity-40 transition-all duration-300"
                         style={{ borderColor: 'var(--border-color)' }}>
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-regular mb-3 group-hover:opacity-100 transition-opacity">
                        {highlight.title}
                      </h3>
                      <p className="text-body opacity-80 group-hover:opacity-90 transition-opacity leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Key Highlights */}
          <div className="max-w-5xl mx-auto">
            <div className="label mb-8 tracking-wider">KEY STRENGTHS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 mt-3 flex-shrink-0 transition-all duration-300"
                       style={{ 
                         backgroundColor: 'var(--accent-primary)',
                         boxShadow: 'var(--theme) === "dark" ? 0 0 8px rgba(57, 255, 20, 0.6) : none'
                       }}></div>
                  <p className="text-body leading-relaxed group-hover:opacity-100 transition-opacity">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;