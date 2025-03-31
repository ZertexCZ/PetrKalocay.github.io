import { useRef } from 'react';
import { skills, certifications } from '@/data/skills';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16 bg-card overflow-hidden"
    >
      {/* Dynamic code-like background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%2338bdf8' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/svg%3E")`,
          backgroundPosition: 'center',
          backgroundSize: '300px 300px'
        }}></div>
      </div>
      
      {/* Moving particles background effect */}
      <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-30">
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={index}
            className="absolute bg-accent rounded-full"
            style={{
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 50 + 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Animated glowing orbs */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-accent/20 to-blue-500/5 blur-2xl animate-float-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/5 blur-2xl animate-float-horizontal-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent blur-2xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              Skills & <span className="text-accent">Expertise</span>
            </h2>
            <div></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card group">
                <div className="text-2xl text-accent mb-4">
                  <i className={skill.icon}></i>
                </div>
                <h3 className="text-xl font-clash font-semibold mb-2 group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl md:text-2xl font-clash font-semibold mb-6">Technical Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="px-4 py-2 bg-background rounded-full border border-muted text-sm">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
