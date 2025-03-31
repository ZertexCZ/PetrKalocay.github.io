import { useRef } from 'react';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16 bg-card"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              My <span className="text-accent">Projects</span>
            </h2>
            <div></div>
          </div>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className={`md:col-span-6 lg:col-span-7 order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-2xl font-clash font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-background rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                  <div className={`md:col-span-6 lg:col-span-5 order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    {project.image ? (
                      <div className="rounded-lg overflow-hidden border border-muted relative transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
                        <img src={project.image} alt={project.title} className="w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/60"></div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
                        <div className="text-4xl text-accent mb-4">
                          <i className="ri-add-circle-line"></i>
                        </div>
                        <h3 className="text-2xl font-clash font-semibold mb-3">Future Project</h3>
                        <p className="text-gray-400 max-w-lg mx-auto">
                          This space is reserved for future projects. Stay tuned for more innovative work coming soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Future Project Placeholder */}
            <div className="project-card">
              <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
                <div className="text-4xl text-accent mb-4">
                  <i className="ri-add-circle-line"></i>
                </div>
                <h3 className="text-2xl font-clash font-semibold mb-3">Future Project</h3>
                <p className="text-gray-400 max-w-lg mx-auto">
                  This space is reserved for future projects. Stay tuned for more innovative work coming soon.
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
