import React from 'react';
import { Code, Cloud, Database, Brain, Wrench } from 'lucide-react';
import { mockData } from '../mock';

const Skills = () => {
  const { skills } = mockData;

  const skillCategories = [
    {
      ...skills.languages,
      icon: Code,
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      ...skills.technologies,
      icon: Wrench,
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      ...skills.cloud,
      icon: Cloud,
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      ...skills.databases,
      icon: Database,
      gradient: "from-orange-500/20 to-orange-600/20"
    },
    {
      ...skills.ai,
      icon: Brain,
      gradient: "from-red-500/20 to-red-600/20"
    }
  ];

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="label mb-6 tracking-wider opacity-80">TECHNICAL EXPERTISE</div>
            <h2 className="title-big mb-10">Skills</h2>
            <p className="text-body max-w-4xl mx-auto opacity-90 leading-relaxed">
              Comprehensive technology stack with focus on backend development, 
              cloud infrastructure, and modern software engineering practices.
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="card hover-lift group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 border border-current opacity-20 group-hover:opacity-40 transition-all duration-300"
                         style={{ borderColor: 'var(--border-color)' }}>
                      <Icon size={28} />
                    </div>
                    <h3 className="label tracking-wider group-hover:opacity-100 transition-opacity">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => {
                      const isElementary = skill.includes('*');
                      const skillName = skill.replace('*', '');
                      
                      return (
                        <div key={skillIndex} className="flex items-center justify-between group/skill">
                          <span className={`text-body transition-opacity duration-300 ${
                            isElementary ? 'opacity-60' : 'opacity-90'
                          } group-hover/skill:opacity-100`}>
                            {skillName}
                          </span>
                          {isElementary && (
                            <span className="text-xs font-mono opacity-40 uppercase tracking-wider transition-opacity group-hover/skill:opacity-60">
                              Elementary
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Proficiency Legend */}
          <div className="text-center mt-16">
            <div className="label-small mb-6 tracking-wider">PROFICIENCY LEVELS</div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="w-4 h-4 transition-all duration-300"
                     style={{ backgroundColor: 'var(--text-primary)' }}></div>
                <span className="group-hover:opacity-100 transition-opacity">Advanced / Professional</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-4 h-4 opacity-40 transition-all duration-300"
                     style={{ backgroundColor: 'var(--text-primary)' }}></div>
                <span className="opacity-60 group-hover:opacity-80 transition-opacity">Elementary / Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;