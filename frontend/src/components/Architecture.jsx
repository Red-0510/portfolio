import React from 'react';
import { 
  Globe, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  Cloud,
  Monitor,
  Smartphone,
  Wifi,
  Lock,
  BarChart3
} from 'lucide-react';

const Architecture = () => {
  const architectureFlow = [
    {
      id: 1,
      title: "User Request",
      description: "User enters domain in browser",
      icon: Globe,
      details: ["HTTPS Request", "DNS Resolution", "Geographic Location"]
    },
    {
      id: 2,
      title: "Route 53 DNS",
      description: "AWS Route 53 resolves domain to CloudFront",
      icon: Wifi,
      details: ["Global DNS Network", "Health Check Routing", "Latency-based Routing"]
    },
    {
      id: 3,
      title: "CloudFront CDN",
      description: "Edge location serves cached content",
      icon: Zap,
      details: ["200+ Edge Locations", "Cache Optimization", "SSL/TLS Termination"]
    },
    {
      id: 4,
      title: "S3 Origin",
      description: "Static files served from S3 bucket",
      icon: Database,
      details: ["React Build Files", "Static Assets", "Gzip Compression"]
    },
    {
      id: 5,
      title: "Browser Rendering",
      description: "React app hydrated and rendered",
      icon: Monitor,
      details: ["Client-side Routing", "Component Hydration", "Responsive Layout"]
    }
  ];

  const performanceMetrics = [
    {
      metric: "First Contentful Paint",
      value: "< 1.2s",
      description: "Time to first visual element"
    },
    {
      metric: "Largest Contentful Paint", 
      value: "< 2.5s",
      description: "Time to main content load"
    },
    {
      metric: "Cumulative Layout Shift",
      value: "< 0.1",
      description: "Visual stability score"
    },
    {
      metric: "Time to Interactive",
      value: "< 3.8s", 
      description: "Time to full interactivity"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: Monitor,
      technologies: ["React 19", "Tailwind CSS", "Responsive Design", "ES6+ JavaScript"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      category: "Build & Deployment",
      icon: Cloud,
      technologies: ["Create React App", "Webpack Bundle", "Asset Optimization", "CI/CD Pipeline"],
      color: "bg-green-50 border-green-200"
    },
    {
      category: "AWS Infrastructure",
      icon: Server,
      technologies: ["S3 Static Hosting", "CloudFront CDN", "Route 53 DNS", "Certificate Manager"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      category: "Performance & Security",
      icon: Shield,
      technologies: ["HTTPS/SSL", "Gzip Compression", "Cache Headers", "Security Headers"],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="architecture" className="py-20">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">SYSTEM DESIGN</div>
            <h2 className="title-big mb-8">Architecture</h2>
            <p className="text-body max-w-4xl mx-auto opacity-80">
              Complete architecture overview demonstrating modern web deployment practices, 
              AWS cloud infrastructure, and performance optimization strategies for static content delivery.
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="mb-20">
            <div className="label mb-8 text-center">REQUEST-TO-RENDER FLOW</div>
            <div className="relative">
              {/* Desktop Flow */}
              <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto">
                {architectureFlow.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center mb-4 mx-auto">
                          <Icon size={32} />
                        </div>
                        <div className="w-48">
                          <h3 className="label-small mb-2">{step.title}</h3>
                          <p className="text-body text-sm mb-3">{step.description}</p>
                          <div className="space-y-1">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="text-xs opacity-60">
                                • {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {index < architectureFlow.length - 1 && (
                        <ArrowRight className="mx-4 text-gray-400" size={24} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Flow */}
              <div className="lg:hidden space-y-6">
                {architectureFlow.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id}>
                      <div className="card">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <Icon size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="label-small">STEP {step.id}</span>
                              <h3 className="text-regular">{step.title}</h3>
                            </div>
                            <p className="text-body mb-3">{step.description}</p>
                            <div className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="text-sm opacity-60">
                                  • {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < architectureFlow.length - 1 && (
                        <div className="flex justify-center">
                          <ArrowRight className="rotate-90 text-gray-400" size={24} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <div className="label mb-8 text-center">TECHNOLOGY STACK</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {techStack.map((stack, index) => {
                const Icon = stack.icon;
                return (
                  <div key={index} className="card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 ${stack.color} rounded-none`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="label">{stack.category}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="text-body text-sm py-1">
                          • {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-20">
            <div className="label mb-8 text-center">PERFORMANCE METRICS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="card text-center">
                  <div className="text-big mb-2">{metric.value}</div>
                  <div className="label-small mb-2">{metric.metric}</div>
                  <div className="text-body text-sm opacity-60">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Benefits */}
          <div className="max-w-6xl mx-auto">
            <div className="label mb-8 text-center">ARCHITECTURE BENEFITS</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100">
                    <Zap size={20} />
                  </div>
                  <h3 className="label">PERFORMANCE</h3>
                </div>
                <ul className="space-y-2 text-body text-sm">
                  <li>• Global CDN distribution</li>
                  <li>• Sub-second load times</li>
                  <li>• Optimized asset delivery</li>
                  <li>• Efficient caching strategy</li>
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100">
                    <Shield size={20} />
                  </div>
                  <h3 className="label">SECURITY</h3>
                </div>
                <ul className="space-y-2 text-body text-sm">
                  <li>• HTTPS encryption</li>
                  <li>• AWS security headers</li>
                  <li>• DDoS protection</li>
                  <li>• Origin access identity</li>
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="label">SCALABILITY</h3>
                </div>
                <ul className="space-y-2 text-body text-sm">
                  <li>• Auto-scaling CDN</li>
                  <li>• Global edge locations</li>
                  <li>• Serverless architecture</li>
                  <li>• Cost-effective scaling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Optimization */}
          <div className="text-center mt-16">
            <div className="card max-w-4xl mx-auto">
              <h3 className="text-regular mb-4">Cost Optimization Strategy</h3>
              <p className="text-body mb-6 opacity-80">
                This architecture provides enterprise-grade performance and security 
                at minimal cost through efficient use of AWS services and static content optimization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500"></div>
                  <span>S3: ~$0.023/GB storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500"></div>
                  <span>CloudFront: ~$0.085/GB transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500"></div>
                  <span>Route 53: ~$0.50/hosted zone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;