import React from 'react';
import { Code, Cloud, Database, Brain, Wrench } from 'lucide-react';
import { mockData } from '../mock';

const Skills = () => {
  const { skills } = mockData;

  const skillCategories = [
    {
      ...skills.languages,
      icon: Code,
      color: "bg-blue-50 border-blue-200"
    },
    {
      ...skills.technologies,
      icon: Wrench,
      color: "bg-green-50 border-green-200"
    },
    {
      ...skills.cloud,
      icon: Cloud,
      color: "bg-purple-50 border-purple-200"
    },
    {
      ...skills.databases,
      icon: Database,
      color: "bg-orange-50 border-orange-200"
    },
    {
      ...skills.ai,
      icon: Brain,
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">TECHNICAL EXPERTISE</div>
            <h2 className="title-big mb-8">Skills</h2>
            <p className="text-body max-w-3xl mx-auto opacity-80">
              Comprehensive technology stack with focus on backend development, 
              cloud infrastructure, and modern software engineering practices.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="card hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${category.color} rounded-none`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="label">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.items.map((skill, skillIndex) => {
                      const isElementary = skill.includes('*');
                      const skillName = skill.replace('*', '');
                      
                      return (
                        <div key={skillIndex} className="flex items-center justify-between">
                          <span className={`text-body ${isElementary ? 'opacity-60' : ''}`}>
                            {skillName}
                          </span>
                          {isElementary && (
                            <span className="text-xs font-mono opacity-40 uppercase">
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

          {/* Proficiency Legend */}
          <div className="text-center mt-12">
            <div className="label-small mb-4">PROFICIENCY LEVELS</div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black"></div>
                <span>Advanced / Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400"></div>
                <span>Elementary / Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;