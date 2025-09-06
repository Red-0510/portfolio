import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">PROFESSIONAL JOURNEY</div>
            <h2 className="title-big mb-8">Experience</h2>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Connector Line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-8 top-16 w-px h-16 bg-gray-200 hidden md:block"></div>
                )}
                
                <div className="card hover-lift">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Company Logo/Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-lg font-bold">
                        JP
                      </div>
                    </div>
                    
                    {/* Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-regular mb-1">{exp.position}</h3>
                          <p className="label-small mb-2">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm opacity-70">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs uppercase font-mono">
                              {exp.type}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <div className="label-small mb-3">KEY ACHIEVEMENTS</div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-1 h-1 bg-black mt-2 flex-shrink-0"></div>
                              <span className="text-body">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <div className="label-small mb-3">TECHNOLOGIES</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 border border-gray-300 text-xs font-mono uppercase"
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