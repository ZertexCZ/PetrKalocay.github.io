import { useRef } from 'react';
import { projects } from '@/data/projects';
import { translations } from '@/data/translations';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #121218 0%, #1a1a24 50%, #121218 100%, #121218 100%)",
        backgroundSize: "200% 200%",
        animation: "bg-pulse 15s ease infinite",
        boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.2)"
      }}
    >
      {/* Vylepšený animovaný 3D mřížkový efekt */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background/0 z-10"></div>
        <div className="grid-animation absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(80deg)',
          backgroundPosition: 'center',
          transformOrigin: 'center center',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      {/* Šestiúhelníkový vzor */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%2338bdf8' fill-opacity='0.5'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Plovoucí 3D objekty */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              background: `rgba(56, 189, 248, ${Math.random() * 0.2 + 0.1})`,
              transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
              animation: `float-3d ${Math.random() * 10 + 15}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Dynamická kruhová animace */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          <div className="absolute inset-0 rounded-full border border-accent/10 animate-ping" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Gradientní blobby na pozadí */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-accent/20 filter blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -left-96 w-[500px] h-[500px] rounded-full bg-primary/20 filter blur-3xl animate-float-horizontal-slow"></div>
        <div className="absolute -bottom-64 right-1/4 w-96 h-96 rounded-full bg-accent/15 filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              {(translations as any)[language].projectsTitle.split(' ')[0]} <span className="text-accent">{(translations as any)[language].projectsTitle.split(' ')[1]}</span>
            </h2>
            <div></div>
          </div>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className={`md:col-span-6 lg:col-span-7 order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-2xl font-clash font-semibold mb-3">{(translations as any)[language][project.titleKey]}</h3>
                    <p className="text-gray-300 mb-4">{(translations as any)[language][project.descriptionKey]}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            background: `linear-gradient(120deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 25, 0.9))`,
                            border: '1px solid rgba(56, 189, 248, 0.2)',
                            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {(translations as any)[language][tech]}
                        </span>
                      ))}
                    </div>

                  </div>
                  <div className={`md:col-span-6 lg:col-span-5 order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    {project.image ? (
                      <div className="rounded-lg overflow-hidden border border-muted relative transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
                        <img src={project.image} alt={(translations as any)[language][project.titleKey]} className="w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/60"></div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
                        <div className="text-4xl text-accent mb-4">
                          <i className="ri-add-circle-line"></i>
                        </div>
                        <h3 className="text-2xl font-clash font-semibold mb-3">
                          {(translations as any)[language].futureProject}
                        </h3>
                        <p className="text-gray-400 max-w-lg mx-auto">
                          {(translations as any)[language].futureProjectDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Zástupné místo pro budoucí projekt */}
            <div className="project-card">
              <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
                <div className="text-4xl text-accent mb-4">
                  <i className="ri-add-circle-line"></i>
                </div>
                <h3 className="text-2xl font-clash font-semibold mb-3">
                  {(translations as any)[language].futureProject}
                </h3>
                <p className="text-gray-400 max-w-lg mx-auto">
                  {(translations as any)[language].futureProjectDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
