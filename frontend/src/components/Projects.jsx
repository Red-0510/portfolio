import React from 'react';
import { Calendar, ExternalLink, Github, Play } from 'lucide-react';
import { mockData } from '../mock';

const Projects = () => {
  const { projects } = mockData;

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="label mb-6 tracking-wider opacity-80">SELECTED WORK</div>
            <h2 className="title-big mb-10">Projects</h2>
            <p className="text-body max-w-4xl mx-auto opacity-90 leading-relaxed">
              A showcase of technical projects demonstrating expertise in AI/ML, 
              accessibility solutions, and innovative problem-solving.
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-16">
            {projects.map((project, index) => (
              <div key={project.id} className="card hover-lift group">
                {/* Enhanced Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="label-small tracking-wider opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-2 text-sm opacity-60">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <h3 className="text-regular mb-2 group-hover:opacity-100 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="label-small opacity-70 tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <div className="px-3 py-1 text-xs font-mono uppercase transition-all duration-300"
                       style={{ 
                         backgroundColor: 'var(--color-background)',
                         color: 'var(--text-primary)',
                         border: '1px solid var(--border-light)'
                       }}>
                    {project.type}
                  </div>
                </div>

                {/* Enhanced Project Description */}
                <p className="text-body mb-8 opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>

                {/* Enhanced Project Features */}
                <div className="mb-8">
                  <div className="label-small mb-4 tracking-wider">KEY FEATURES</div>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4 group/feature">
                        <div className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 transition-all duration-300"
                             style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                        <span className="text-body text-sm leading-relaxed group-hover/feature:opacity-100 transition-opacity">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies */}
                <div className="mb-8">
                  <div className="label-small mb-4 tracking-wider">TECHNOLOGIES</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 border text-xs font-mono uppercase transition-all duration-300 hover-lift"
                        style={{ borderColor: 'var(--border-light)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Project Links */}
                <div className="flex items-center gap-4 pt-6 border-t transition-all duration-300"
                     style={{ borderColor: 'var(--border-light)' }}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2 group/link"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                      <span className="group-hover/link:translate-x-1 transition-transform">Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2 group/link"
                    >
                      <Play size={16} className="group-hover/link:scale-110 transition-transform" />
                      <span className="group-hover/link:translate-x-1 transition-transform">Demo</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2 group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                      <span className="group-hover/link:translate-x-1 transition-transform">Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <p className="text-body mb-8 opacity-90 leading-relaxed">
              Interested in seeing more projects or collaborating?
            </p>
            <a
              href="https://github.com/Red-0510"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent group"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                View All Projects on GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;