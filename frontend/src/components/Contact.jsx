import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Download } from 'lucide-react';
import { mockData } from '../mock';

const Contact = () => {
  const { personal } = mockData;

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      primary: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.address,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personal.links.github,
      username: '@Red-0510'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personal.links.linkedin,
      username: 'jainesh-machhi'
    },
    {
      icon: Code,
      label: 'Codeforces',
      href: personal.links.codeforces,
      username: 'jaineshmachhi'
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="label mb-6 tracking-wider opacity-80">GET IN TOUCH</div>
            <h2 className="title-big mb-10">Contact</h2>
            <p className="text-body max-w-4xl mx-auto opacity-90 leading-relaxed">
              Open to discussing backend development opportunities, technical challenges, 
              or collaboration on innovative projects. Let's build something great together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Information */}
              <div>
                <div className="label mb-8 tracking-wider">CONTACT INFORMATION</div>
                <div className="space-y-8">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="flex items-start gap-5 group">
                        <div className="p-4 border border-current opacity-20 flex-shrink-0 group-hover:opacity-40 transition-all duration-300"
                             style={{ borderColor: 'var(--border-color)' }}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="label-small mb-2 tracking-wider opacity-80">
                            {method.label}
                          </div>
                          {method.href ? (
                            <a
                              href={method.href}
                              className={`text-body hover-opacity transition-all duration-300 ${
                                method.primary ? 'font-medium' : ''
                              } group-hover:opacity-100`}
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-body group-hover:opacity-100 transition-opacity">
                              {method.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Social Links */}
                <div className="mt-16">
                  <div className="label mb-8 tracking-wider">CONNECT WITH ME</div>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-6 border hover-lift transition-all duration-300 group"
                          style={{ borderColor: 'var(--border-light)' }}
                        >
                          <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                          <div className="flex-1">
                            <div className="label-small tracking-wider group-hover:opacity-100 transition-opacity">
                              {social.label}
                            </div>
                            <div className="text-body opacity-70 group-hover:opacity-90 transition-opacity">
                              {social.username}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Actions */}
              <div>
                <div className="label mb-8 tracking-wider">QUICK ACTIONS</div>
                <div className="space-y-6">
                  <div className="card hover-lift group">
                    <h3 className="text-regular mb-6 group-hover:opacity-100 transition-opacity">
                      Ready to Collaborate?
                    </h3>
                    <p className="text-body mb-8 opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
                      I'm always open to discussing new opportunities, 
                      technical challenges, or innovative projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`mailto:${personal.email}?subject=Collaboration Opportunity`}
                        className="btn-accent group/btn"
                      >
                        <span className="group-hover/btn:translate-x-1 transition-transform">
                          Send Email
                        </span>
                      </a>
                      <a
                        href={personal.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group/btn"
                      >
                        <span className="group-hover/btn:translate-x-1 transition-transform">
                          Connect on LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="card hover-lift group">
                    <h3 className="text-regular mb-6 group-hover:opacity-100 transition-opacity">
                      Download Resume
                    </h3>
                    <p className="text-body mb-8 opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
                      Get a comprehensive overview of my experience, 
                      skills, and achievements.
                    </p>
                    <button className="btn-primary flex items-center gap-3 group/btn">
                      <Download size={18} className="group-hover/btn:scale-110 transition-transform" />
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        Download CV
                      </span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Availability Status */}
                <div className="mt-10 p-6 border transition-all duration-300 hover-lift group"
                     style={{ 
                       backgroundColor: 'var(--accent-primary)',
                       borderColor: 'var(--accent-primary)',
                       opacity: 0.9
                     }}>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full animate-pulse"
                         style={{ backgroundColor: 'var(--accent-foreground)' }}></div>
                    <div>
                      <div className="label-small tracking-wider"
                           style={{ color: 'var(--accent-foreground)' }}>
                        CURRENTLY
                      </div>
                      <div className="text-body font-medium"
                           style={{ color: 'var(--accent-foreground)' }}>
                        Open to new opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;