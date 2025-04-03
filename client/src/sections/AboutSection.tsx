import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Dynamické mřížkové pozadí */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      {/* Pohyblivé prvky s akcentní barvou */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-accent/10 filter blur-xl animate-float-slow"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent/10 filter blur-xl animate-float-slow"></div>

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              {(translations as any)[language].aboutTitle.split(' ')[0]} <span className="text-accent">{(translations as any)[language].aboutTitle.split(' ')[1]}</span>
            </h2>
            <div></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                {(translations as any)[language].aboutDescription1}
              </p>
              <p className="text-lg text-gray-300">
                {(translations as any)[language].aboutDescription2}
              </p>
              <p className="text-lg text-gray-300">
                {(translations as any)[language].aboutDescription3}
              </p>
              <div className="pt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono text-accent">{(translations as any)[language].name}</p>
                    <p className="font-medium">{(translations as any)[language].nameValue}</p>
                  </div>
                  <div>
                    <p className="font-mono text-accent">{(translations as any)[language].age}</p>
                    <p className="font-medium">{(translations as any)[language].ageValue}</p>
                  </div>
                  <div>
                    <p className="font-mono text-accent">{(translations as any)[language].email}</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=petrkalocay@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent transition-colors"
                    >
                      {(translations as any)[language].emailValue}
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-accent">{(translations as any)[language].socialNetworks}</p>
                    <a href="https://instagram.com/p.kalocay" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent transition-colors">{(translations as any)[language].instagramValue}</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background/80 z-10"></div>
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-sm uppercase tracking-widest text-accent mb-2">{(translations as any)[language].languages}</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>{(translations as any)[language].czech}</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div className="bg-accent h-1.5 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>{(translations as any)[language].english}</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div className="bg-accent h-1.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>{(translations as any)[language].german}</span>
                      <span>30%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div className="bg-accent h-1.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full">
                <img 
                  src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Pracovní prostor s počítačovou sestavou" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
