import React from 'react';
import { Award, Trophy, Star, Target, Medal } from 'lucide-react';
import { mockData } from '../mock';

const Achievements = () => {
  const { achievements } = mockData;

  const getIcon = (type) => {
    switch (type) {
      case 'Certification':
        return Award;
      case 'Competition':
        return Trophy;
      case 'Rating':
        return Star;
      default:
        return Medal;
    }
  };

  const getColorClass = (type) => {
    switch (type) {
      case 'Certification':
        return 'border-blue-400/30 bg-blue-400/10';
      case 'Competition':
        return 'border-green-400/30 bg-green-400/10';
      case 'Rating':
        return 'border-purple-400/30 bg-purple-400/10';
      default:
        return 'border-gray-400/30 bg-gray-400/10';
    }
  };

  return (
    <section id="achievements" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        <div className="grid-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="label mb-6 tracking-wider opacity-80">RECOGNITION & AWARDS</div>
            <h2 className="title-big mb-10">Achievements</h2>
            <p className="text-body max-w-4xl mx-auto opacity-90 leading-relaxed">
              A track record of excellence in competitive programming, hackathons, 
              and professional certifications demonstrating continuous learning and growth.
            </p>
          </div>

          {/* Enhanced Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {achievements.map((achievement) => {
              const Icon = getIcon(achievement.type);
              const colorClass = getColorClass(achievement.type);
              
              return (
                <div key={achievement.id} className="card hover-lift group">
                  <div className="flex items-start gap-5">
                    <div className={`p-4 border-2 flex-shrink-0 transition-all duration-300 ${colorClass} group-hover:scale-105`}>
                      <Icon size={28} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="label-small tracking-wider opacity-70">
                          {achievement.type}
                        </span>
                        <span className="text-sm opacity-60 font-mono">
                          {achievement.date}
                        </span>
                      </div>
                      
                      <h3 className="text-regular mb-3 group-hover:opacity-100 transition-opacity leading-tight">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-body opacity-80 group-hover:opacity-95 transition-opacity leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Competitive Programming Stats */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="label mb-8 text-center tracking-wider">COMPETITIVE PROGRAMMING</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card text-center hover-lift group">
                <div className="text-big mb-4 transition-all duration-300"
                     style={{ color: 'var(--accent-primary)' }}>1681</div>
                <div className="label mb-2 tracking-wider group-hover:opacity-100 transition-opacity">
                  CODEFORCES RATING
                </div>
                <div className="text-body opacity-70 group-hover:opacity-90 transition-opacity">
                  Expert Level
                </div>
              </div>
              
              <div className="card text-center hover-lift group">
                <div className="text-big mb-4 transition-all duration-300"
                     style={{ color: 'var(--accent-primary)' }}>1909</div>
                <div className="label mb-2 tracking-wider group-hover:opacity-100 transition-opacity">
                  CODECHEF RATING
                </div>
                <div className="text-body opacity-70 group-hover:opacity-90 transition-opacity">
                  4⭐ Rating
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Education */}
          <div className="max-w-4xl mx-auto">
            <div className="label mb-8 text-center tracking-wider">EDUCATION</div>
            <div className="card hover-lift group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="flex-1">
                  <h3 className="text-regular mb-4 group-hover:opacity-100 transition-opacity leading-tight">
                    Sardar Vallabhbhai National Institute of Technology, Surat
                  </h3>
                  <p className="label-small mb-3 tracking-wider opacity-80">
                    B.TECH. COMPUTER SCIENCE AND ENGINEERING
                  </p>
                  <p className="text-body opacity-70 font-mono">2021 – 2025</p>
                </div>
                <div className="text-center mt-6 md:mt-0 md:ml-8">
                  <div className="text-big mb-2 transition-all duration-300"
                       style={{ color: 'var(--accent-primary)' }}>8.87</div>
                  <div className="label-small tracking-wider opacity-80">CGPA / 10</div>
                </div>
              </div>
              
              <div>
                <div className="label-small mb-4 tracking-wider">RELEVANT COURSES</div>
                <div className="flex flex-wrap gap-3">
                  {mockData.education.relevantCourses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 text-xs font-mono border transition-all duration-300 hover-lift"
                      style={{ 
                        backgroundColor: 'var(--color-background)',
                        borderColor: 'var(--border-light)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;