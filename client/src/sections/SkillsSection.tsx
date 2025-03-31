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
      {/* Moving particles background effect */}
      <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute bg-accent/10 rounded-full"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 50 + 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl animate-float-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl animate-float-horizontal-slow"></div>
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
