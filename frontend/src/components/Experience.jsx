import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="label mb-6 tracking-wider opacity-80">PROFESSIONAL JOURNEY</div>
            <h2 className="title-big mb-10">Experience</h2>
          </div>

          {/* Enhanced Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-16 last:mb-0">
                {/* Enhanced Connector Line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-10 top-20 w-px h-20 hidden md:block transition-all duration-300"
                       style={{ backgroundColor: 'var(--border-light)' }}></div>
                )}
                
                <div className="card hover-lift group">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Enhanced Company Logo/Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 border-2 flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-105"
                           style={{ 
                             borderColor: 'var(--border-color)',
                             backgroundColor: 'var(--color-background)',
                             color: 'var(--text-primary)'
                           }}>
                        JP
                      </div>
                    </div>
                    
                    {/* Enhanced Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-regular mb-2 group-hover:opacity-100 transition-opacity">
                            {exp.position}
                          </h3>
                          <p className="label-small mb-4 opacity-80">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-6 text-sm opacity-70">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="px-3 py-1 text-xs uppercase font-mono transition-all duration-300"
                                 style={{ 
                                   backgroundColor: 'var(--accent-primary)',
                                   color: 'var(--accent-foreground)'
                                 }}>
                              {exp.type}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Achievements */}
                      <div className="mb-8">
                        <div className="label-small mb-4 tracking-wider">KEY ACHIEVEMENTS</div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-4 group/item">
                              <div className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 transition-all duration-300"
                                   style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                              <span className="text-body leading-relaxed group-hover/item:opacity-100 transition-opacity">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Enhanced Technologies */}
                      <div>
                        <div className="label-small mb-4 tracking-wider">TECHNOLOGIES</div>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 border text-xs font-mono uppercase transition-all duration-300 hover-lift"
                              style={{ borderColor: 'var(--border-light)' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;