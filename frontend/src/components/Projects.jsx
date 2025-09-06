import React from 'react';
import { Calendar, ExternalLink, Github, Play } from 'lucide-react';
import { mockData } from '../mock';

const Projects = () => {
  const { projects } = mockData;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">SELECTED WORK</div>
            <h2 className="title-big mb-8">Projects</h2>
            <p className="text-body max-w-3xl mx-auto opacity-80">
              A showcase of technical projects demonstrating expertise in AI/ML, 
              accessibility solutions, and innovative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.id} className="card hover-lift group">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="label-small">{String(index + 1).padStart(2, '0')}</span>
                      <div className="flex items-center gap-1 text-sm opacity-60">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <h3 className="text-regular mb-1">{project.title}</h3>
                    <p className="label-small opacity-70">{project.subtitle}</p>
                  </div>
                  
                  <div className="px-2 py-1 bg-gray-100 text-xs font-mono uppercase">
                    {project.type}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-body mb-6 opacity-80">
                  {project.description}
                </p>

                {/* Project Features */}
                <div className="mb-6">
                  <div className="label-small mb-3">KEY FEATURES</div>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="label-small mb-3">TECHNOLOGIES</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 border border-gray-300 text-xs font-mono uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2"
                    >
                      <Play size={16} />
                      Demo
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-body mb-6 opacity-80">
              Interested in seeing more projects or collaborating?
            </p>
            <a
              href="https://github.com/Red-0510"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;