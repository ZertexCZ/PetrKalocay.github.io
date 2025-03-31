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
      {/* Digital circuit board background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2338bdf8' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2338bdf8'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120%',
          animation: 'circuit-move 120s linear infinite',
          opacity: 0.7
        }}></div>
      </div>
      
      {/* Binary code columns background */}
      <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden">
        <div className="binary-rain">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className="binary-column text-xs text-accent/30"
              style={{
                position: 'absolute',
                top: 0,
                left: `${index * 5}%`,
                transform: 'translateY(-100%)',
                animation: `binary-fall ${Math.random() * 40 + 30}s linear infinite ${Math.random() * 10}s`,
                fontSize: '10px',
                fontFamily: 'monospace',
                width: '20px',
                textAlign: 'center',
                whiteSpace: 'pre-wrap'
              }}
            >
              {Array.from({ length: 50 }).map(() => Math.random() > 0.5 ? '1' : '0').join('\n')}
            </div>
          ))}
        </div>
      </div>
      
      {/* Moving particles background effect */}
      <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20">
        {Array.from({ length: 40 }).map((_, index) => (
          <div 
            key={index}
            className="absolute bg-accent rounded-full"
            style={{
              width: `${Math.random() * 15 + 2}px`,
              height: `${Math.random() * 15 + 2}px`,
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
                <div 
                  key={index} 
                  className="px-4 py-2 rounded-full text-sm certificate-tag"
                  style={{
                    background: `linear-gradient(120deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 25, 0.9))`,
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(120deg, rgba(30, 30, 40, 0.9), rgba(20, 20, 30, 1))';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(56, 189, 248, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(120deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 25, 0.9))';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
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
