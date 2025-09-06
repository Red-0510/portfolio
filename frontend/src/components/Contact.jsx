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
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">GET IN TOUCH</div>
            <h2 className="title-big mb-8">Contact</h2>
            <p className="text-body max-w-3xl mx-auto opacity-80">
              Open to discussing backend development opportunities, technical challenges, 
              or collaboration on innovative projects. Let's build something great together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="label mb-6">CONTACT INFORMATION</div>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-3 bg-gray-100 flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="label-small mb-1">{method.label}</div>
                          {method.href ? (
                            <a
                              href={method.href}
                              className={`text-body hover-opacity ${
                                method.primary ? 'font-medium' : ''
                              }`}
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-body">{method.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <div className="label mb-6">CONNECT WITH ME</div>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 border border-gray-200 hover-lift transition-all group"
                        >
                          <Icon size={20} className="group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="label-small">{social.label}</div>
                            <div className="text-body opacity-70">{social.username}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <div className="label mb-6">QUICK ACTIONS</div>
                <div className="space-y-4">
                  <div className="card">
                    <h3 className="text-regular mb-4">Ready to Collaborate?</h3>
                    <p className="text-body mb-6 opacity-80">
                      I'm always open to discussing new opportunities, 
                      technical challenges, or innovative projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`mailto:${personal.email}?subject=Collaboration Opportunity`}
                        className="btn-accent"
                      >
                        Send Email
                      </a>
                      <a
                        href={personal.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-regular mb-4">Download Resume</h3>
                    <p className="text-body mb-6 opacity-80">
                      Get a comprehensive overview of my experience, 
                      skills, and achievements.
                    </p>
                    <button className="btn-primary flex items-center gap-2">
                      <Download size={16} />
                      Download CV
                    </button>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-green-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="label-small text-green-800">CURRENTLY</div>
                      <div className="text-body text-green-700">
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