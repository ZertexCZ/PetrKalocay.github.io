import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  const educationData = [
    {
      period: (translations as any)[language].current,
      title: (translations as any)[language].school,
      subtitle: (translations as any)[language].field,
      description: (translations as any)[language].currentDesc
    },
    {
      period: (translations as any)[language].year2024,
      title: (translations as any)[language].soc,
      subtitle: (translations as any)[language].socAchievement,
      description: (translations as any)[language].socDesc
    },
    {
      period: (translations as any)[language].elementary,
      title: (translations as any)[language].englishOlympiad,
      subtitle: (translations as any)[language].secondPlace,
      description: (translations as any)[language].olympiadDesc
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              {(translations as any)[language].educationTitle.split(' & ')[0]} & <span className="text-accent">{(translations as any)[language].educationTitle.split(' & ')[1]}</span>
            </h2>
            <div></div>
          </div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="col-span-2 mb-4 md:mb-0">
                  <div className="p-3 bg-background rounded-lg border border-muted inline-block">
                    <span className="text-accent font-mono">{item.period}</span>
                  </div>
                </div>
                <div className="col-span-6 relative pl-6 md:pl-0">
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-muted"></div>
                  <div className="md:hidden absolute left-0 top-0 w-2.5 h-2.5 -ml-[5px] rounded-full bg-accent"></div>
                  
                  <h3 className="text-xl font-clash font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-3">{item.subtitle}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
