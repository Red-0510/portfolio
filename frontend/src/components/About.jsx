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
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">WHO I AM</div>
            <h2 className="title-big mb-8">About</h2>
            <div className="text-body max-w-4xl mx-auto">
              {about.description}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="card hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-regular mb-2">{highlight.title}</h3>
                      <p className="text-body opacity-80">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Highlights */}
          <div className="max-w-4xl mx-auto">
            <div className="label mb-6">KEY STRENGTHS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                  <p className="text-body">{highlight}</p>
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