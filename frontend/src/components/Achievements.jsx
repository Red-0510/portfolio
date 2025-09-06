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
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'Competition':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'Rating':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container">
        <div className="grid-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="label mb-4">RECOGNITION & AWARDS</div>
            <h2 className="title-big mb-8">Achievements</h2>
            <p className="text-body max-w-3xl mx-auto opacity-80">
              A track record of excellence in competitive programming, hackathons, 
              and professional certifications demonstrating continuous learning and growth.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {achievements.map((achievement) => {
              const Icon = getIcon(achievement.type);
              const colorClass = getColorClass(achievement.type);
              
              return (
                <div key={achievement.id} className="card hover-lift group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colorClass} border rounded-none flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="label-small">{achievement.type}</span>
                        <span className="text-sm opacity-60">{achievement.date}</span>
                      </div>
                      
                      <h3 className="text-regular mb-2 group-hover:text-black transition-colors">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-body opacity-80">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Competitive Programming Stats */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="label mb-6 text-center">COMPETITIVE PROGRAMMING</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card text-center">
                <div className="text-big mb-2">1681</div>
                <div className="label mb-1">CODEFORCES RATING</div>
                <div className="text-body opacity-60">Expert Level</div>
              </div>
              
              <div className="card text-center">
                <div className="text-big mb-2">1909</div>
                <div className="label mb-1">CODECHEF RATING</div>
                <div className="text-body opacity-60">4⭐ Rating</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="label mb-6 text-center">EDUCATION</div>
            <div className="card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-regular mb-2">
                    Sardar Vallabhbhai National Institute of Technology, Surat
                  </h3>
                  <p className="label-small mb-2">B.TECH. COMPUTER SCIENCE AND ENGINEERING</p>
                  <p className="text-body opacity-60">2021 – 2025</p>
                </div>
                <div className="text-center mt-4 md:mt-0">
                  <div className="text-big">8.87</div>
                  <div className="label-small">CGPA / 10</div>
                </div>
              </div>
              
              <div>
                <div className="label-small mb-3">RELEVANT COURSES</div>
                <div className="flex flex-wrap gap-2">
                  {mockData.education.relevantCourses.map((course, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs font-mono"
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