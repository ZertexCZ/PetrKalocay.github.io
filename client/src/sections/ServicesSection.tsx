import { useRef } from 'react';
import { services } from '@/data/services';
import { translations } from '@/data/translations';
import { useLanguage } from '@/contexts/LanguageContext';

// Komponenta pro animované vlny
const AnimatedWaves = () => (
  <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
    {Array.from({ length: 3 }).map((_, i) => (
      <div 
        key={i}
        className="absolute w-full"
        style={{
          height: '200px',
          bottom: `${i * 100}px`,
          background: 'rgba(56, 189, 248, 0.1)',
          borderRadius: '50%',
          transform: 'scaleX(1.5)',
          animation: `wave-animation ${8 + i * 2}s ease-in-out infinite alternate`,
          opacity: 0.3 - i * 0.1
        }}
      />
    ))}
  </div>
);

// Komponenta pro plovoucí ikony služeb
const FloatingIcons = () => {
  const icons = [
    'ri-code-s-slash-line',
    'ri-terminal-box-line',
    'ri-robot-line',
    'ri-palette-line',
    'ri-customer-service-2-line',
    'ri-service-line'
  ];
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => {
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        const randomSize = Math.random() * 30 + 20;
        const randomRotation = Math.random() * 360;
        const randomDuration = Math.random() * 10 + 15;
        const randomDelay = Math.random() * 5;
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        return (
          <div 
            key={i}
            className="absolute text-accent opacity-10"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              fontSize: `${randomSize}px`,
              transform: `rotate(${randomRotation}deg)`,
              animation: `float-service ${randomDuration}s ease-in-out infinite ${randomDelay}s`
            }}
          >
            <i className={randomIcon}></i>
          </div>
        );
      })}
    </div>
  );
};

// Komponenta pro pozadí s patternem
const PatternBackground = () => (
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2338bdf8' fill-opacity='0.25'/%3E%3C/svg%3E")`,
    }}></div>
  </div>
);

// Komponenta pro gradientní blobby
const GradientBlobs = () => (
  <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
    <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-accent/20 filter blur-3xl animate-float-slow"></div>
    <div className="absolute top-1/2 -left-96 w-[500px] h-[500px] rounded-full bg-primary/20 filter blur-3xl animate-float-horizontal-slow"></div>
    <div className="absolute -bottom-64 right-1/4 w-96 h-96 rounded-full bg-accent/15 filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
  </div>
);

// Komponenta pro kartu služby
const ServiceCard = ({ service, index, language }: { service: any, index: number, language: string }) => (
  <div 
    key={index} 
    className="service-card group p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
    style={{
      background: 'linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 25, 0.9))',
      border: '1px solid rgba(56, 189, 248, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
    }}
  >
    <div className="text-3xl text-accent mb-4 group-hover:transform group-hover:scale-110 transition-transform duration-300">
      <i className={service.icon}></i>
    </div>
    <h3 className="text-xl font-clash font-semibold mb-2 group-hover:text-accent transition-colors">
      {(translations as any)[language][service.titleKey]}
    </h3>
    <p className="text-gray-400 mb-4" dangerouslySetInnerHTML={{ __html: (translations as any)[language][service.descriptionKey] }}></p>
    <div className="text-xs text-gray-500">{(translations as any)[language][service.detailsKey]}</div>
  </div>
);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #121218 0%, #1a1a24 50%, #121218 100%, #121218 100%)",
        backgroundSize: "200% 200%",
        animation: "bg-pulse 15s ease infinite",
        boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.2)"
      }}
    >
      {/* Pozadí a dekorativní prvky */}
      <PatternBackground />
      <AnimatedWaves />
      <FloatingIcons />
      <GradientBlobs />
      
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              {(translations as any)[language].servicesTitle.split(' ')[0]} <span className="text-accent">{(translations as any)[language].servicesTitle.split(' ')[1]}</span>
            </h2>
            <div></div>
          </div>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              {(translations as any)[language].servicesDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;